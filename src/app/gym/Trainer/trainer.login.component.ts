import { Component } from '@angular/core';
import { Repository } from '../../model/repository';
import { Router } from '@angular/router';

@Component({
  selector: 'trainer-login',
  templateUrl: 'trainer.login.component.html',
})
export class TrainerLoginComponent {
  credientials = { email: '', password: '' };
  message = '';

  constructor(private repository: Repository, private router: Router) {}

  handleTrainerLogin(data: { email: string; password: string }) {
    this.repository.getAllTrainers().subscribe((trainers) => {
      const trainer = trainers.find(
        (t) => t.email === data.email && t.password === data.password
      );

      if (trainer) {
        localStorage.setItem('loggedTrainer', JSON.stringify(trainer));
        this.message = 'Login successfully';
        console.log('Login successfully');
        this.router.navigate(['/trainer', trainer.id]);
      } else {
        console.log('Invalid email or password');
        this.message = 'Invalid email or password';
      }
    });
  }
}
