import { Component, OnInit } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  checked: boolean = false;
  tasks: Task[] = [
    new Task (
      'Первая задача',
      'Первая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Выполнено'
    ),
    new Task (
      'Вторая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Выполнено'
    ),
    new Task (
      'Третья задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Выполнено'
    ),
    new Task (
      'Четвертая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Запланировано'
    ),
    new Task (
      'Пятая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Запланировано'
    ),
    new Task (
      'Шестая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Просрочено'
    ),
    new Task (
      'Седьмая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Просрочено'
    ),
    new Task (
      'Восьмая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Просрочено'
    )

  ];

  constructor() { }

  ngOnInit() {
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
  deleteTaskFromArray(name: string) {
    let index = this.tasks.findIndex((task) => task.name === name);
    if (index != -1) {
      this.tasks.splice(index, 1);
    }
    console.log('Задача ' + name + ' удалена');
  }
  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }
  addNewTask(task: Task) {
    this.tasks.push(task);
  }

}


