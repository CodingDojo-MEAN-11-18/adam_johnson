import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Author } from './models/author';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  newAuthor: Author;
  authors: Author[]=[];
  changeAuthor: Author;

  constructor(private _httpService:HttpService){}

  ngOnInit(){
    this.getAuthors();
  }

  addAuthor(){
    console.log('Add button working')
    this.newAuthor = {name:""}
  }
  submitAuthor(){
    let observable = this._httpService.createAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log(data);
      this.getAuthors();
      this.newAuthor = {name: ""}
      this.newAuthor = null;
    })
  }

  getAuthors(){
    let observable = this._httpService.allAuthors();
    observable.subscribe(data => {
      console.log('Got Authors', data);
      this.authors = data['authors']
      console.log(this.authors);
    })
  }

  editClick(author:Author){
    console.log('Edit button working', author._id)
    let observable = this._httpService.getAuthor(author._id)
    observable.subscribe(data => {
      this.changeAuthor = data['author']
    })
  }

  editSubmit(authorID:Number){
    let observable = this._httpService.editAuthor(authorID, this.changeAuthor)
    observable.subscribe(data => {
      console.log(data)
      this.getAuthors();
      this.changeAuthor = {name: ""}
      this.changeAuthor = null;
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

  cancelEdit(){
    console.log('Cancel button working')
    this.changeAuthor = null;
  }

  cancelAdd(){
    console.log('Cancel button working')
    this.newAuthor = null;
  }
}
