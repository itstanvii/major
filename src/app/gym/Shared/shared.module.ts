import { NgModule } from '@angular/core';

import { LoginFormComponent } from './login-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [LoginFormComponent],
  declarations: [LoginFormComponent],
  providers: [],
})
export class SharedModule {}
