import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string | null = null;
  constructor(private router: Router) {}
  authenticate(form: NgForm) {
    if (form.valid) {
      if (this.username === 'admin' && this.password === 'secret') {
        this.errorMessage = null;
        this.router.navigateByUrl('/auth/admin'); // or wherever you want to go
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    } else {
      this.errorMessage = 'Please fill out the form correctly';
    }
  }
}
