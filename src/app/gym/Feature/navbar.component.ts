import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
})
export class NavbarComponent {
  visible = false;
  constructor(private router: Router) {}
  func() {
    if (localStorage.getItem('logged')) {
      // console.log(localStorage);
      return false;
    }
    return true;
  }
  funcTrainer() {
    if (localStorage.getItem('loggedTrainer')) {
      // console.log(localStorage);
      return false;
    }
    return true;
  }

  gotoDashboard() {
    const loggedUserString = localStorage.getItem('logged');
    if (loggedUserString !== null) {
      const loggedUser = JSON.parse(loggedUserString);
      const userId = loggedUser.id;
      this.router.navigate(['/user', userId]);
    }
  }
  logout() {
    localStorage.setItem('logged', '');
    this.router.navigate(['/home']);
  }

  cartCount(): number {
    const logged = localStorage.getItem('logged');
    if (!logged) return 0;
    try {
      const user = JSON.parse(logged);
      const cart = user?.cart || [];
      return cart.reduce((sum: number, c: any) => sum + (Number(c.quantity) || 0), 0);
    } catch {
      return 0;
    }
  }
}
