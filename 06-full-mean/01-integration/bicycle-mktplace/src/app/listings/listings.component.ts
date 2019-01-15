import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services';
import { Listing } from '../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  listings: Listing[] = [];

  constructor(
    private readonly listingService: ListingService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.getListings();
  }

  getListings() {
    this.listingService.findListings()
      .subscribe(listings => {
        console.log('found listings', listings);
        this.listings = listings;
      });
  }

  removeListing(listing: Listing) {
    this.listingService.deleteListing(listing)
      .subscribe(deletedListing => {
        console.log(deletedListing);
        this.getListings();
      });
  }
}
