import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TaskModule } from './task/task.module';
import { RoutingModule } from './routing/routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    TaskModule,
    RoutingModule,
  ],
  exports: [
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
