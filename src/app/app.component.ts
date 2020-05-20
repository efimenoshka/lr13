import { Component } from '@angular/core';
import { MyWorker, MyWorkersDatabase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'List of employees';
  workers: MyWorker[] = MyWorkersDatabase;
  myWorkerType = MyWorkerType;

  getByType(type: number) {
    return this.workers.filter((worker) => worker.type === type);
  }

  onDeleteWorker(id: number) {
    let index = this.workers.findIndex((worker) => worker.id === id);
    if (index !== -1) {
      this.workers.splice(index, 1);
    }
  }

  onAddWorker(worker: MyWorker) {
    let id = this.workers.length > 0 ? this.workers[this.workers.length - 1].id + 1 : 0;
    worker.id = id;
    this.workers.push(worker);
  }

  onEditWorker(worker1: MyWorker) {
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
  }
}