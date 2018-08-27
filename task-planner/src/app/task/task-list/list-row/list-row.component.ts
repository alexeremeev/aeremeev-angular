import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskContainerService } from '../../../shared/services/task-container.service';
import { Task } from '../task.model';
import { HelperService } from '../../../shared/services/helper.service';

@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  @Input() name: string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() status: string;

  constructor(private helperService: HelperService, private taskContainerService: TaskContainerService) { }

  ngOnInit() {

  }

  deleteTask() {
    this.deleteTaskEmitter.emit(this.name)
  }
  editTask() {
    let task = new Task(
      this.name,
      this.category,
      this.dateStart,
      this.dateEnd,
      this.status
    );
    this.taskContainerService.updateData(task);
  }

}
