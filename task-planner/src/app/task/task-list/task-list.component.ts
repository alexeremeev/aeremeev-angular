import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from './task.model';
import { TaskContainerService } from '../../shared/services/task-container.service';
import { TaskStorageService } from '../../shared/services/task-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit {
  editMode = false;
  checked: boolean = false;
  // fixedIndex: number;
  taskToEdit : Task;
  @Output() editEmitter = new EventEmitter<Task>();
  tasks: Task[];

  constructor(private taskContainerService: TaskContainerService,
              private taskStorageService: TaskStorageService,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.tasks = this.taskStorageService.findAll();
    this.taskContainerService.dataUpdate$.subscribe((task: Task) => {
      this.taskToEdit = task;
      if (task.id === null) {
        this.taskStorageService.addNewTask(task);
      } else {
        // this.router.navigate(['tasks', task.id]);
        this.taskStorageService.updateTask(task);
      }
      // if (this.fixedIndex != null && task != null) {
      //     this.changeTask(task);
      // } else if (this.fixedIndex != null) {
      //   this.fixedIndex = null;
      //   this.editMode = false;
      // } else {
      //   this.editTask(task.name);
      // }
    });
  }

  filterTasks($event) {
    this.checked = $event.target.checked;
    return $event.target.checked;
  }

  showRow(task) {
    return this.checked || task.status !== 'Выполнено';
  }
  getTaskListsSize() {
    return this.tasks.length;
  }
  deleteTaskFromArray(id: number) {
    this.taskStorageService.deleteTaskFromArray(id);
    // let index = this.tasks.findIndex((task) => task.name === name);
    // if (index != -1) {
    //   this.tasks.splice(index, 1);
    // }
    // console.log('Задача ' + name + ' удалена');
  }
  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }
  addNewTask(task: Task) {
    this.taskStorageService.addNewTask(task);
  }
  editTask(name: string) {
    this.editMode = true;
    let index = this.tasks.findIndex((task) => task.name === name);
    if (index != -1) {
      // this.fixedIndex = index;
      this.taskToEdit = {...this.tasks[index]};
    }
  }

  changeTask(task: Task) {
    this.editMode = false;
    this.taskStorageService.updateTask(task);
    // this.fixedIndex = null;
  }


}


