import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';
import { Task } from '../../task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskContainerService {

  private dataSource = new Subject<Task>();

  dataUpdate$ = this.dataSource.asObservable();

  updateData(task: Task) {
    this.dataSource.next(task);
  }

  constructor() { }

}
