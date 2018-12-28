import { Component, OnInit } from '@angular/core';
import { NoteService } from './services';

import { Note } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  note: Note;
  notes: Note [] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit() {
    this.note = { content: ''};
    this.findNotes();
  }

  onSubmit() {
    console.log('Adding note');
    this.noteService.makeNote(this.note).subscribe(note => {
      console.log(note);
      this.findNotes();
      this.note = {content: ''};
    });
  }

  findNotes() {
    this.noteService.getNotes().subscribe(notes => {
      console.log(notes);
      this.notes = notes;
    });
  }

}
