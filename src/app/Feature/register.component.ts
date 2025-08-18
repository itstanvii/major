import { Repository } from '../model/repository';
import { Component } from '@angular/core';
import { User } from '../model/user.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html',
})
export class RegisterComponent {
  user: User = new User();
  constructor(private router: Router, private repository: Repository) {}
  save(form: NgForm) {
    this.repository.saveUser(this.user);
    this.router.navigate(['/home']);
  }
}
