import { Repository } from './../../model/repository';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private repository: Repository
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      imageUrl: ['', Validators.required],
      height: [
        '',
        [Validators.required, Validators.min(0.5), Validators.max(2.5)],
      ],
      weight: [
        '',
        [Validators.required, Validators.min(20), Validators.max(200)],
      ],
      category: ['', Validators.required],
    });
  }

  save(): void {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;
      this.repository.saveUser(userData);
      this.router.navigate(['/home']);
      console.log('User saved:', userData);
    } else {
      this.registerForm.markAllAsTouched();
      console.log('Form is invalid');
    }
  }
}
