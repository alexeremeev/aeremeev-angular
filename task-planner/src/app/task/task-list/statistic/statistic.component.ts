import { Component, Input, OnInit } from '@angular/core';
import { HelperService } from '../../../shared/services/helper.service';
@Component({
  providers: [HelperService],
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  currentDate: string;

  @Input() tasksAll;
  @Input() tasksPlanned;
  @Input() tasksOverdue;
  @Input() tasksFinished;

  constructor(private helperService: HelperService) {
    let date = new Date();
    this.currentDate = date.toISOString();
  }

  ngOnInit() {
  }

}
