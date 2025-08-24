import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Repository } from '../../model/repository';
import { Trainer } from '../../model/trainer.model';

@Component({
  selector: 'trainer-register',
  templateUrl: 'trainer.register.component.html',
})
export class TrainerRegisterComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private repository: Repository
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      specialization: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      experience: [
        0,
        [Validators.required, Validators.min(0), Validators.max(50)],
      ],
      certifications: [
        1,
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
      image: [''],
    });
  }

  save() {
    if (this.form.valid) {
      const trainer: Trainer = this.form.value;
      this.repository.saveTrainers(trainer);
      this.router.navigate(['/home']);
      console.log('Trainer saved:', trainer);
    } else {
      console.log('Form is invalid');
    }
  }
}
