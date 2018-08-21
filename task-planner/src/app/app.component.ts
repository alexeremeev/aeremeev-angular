import { Component } from '@angular/core';
import *  as moment from 'moment';
import { HelperService } from './shared/services/helper.service';
@Component({
  providers: [HelperService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
