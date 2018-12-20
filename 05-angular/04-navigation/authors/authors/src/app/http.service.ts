import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  createAuthor(newAuthor){
    return this._http.post('/api/authors',newAuthor);
  }
  allAuthors(){
    return this._http.get('/api/authors');
  }
  getAuthor(authorID){
    return this._http.get(`/api/authors/${authorID}`)
  }
  editAuthor(authorID,author){
    return this._http.put(`/api/authors/${authorID}`, author)
  }
  deleteAuthor(authorID){
    return this._http.delete(`/api/authors/${authorID}`)
  }
  editQuote(authorID,quoteID,change){
    console.log(authorID);
    console.log(quoteID);
    return this._http.put(`/api/authors/${authorID}/quotes/${quoteID}`, {change})
  }
  deleteQuote(authorID,quoteID){
    return this._http.delete( `/api/authors/${authorID}/quotes/${quoteID}`)
  }
}
