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

  constructor() { }

  ngOnInit() {
  }

  editTask() {
    this.completeEditEmitter.emit(this.task);
  }
  cancelEdit() {
    this.completeEditEmitter.emit(null);
  }

}
