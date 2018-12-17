import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-productsdetail',
  templateUrl: './productsdetail.component.html',
  styleUrls: ['./productsdetail.component.css']
})
export class ProductsdetailComponent implements OnInit {

  parameter: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id'])
      this.parameter= params['id']
    });
  }

  loadReviews() {
    this._router.navigate(['/reviews/details'])
  }

}
