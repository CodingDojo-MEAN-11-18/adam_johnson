import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Cake, Review } from './models/cake';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newCake: Cake;
  newReview: Review;
  cakes: Cake[]=[];
  cake: Cake;
  review: Review;


  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getCakesFromService();
    this.newCake = {baker: "", image: "", reviews: []};
    this.newReview = {rating: 1, comment: ""}
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

  reviewClick(cake:Cake,form:NgForm,event:Event) {
    event.preventDefault();
    console.log('Submitting Review', cake, form.value)
    let observable = this._httpService.addReview({...form.value,cake:cake._id});
    observable.subscribe(data => {
      console.log('Submitted Reivew', data);
      this.newReview = data['review'];
      this.newReview = {rating: 1, comment: ""};
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
