import { Component } from '@angular/core';
import { Trainer } from '../model/trainer.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Repository } from '../model/repository';

@Component({
  selector: 'trainer-register',
  templateUrl: 'trainerRegister.component.html'
})

export class TrainerRegister {
  trainer: Trainer = new Trainer();

  constructor(private router: Router, private repository: Repository) {

  }
  save(form: NgForm) {
    this.repository.saveTrainers(this.trainer);
    this.router.navigate(['/home']);
  }
}


// user: User = new User();
//   constructor(private router: Router, private repository: Repository) {}
//   save(form: NgForm) {
//     this.repository.saveProduct(this.user);
//     this.router.navigate(['/home']);
//   }
