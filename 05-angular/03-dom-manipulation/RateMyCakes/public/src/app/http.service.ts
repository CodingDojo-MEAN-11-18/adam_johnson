import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) {}

  getCakes(){
    return this._http.get('/cakes');
  }
  addCake(newCake){
    return this._http.post('/cakes', newCake);
  }
  addReview(newReview){
    return this._http.post(`/reviews/${newReview.cake}`, newReview);
  }
  getCake(cakeID){
    return this._http.get(`/cakes/${cakeID}`);
  }
}
