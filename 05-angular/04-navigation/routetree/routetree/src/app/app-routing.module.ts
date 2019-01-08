import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductsdetailComponent } from './products/productsdetail/productsdetail.component';
import { BrandComponent } from './products/brand/brand.component';
import { CategoryComponent } from './products/category/category.component';

import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewdetailsComponent } from './reviews/reviewdetails/reviewdetails.component';
import { AuthorComponent } from './reviews/author/author.component';
import { AllreviewsComponent } from './reviews/allreviews/allreviews.component';



const routes: Routes = [
  { path: 'products', component: ProductsComponent, children: [
    { path: 'details/:id', component: ProductsdetailComponent },
    { path: 'brand/:brand', component: BrandComponent },
    { path: 'category/:cat', component: CategoryComponent }]
  },
  { path: 'reviews', component: ReviewsComponent, children: [
    { path: 'details/:id', component: ReviewdetailsComponent },
    { path: 'author/:id', component: AuthorComponent },
    { path: 'all/:id', component: AllreviewsComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
