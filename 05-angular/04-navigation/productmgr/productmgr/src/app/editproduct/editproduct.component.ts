import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../models/product';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productID: string;
  changedProduct: Product;
  

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id'])
      this.productID = params['id']
    });
    this.getProduct();
  }

  getProduct(){
    let observable = this._httpService.getOne(this.productID)
    observable.subscribe(data => {
      this.changedProduct = data['product']
      console.log(this.changedProduct);
    })
  }

  editProduct(){
    let observable = this._httpService.editOne(this.productID,this.changedProduct)
    observable.subscribe(data => {
      this.changedProduct = data['product']
      this._router.navigate(['/products'])
    })
  }

  removeProduct(){
    console.log('Delete button working');
    let observable = this._httpService.deleteProduct(this.productID)
    observable.subscribe(data => {
      console.log('Deleted', data);
      this._router.navigate(['/products'])
    })
  }

}
