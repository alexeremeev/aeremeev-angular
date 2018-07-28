import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [
    {
      name: 'Первая задача',
      category: 'Первая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Выполнено'
    },
    {
      name: 'Вторая задача',
      category: 'Вторая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Выполнено'
    },
    {
      name: 'Третья задача',
      category: 'Вторая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Выполнено'
    },
    {
      name: 'Четвертая задача',
      category: 'Вторая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Запланировано'
    },
    {
      name: 'Пятая задача',
      category: 'Вторая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Запланировано'
    },
    {
      name: 'Шестая задача',
      category: 'Вторая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Просрочено'
    },
    {
      name: 'Седьмая задача',
      category: 'Вторая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Просрочено'
    },
    {
      name: 'Восьмая задача',
      category: 'Вторая категория',
      dateStart: '2018-07-28 10:36',
      dateEnd: '2018-07-28 11:36',
      status: 'Просрочено'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    console.log('Задача создана');
  }

  filterTasks($event) {
    console.log('showAll - ', $event.target.checked);
  }
  getTaskListsSize() {
    return this.tasks.length;
  }
  deleteTaskFromArray(name: string) {
    console.log('Задача ' + name + ' удалена');
  }
  getTasksAmountByStatus(status: string) {
    return this.tasks.filter(task => task.status === status).length;
  }

}


