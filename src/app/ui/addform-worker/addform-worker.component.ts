import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {
  id: number;
  name = '';
  surname = '';
  phone = '';
  type = 0;
  myWorkerType = MyWorkerType;
  worker: MyWorker;
  public maska = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];

  workerForm: FormGroup;

  @Output() addWorker = new EventEmitter();
  @Output() editWorker = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
    this.workerForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl({ value: null, disabled: false }, [Validators.required]),
      surname: new FormControl({ value: null, disabled: false }, [Validators.required]),
      type: new FormControl({ value: 0, disabled: false }, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
    })
  }

  onAddWorker() {
    this.worker = this.workerForm.value;
    this.addWorker.emit(this.worker);
  }

  onEditdWorker() {
    this.worker = this.workerForm.value;
    this.editWorker.emit(this.worker);
  }
}
