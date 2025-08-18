import { Component } from '@angular/core';
import { Trainer } from '../model/trainer.model';
import { Router } from '@angular/router';
import { Repository } from '../model/repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'trainer-register',
  templateUrl: 'trainer.register.component.html',
})
export class TrainerRegisterComponent {
  trainer: Trainer = new Trainer();

  constructor(private router: Router, private repository: Repository) {}
  save(form: NgForm) {
    if (form.valid) {
      // Save logic here (e.g., POST to json-server)
      this.repository.saveTrainers(this.trainer);
      this.router.navigate(['/home']);
      console.log('Trainer saved:', this.trainer);
    } else {
      console.log('Form is invalid');
    }
  }
}
