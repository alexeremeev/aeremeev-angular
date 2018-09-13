import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';
import { TaskContainerService } from '../../../shared/services/task-container.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskStorageService } from '../../../shared/services/task-storage.service';

@Component({
  selector: '[app-task-edit]',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit, OnDestroy, OnChanges {
  @Output() completeEditEmitter = new EventEmitter<Task>();
  @Input() task: Task;

  constructor(private taskContainerService: TaskContainerService, private storage: TaskStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.task = {...this.storage.findById(id)};
    this.checkStatus();
  //   this.taskContainerService.dataUpdate$.subscribe((data: Task) => {
  //     console.log('task to edit', data);
  //     this.task = data;
  // });
    console.log('initializing edit-task component')
  }
  ngOnDestroy() {
    console.log('destroying edit-task component')
  }

  ngOnChanges() {
  }

  checkStatus() {
    if (this.task && this.task.status === 'Выполнено') {
      alert('Выполненные задачи не подлежат редактированию!');
      this.cancelEdit();
    }
  }

  editTask() {
    console.log('done editing');
    this.storage.updateTask(this.task);
    this.router.navigate(['/tasks']);
    // this.taskContainerService.updateData(this.task);
  }
  cancelEdit() {
    this.completeEditEmitter.emit(null);
    this.task = null;
    this.router.navigate(['/tasks']);
  }

}
