import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router) {}
  trainerRegister() {
    this.router.navigate(['/trainer-register']);
  }
  trainerLogin() {
    this.router.navigate(['/trainer-login']);
  }
  func() {
    if (localStorage.getItem('logged')) {
      // console.log(localStorage);
      return false;
    }
    return true;
  }
}
