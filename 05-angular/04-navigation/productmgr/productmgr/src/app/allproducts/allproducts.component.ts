import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../models/product';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';



@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  products: Product[] = [];
  editProduct: Product;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.allProducts();
  }

  allProducts() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log('Got Products', data);
      this.products = data['products'];
    });
  }

  removeProduct(ProductID: string) {
    console.log('Delete button working');
    const observable = this._httpService.deleteProduct(ProductID);
    observable.subscribe(data => {
      console.log('Deleted', data);
      this.allProducts();
    });
  }


}


