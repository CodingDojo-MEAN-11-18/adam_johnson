import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ArrayType } from '../../node_modules/@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks = [];
  task: Object;
  newTask: Object;
  changeTask: Object;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.newTask = {title: "", desctiption: ""}
    this.getTasksFromService();
  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got Tasks!',data);
      this.tasks = data['tasks'];
    })
  }
  // onClick(tasks: ArrayType): void {
  //   console.log('Button working', tasks);
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     console.log('Got Tasks!',data);
  //     this.tasks = data['tasks'];
  //   });
  // }
  showClick(taskID:Number): void {
    console.log('Show button working', taskID);
    let observable = this._httpService.getOne(taskID);
    observable.subscribe(data => {
      console.log(data);
      this.task = data['task'];
    })
  }
  editClick(taskID:Number): void {
    console.log('Edit button working', taskID);
    let observable = this._httpService.editOne(taskID);
    observable.subscribe(data => {
      console.log(data);
      this.changeTask = data['task'];
    })
  }
  deleteClick(taskID:Number): void {
    console.log('Delete button working', taskID);
    let observable = this._httpService.deleteTask(taskID);
    observable.subscribe(() => {
      console.log('Deleted task');
      this.getTasksFromService();
    })
  }
  onSubmit() {
    console.log('Submitting form');
    let observable = this._httpService.addTask(this.newTask)
    observable.subscribe(data => {
      console.log('Submitted task', data);
      this.getTasksFromService();
      this.newTask = { title: "", desctiption: "" }
    })
  }
  editSubmit(taskID:Number) {
    console.log('Editting form submission');
    let observable = this._httpService.editTask(taskID,this.changeTask)
    observable.subscribe(data => {
      console.log('Altered task', data);
      this.getTasksFromService();
    })
  }
}
