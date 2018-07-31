import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Output() deleteTaskEmitter = new EventEmitter<Task>();

  @Input() name : string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }
  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }

}
