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
  task:object;

  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.getTasksFromService();
  }
  // getTasksFromService(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => {
  //     console.log('Got Tasks!',data);
  //     this.tasks = data['tasks'];
  //   });
  onClick(tasks: ArrayType): void {
    console.log('Button working', tasks);
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got Tasks!',data);
      this.tasks = data['tasks'];
    });
  }
  showClick(id: Number): void {
    console.log('Show button working');
    let observable = this._httpService.getOne();
    observable.subscribe(data => {
      console.log(data);
      this.task = data['task'];
    })
  }
 
}
