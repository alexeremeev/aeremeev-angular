import { Component, Input, OnInit } from '@angular/core';
import { Note } from './note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  @Input() content;

  notes: Note[] = [
    new Note (
      'Первая заметка',
      new Date()
    ),
    new Note (
      'Вторая заметка',
      new Date()
    ),
    new Note (
      'Третья заметка',
      new Date()
    )
  ];

  constructor() { }

  ngOnInit() {
  }

  addNote() {
    this.notes.push(new Note(this.content, new Date));
  }

}
