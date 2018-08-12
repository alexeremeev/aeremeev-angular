import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: '[app-task-edit]',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, OnDestroy, OnChanges {
  @Output() completeEditEmitter = new EventEmitter<Task>();
  @Input() task: Task;

  constructor() { }

  ngOnInit() {
    console.log('initializing edit-task component')
  }
  ngOnDestroy() {
    console.log('destroying edit-task component')
  }
  ngOnChanges() {
    console.log('task to edit changed, entering edit mode for task: ' + this.task);
    if (this.task.status == 'Выполнено') {
      alert('Выполненные задачи не подлежат редактированию!');
      this.cancelEdit();
    }
  }


  editTask() {
    this.completeEditEmitter.emit(this.task);
  }
  cancelEdit() {
    this.completeEditEmitter.emit(null);
  }

}
