import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: Object;
  newReview: Object;
  cakes = [];
  cake: Object;


  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakesFromService();
    this.newCake = {baker: "", image: ""};
    this.newReview = {rating: Number, comment: ""}
  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log('Got Cakes', data);
      this.cakes = data['cakes']
    })
  }

  onSubmit() {
    console.log('Submitting Cake');
    let observable = this._httpService.addCake(this.newCake)
    observable.subscribe(data => {
      console.log('Submitted cake', data);
      this.getCakesFromService();
      this.newCake = {baker: "", image: ""}
    })
  }

  reviewClick(cakeID:Number) {
    console.log('Submitting Review')
    let observable = this._httpService.addReview(this.newReview,cakeID);
    observable.subscribe(data => {
      console.log('Submitted Reivew', data);
      this.newReview = data['review'];
      this.newReview = {rating: Number, comment: ""};
    })
  }

  showCake(cakeID:Number) {
    let observable = this._httpService.getCake(cakeID);
    observable.subscribe(data => {
      console.log('Got Cake', data);
      this.cake = data['cake'];
    })
  }
}
