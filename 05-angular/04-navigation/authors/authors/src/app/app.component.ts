import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // newAuthor: Author;
  // authors: Author[]=[];
  // changeAuthor: Author;

  constructor(
    private _httpService:HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ){ }

  ngOnInit(){
    // this.getAuthors();
    this._router.navigate(['/authors'])
  }

  // addAuthor(){
  //   console.log('Add button working')
  //   this.newAuthor = {name:""}
  // }
  // submitAuthor(){
  //   let observable = this._httpService.createAuthor(this.newAuthor);
  //   observable.subscribe(data => {
  //     console.log(data);
  //     this.getAuthors();
  //     this.newAuthor = {name: ""}
  //     this.newAuthor = null;
  //   })
  // }

  // getAuthors(){
  //   let observable = this._httpService.allAuthors();
  //   observable.subscribe(data => {
  //     console.log('Got Authors', data);
  //     this.authors = data['authors']
  //     console.log(this.authors);
  //   })
  // }

  // editClick(author:Author){
  //   console.log('Edit button working', author._id)
  //   let observable = this._httpService.getAuthor(author._id)
  //   observable.subscribe(data => {
  //     this.changeAuthor = data['author']
  //   })
  // }

  // editSubmit(authorID:Number){
  //   let observable = this._httpService.editAuthor(authorID, this.changeAuthor)
  //   observable.subscribe(data => {
  //     console.log(data)
  //     this.getAuthors();
  //     this.changeAuthor = {name: ""}
  //     this.changeAuthor = null;
  //   })
  // }


  // cancelEdit(){
  //   console.log('Cancel button working')
  //   this.changeAuthor = null;
  // }

  // cancelAdd(){
  //   console.log('Cancel button working')
  //   this.newAuthor = null;
  // }
}
