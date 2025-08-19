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
    if (form.valid) {
      // Save logic here (e.g., POST to json-server)
      this.repository.saveUser(this.user);
      this.router.navigate(['/home']);
      console.log('Trainer saved:', this.user);
    } else {
      console.log('Form is invalid');
    }
  }
}
