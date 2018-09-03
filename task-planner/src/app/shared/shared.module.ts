import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelperService } from './services/helper.service';
import { TaskContainerService } from './services/task-container.service';
import { MyTitleCasePipe } from './pipes/my-title-case.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ValidDateDirective } from './directives/valid-date.directive';
import { LogDirective } from './directives/log.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    HelperService,
    TaskContainerService
  ],
  declarations: [
    LogDirective,
    ValidDateDirective,
    HighlightDirective,
    MyTitleCasePipe
  ],
  exports: [
    MyTitleCasePipe
  ]
})
export class SharedModule { }
