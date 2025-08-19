import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ViewPlansComponent } from './viewplans.component';
import { PlanComponent } from './plan.component';
import { BmiCalculatorComponent } from './bmi.component';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavbarComponent],
  declarations: [
    HomeComponent,
    NavbarComponent,
    PlanComponent,
    ViewPlansComponent,
    BmiCalculatorComponent,
  ],
  providers: [],
})
export class FeatureModule {}
