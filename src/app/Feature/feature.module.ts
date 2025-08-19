import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { BmiCalculatorComponent } from './bmi.component';
=======
import { NavbarComponent } from './navbar.component';
import { ViewPlansComponent } from './viewplans.component';
import { PlanComponent } from './plan.component';
import { BmiCalculatorComponent } from './bmi.component';
import { StoreModule } from '../Store/Store.module';
>>>>>>> de22ff7c0cd4addcf6c85f38f132f89d3dcc864f

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule,StoreModule],
  exports: [NavbarComponent],
  declarations: [
    HomeComponent,
<<<<<<< HEAD
    LoginComponent,
    RegisterComponent,
=======
    NavbarComponent,
    PlanComponent,
    ViewPlansComponent,
>>>>>>> de22ff7c0cd4addcf6c85f38f132f89d3dcc864f
    BmiCalculatorComponent,
  ],
  providers: [],
})
export class FeatureModule {}
