import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  @Input() credentials: { email: string; password: string } = {
    email: '',
    password: '',
  };
  @Output() submitted = new EventEmitter<{ email: string; password: string }>();

  onSubmit(form: any) {
    if (form.valid) {
      this.submitted.emit(this.credentials); // ✅ Emit the credentials, not the event
    }
  }
}
