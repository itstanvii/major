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
    this.repository.saveTrainers(this.trainer);
    this.router.navigate(['/home']);
  }
}
