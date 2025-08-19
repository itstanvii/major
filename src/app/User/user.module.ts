import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [],
  declarations: [UserComponent, LoginComponent, RegisterComponent],
  providers: [],
})
export class UserModule {}
