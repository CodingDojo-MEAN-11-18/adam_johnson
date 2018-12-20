import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Author } from '../models/author';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: Author[]=[];

  constructor(private _httpService:HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors(){
    let observable = this._httpService.allAuthors();
    observable.subscribe(data => {
      console.log('Got Authors', data);
      this.authors = data['authors']
      console.log(this.authors);
    })
  }

  deleteClick(authorID:Number){
    console.log('Delete button working')
    let observable = this._httpService.deleteAuthor(authorID)
    observable.subscribe(data => {
      console.log(data)
      this.getAuthors();
    })
  }

}
