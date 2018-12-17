import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-allreviews',
  templateUrl: './allreviews.component.html',
  styleUrls: ['./allreviews.component.css']
})
export class AllreviewsComponent implements OnInit {

  parameter: Array<number>

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

  loadReivews() {
    this._router.navigate(['/reviews/all'])
  }

}
