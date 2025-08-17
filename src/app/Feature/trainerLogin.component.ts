import { Component } from '@angular/core';
import { Repository } from '../model/repository';
import { Router } from '@angular/router';

@Component({
  selector: 'trainer-login',
  templateUrl: 'trainerLogin.component.html'
})
export class TrainerLogin {
  credientials = { email: '', password: '' };
  message = '';

  constructor(private repository: Repository, private router: Router) {}

  login() {
    this.repository.getAllTrainers().subscribe((trainers) => {
      const trainer = trainers.find(
        (t) =>
          t.email === this.credientials.email &&
          t.password === this.credientials.password
      );

      if (trainer) {
        // store the logged-in trainer
        localStorage.setItem('loggedTrainer', JSON.stringify(trainer));
        this.message = 'Login successfully ✅';
        console.log('Login successfully ✅');

        // navigate using the trainer’s id
        this.router.navigate(['/auth/trainer', trainer.id]);
      } else {
        console.log('Invalid email or password ❌');
        this.message = 'Invalid email or password ❌';
      }
    });
  }
}
