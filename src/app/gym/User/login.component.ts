// import { Router } from '@angular/router';
// import { Component } from '@angular/core';
// import { FormsModule, NgForm } from '@angular/forms';
// import { Repository } from '../../model/repository';

// @Component({
//   selector: 'login',
//   templateUrl: 'login.component.html',
// })
// export class LoginComponent {
//   credientials = { email: '', password: '' };
//   message = '';

//   constructor(private repositoy: Repository, private router: Router) {}

//   login() {
//     this.repositoy.getAllUsers().subscribe((users) => {
//       const user = users.find(
//         (u) =>
//           u.email === this.credientials.email &&
//           u.password === this.credientials.password
//       );
//       if (user) {
//         localStorage.setItem('logged', JSON.stringify(user));
//         this.message = 'login successfully';
//         this.router.navigate(['/home']);
//       } else {
//         this.message = 'Invalid email';
//       }
//     });
//   }
// }

import { Router } from '@angular/router';
import { Repository } from '../../model/repository';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
  credientials = { email: '', password: '' };
  message = '';

  constructor(private repositoy: Repository, private router: Router) {}
  handleUserLogin(data: { email: string; password: string }) {
    this.repositoy.getAllUsers().subscribe((users) => {
      const user = users.find(
        (t) => t.email === data.email && t.password === data.password
      );
      if (user) {
        localStorage.setItem('logged', JSON.stringify(user));
        this.message = 'login successfully';
        this.router.navigate(['/home']);
      } else {
        this.message = 'Invalid email or password';
      }
    });
  }
}
