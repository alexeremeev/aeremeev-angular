import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {

  @Output() deleteTaskEmitter = new EventEmitter<string>();

  @Input() name : string;
  @Input() category;
  @Input() dateStart;
  @Input() dateEnd;
  @Input() status;

  constructor() { }

  ngOnInit() {
  }
  deleteTask() {
    this.deleteTaskEmitter.emit(this.name);
  }

}
