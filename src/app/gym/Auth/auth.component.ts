import { AuthService } from '../Feature/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'auth.component.html',
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMessage?: string;

  constructor(private router: Router, private auth: AuthService) {}

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth
        .authenticate(this.username ?? '', this.password ?? '')
        .subscribe((response) => {
          if (response) {
            this.errorMessage = undefined;
            this.router.navigateByUrl('/auth/admin');
          } else {
            this.errorMessage = 'Authentication Failed';
          }
        });
    } else {
      this.errorMessage = 'Form Data Invalid';
    }
  }
}
