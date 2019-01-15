import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loggedUser: Boolean = false;

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.auth.isAuthed$.subscribe(isLoggedIn => {
      this.loggedUser = isLoggedIn;
      console.log(this.loggedUser);
    });
  }

  logout() {
    this.auth.logout()
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
