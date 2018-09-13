import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: '[app-task-add]',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  @Output() addTaskEmitter = new EventEmitter<Task>();
  @Input() name : string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    let task = new Task(
      null,
      this.name,
      this.category,
      this.dateStart,
      this.dateEnd,
      this.status = '' ? 'Запланировано' : this.status
    );
    this.addTaskEmitter.emit(task);
    this.clearInputs();
    console.log('Задача создана');
  }

  clearInputs() {
    this.name = '';
    this.category = '';
    this.dateStart = '';
    this.dateEnd = '';
    this.status = '';
  }
}
