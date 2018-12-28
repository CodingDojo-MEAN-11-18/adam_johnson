import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../models/product';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  newProduct: Product;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newProduct = {title: '', price: 0};
  }

  productSubmit() {
    const observable = this._httpService.createProduct(this.newProduct);
    observable.subscribe(data => {
      console.log(data);
      this.loadProducts();
    });
  }

  cancelCreate() {
    console.log('cancel button working');
    this.loadProducts();
  }

  loadProducts() {
    this._router.navigate(['/products']);

  }

}
