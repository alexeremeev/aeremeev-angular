import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: '[app-task-edit]',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
  @Output() completeEditEmitter = new EventEmitter<Task>();
  @Input() task: Task;

  @Input() name : string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
    this.task = new Task('','','','','');
  }
    populateInputs(task: Task) {
    this.name = task.name;
    this.category = task.category;
    this.dateStart = task.dateStart;
    this.dateEnd = task.dateEnd;
    this.category = task.category;
  }

  clearInputs() {
    this.name = '';
    this.category = '';
    this.dateStart = '';
    this.dateEnd = '';
    this.status = '';
  }

  editTask() {
    this.completeEditEmitter.emit(this.task);
    this.clearInputs();
  }
  cancelEdit() {
    this.clearInputs();
    this.completeEditEmitter.emit(null);
  }

}
