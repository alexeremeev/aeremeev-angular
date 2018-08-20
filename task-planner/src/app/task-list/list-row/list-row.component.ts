import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HelperService } from '../../shared/services/helper.service';

@Component({
  providers: [HelperService],
  selector: '[app-list-row]',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.css']
})
export class ListRowComponent implements OnInit {


  @Output() deleteTaskEmitter = new EventEmitter<string>();
  @Output() editTaskEmitter = new EventEmitter<string>();

  @Input() name: string;
  @Input() category: string;
  @Input() dateStart: string;
  @Input() dateEnd: string;
  @Input() status: string;

  constructor(private helperService: HelperService) { }

  ngOnInit() {
  }
  deleteTask() {
    this.deleteTaskEmitter.emit(this.name)
  }
  editTask() {
    this.editTaskEmitter.emit(this.name)
  }

}
