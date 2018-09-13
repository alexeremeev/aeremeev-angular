import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from '../task/task-list/task-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NotesListComponent } from '../notes-list/notes-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskEditComponent } from '../task/task-list/task-edit/task-edit.component';
import { Task } from '../task/task-list/task.model';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: "full"},
  {path: 'tasks',
    data: { permission: 'Tasks' },
    children: [
      { path: '', component: TaskListComponent },
      { path: ':id', component: TaskEditComponent, data: { task: Task } },
    ]},
  {path: 'notes', component: NotesListComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
