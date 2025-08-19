import { Component } from '@angular/core';
import { Repository } from '../model/repository';
import { Router } from '@angular/router';

@Component({
  selector: 'trainer-login',
  templateUrl: 'trainer.login.component.html',
})
export class TrainerLoginComponent {
  credientials = { email: '', password: '' };
  message = '';

  constructor(private repository: Repository, private router: Router) {}

  login() {
    console.log('into login');
    this.repository.getAllTrainers().subscribe((trainers) => {
      console.log('Fetched Trainers:', trainers);
      const trainer = trainers.find(
        (t) =>
          t.email === this.credientials.email &&
          t.password === this.credientials.password
      );

      if (trainer) {
        // store the logged-in trainer
        localStorage.setItem('loggedTrainer', JSON.stringify(trainer));
        this.message = 'Login successfully ';
        console.log('Login successfully ');

        // navigate using the trainer’s id
        this.router.navigate(['/trainer', trainer.id]);
      } else {
        console.log('Invalid email or password ');
        this.message = 'Invalid email or password ';
      }
    });
  }
}
