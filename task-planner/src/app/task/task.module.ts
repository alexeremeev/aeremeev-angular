import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskEditComponent } from './task-list/task-edit/task-edit.component';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import { ListRowComponent } from './task-list/list-row/list-row.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { TaskListComponent } from './task-list/task-list.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ],
  declarations: [
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    TaskEditComponent,
  ],
  exports: [
    TaskListComponent,
    StatisticComponent,
    ListRowComponent,
    TaskAddComponent,
    TaskEditComponent
  ]
})
export class TaskModule { }
