import { Injectable } from '@angular/core';
import { Task } from '../../task/task-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskStorageService {
  tasks: Task[] = [
    new Task (
      1,
      'Первая задача',
      'Первая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Выполнено'
    ),
    new Task (
      2,
      'Вторая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Выполнено'
    ),
    new Task (
      3,
      'Третья задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Выполнено'
    ),
    new Task (
      4,
      'Четвертая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Запланировано'
    ),
    new Task (
      5,
      'Пятая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Запланировано'
    ),
    new Task (
      6,
      'Шестая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Просрочено'
    ),
    new Task (
      7,
      'Седьмая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Просрочено'
    ),
    new Task (
      8,
      'Восьмая задача',
      'Вторая категория',
      '2018-07-28 10:36',
      '2018-07-28 11:36',
      'Просрочено'
    )
  ];



  constructor() { }

  deleteTaskFromArray(id: number) {
    let result = false;
    let index = this.tasks.findIndex((task) => task.id === id);
    if (index != -1) {
      this.tasks.splice(index, 1);
      result = true;
    }
    console.log('Задача ' + id + ' удалена');
    return result;
  }
  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }
  addNewTask(task: Task) {
    task.id = this.tasks.length + 1;
    this.tasks.push(task);
  }

  updateTask(task: Task) {
    let result = false;
    let index = this.tasks.findIndex((taskToFind) => taskToFind.id === task.id);
    if (index != -1) {
      this.tasks[index] = task;
      result = true;
    }
    return result;
  }

  findById(id: number) {
    let result = null;
    let index = this.tasks.findIndex((task) => task.id === id);
    if (index != -1) {
      result = this.tasks[index]
    }
    return result;
  }

  findAll() {
    return this.tasks;
  }

  size() {
    return this.tasks.length;
  }
}
