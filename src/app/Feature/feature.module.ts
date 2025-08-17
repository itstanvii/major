import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { TrainerRegister } from './TrainerRegister.component';
import { TrainerLogin } from './trainerLogin.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [],
  declarations: [
    UserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TrainerRegister,
    TrainerLogin
  ],
  providers: [],
})
export class FeatureModule {}
