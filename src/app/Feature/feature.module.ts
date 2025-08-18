import { TrainerComponent } from './trainer.component';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ViewPlansComponent } from './viewplans.component';
import { PlanComponent } from './plan.component';
import { BmiCalculatorComponent } from './bmi.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [],
  declarations: [
    UserComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    PlanComponent,
    ViewPlansComponent,
    TrainerComponent,
    BmiCalculatorComponent,
  ],
  providers: [],
})
export class FeatureModule {}
