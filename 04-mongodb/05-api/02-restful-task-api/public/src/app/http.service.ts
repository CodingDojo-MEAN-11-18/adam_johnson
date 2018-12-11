import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOne();
   }
  getTasks(){
    // let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Got our tasks", data));
    return this._http.get('/tasks');
  }
  getOne(taskID){
    // let tempObservable = this._http.get('/:id');
    // tempObservable.subscribe(data => console.log("Got task", data));
    return this._http.get(`/${taskID}`);
  }
  editOne(taskID){
    return this._http.get(`/${taskID}`);
  }
  addTask(newtask){
    return this._http.post('/task',newtask);
  }
  editTask(taskID,task){
    return this._http.put(`/${taskID}`, task);
  }
  deleteTask(taskID){
    return this._http.delete(`/${taskID}`)
  }
}


