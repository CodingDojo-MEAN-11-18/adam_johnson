import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-reviewdetails',
  templateUrl: './reviewdetails.component.html',
  styleUrls: ['./reviewdetails.component.css']
})
export class ReviewdetailsComponent implements OnInit {

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

  loadDetails() {
    this._router.navigate(['/reviews/details'])
  }


}
