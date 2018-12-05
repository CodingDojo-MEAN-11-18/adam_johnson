import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getOne();
    // this.createTask();
    // this.updateTask();
    this.deleteTask();
   }
  getTasks(){
    let tempObservable = this._http.get('/');
    tempObservable.subscribe(data => console.log("Got our tasks", data));
  }
  getOne(){
    let tempObservable = this._http.get('/:id');
    tempObservable.subscribe(data => console.log("Got task", data));
  }
  // createTask(){
  //   let tempObservable = this._http.post('/');
  //   tempObservable.subscribe(data => console.log("Created task", data));
  // }
  // updateTask(){
  //   let tempObservable = this._http.put('/:id');
  //   tempObservable.subscribe(data => console.log("Updated task", data));
  // }
  deleteTask(){
    let tempObservable = this._http.delete('/:id');
    tempObservable.subscribe(data => console.log("Deleted task", data));
  }
}


