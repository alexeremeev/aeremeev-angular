import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskContainerService } from '../../../shared/services/task-container.service';
import { HelperService } from '../../../shared/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Output() deleteTaskEmitter = new EventEmitter<number>();
  @Input() id: number;
  @Input() name: string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() status: string;

  constructor(private helperService: HelperService, private taskContainerService: TaskContainerService, private router: Router) { }

  ngOnInit() {
  }

  deleteTask() {
    this.deleteTaskEmitter.emit(this.id)
  }
  editTask() {
    this.router.navigate(['tasks', this.id])
    // let task = new Task(
    //   this.id,
    //   this.name,
    //   this.category,
    //   this.dateStart,
    //   this.dateEnd,
    //   this.status
    // );
    // this.taskContainerService.updateData(task);
  }

}
