import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './models';
import { AuthService } from './services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  registrationErrors: string[] = [];

  user: User = new User();

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}


  userLogin(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('logging in user', form.value);
    this.auth.login({...form.value}).subscribe(user => {
      console.log(user);
    });
  }

}
