import { ReviewComponent } from './review.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar.component';
import { ViewPlansComponent } from './viewplans.component';
import { PlanComponent } from './plan.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [NavbarComponent],
  declarations: [
    HomeComponent,
    NavbarComponent,
    PlanComponent,
    ViewPlansComponent,
    ReviewComponent,
  ],
  providers: [AuthService],
})
export class FeatureModule {}
