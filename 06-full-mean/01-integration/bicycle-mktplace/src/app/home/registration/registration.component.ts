import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationErrors: string[] = [];

  user: User = new User ();

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  userRegister(user: User): void {
    this.auth.register(user).subscribe(
      createdUser => {
        console.log('created', createdUser);
        this.router.navigate(['/dashboard']);
      },
      error => {
        console.log('error', error);
        this.registrationErrors = error.error;
      });
  }

}
