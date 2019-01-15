import { Component, OnInit } from '@angular/core';
import { ListingService } from '../../services';
import { Router } from '@angular/router';
import { Listing } from '../../models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listing-new',
  templateUrl: './listing-new.component.html',
  styleUrls: ['./listing-new.component.css']
})
export class ListingNewComponent implements OnInit {

  listing: Listing = new Listing;

  constructor(
    private readonly listingService: ListingService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  makeListing(listing: Listing, form: NgForm) {
    this.listingService.createListing(listing)
      .subscribe(createdListing => {
        console.log('created listing', createdListing);
        form.reset();
        this.router.navigate(['/listings']);
      });
  }

}
