import { Component, OnInit } from '@angular/core';
import { MyWorker, MyWorkerType } from './shared/worker.model';
import { HttpWorkerskersService } from './shared/services/http-workerskers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'List of employees';
  workers: MyWorker[];
  myWorkerType = MyWorkerType;

  constructor(private httpWorkerskersService: HttpWorkerskersService) { }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      this.workers = await this.httpWorkerskersService.getWorkers();
    } catch (error) {
      console.error(error);
    }
  }

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  async onDeleteWorker(id: number) {
    try {
      let index = this.workers.findIndex((worker) => worker.id === id);
      if (index !== -1) {
        // this.workers.splice(index, 1);
        await  this.httpWorkerskersService.deleteWorker(id);
      }
    } catch (error) {
      console.error(error);
    } finally { this.getData(); }
  }

  async onAddWorker(worker: MyWorker) {
    try {
      let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
      worker.id = id;
      // this.workers.push(worker);
      await this.httpWorkerskersService.postWorker(worker);
    } catch (error) {
      console.error(error);
    } finally { this.getData(); }
  }

  async onEditWorker(worker1: MyWorker) {
    try {
      let id = worker1.id;
      let oldWorker = this.workers.find((worker) => worker.id === id);
      if (oldWorker == undefined) {
        alert("Employee not found");
      } else {
        oldWorker.name = worker1.name.trim() == '' ? oldWorker.name : worker1.name;
        oldWorker.surname = worker1.surname.trim() == '' ? oldWorker.surname : worker1.surname;
        oldWorker.type = worker1.type;
        oldWorker.phone = worker1.phone.trim() == '' ? oldWorker.phone : worker1.phone;
      }
      await this.httpWorkerskersService.putWorker(oldWorker);
    } catch (error) {
      console.error(error);
    } finally { this.getData(); }
  }
}