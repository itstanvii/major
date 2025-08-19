import { NgModule } from '@angular/core';
import { TrainerComponent } from './trainer.component';
import { TrainerLoginComponent } from './trainer.login.component';
import { TrainerRegisterComponent } from './trainer.register.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatureModule } from '../Feature/feature.module';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, FeatureModule],
  exports: [],
  declarations: [
    TrainerComponent,
    TrainerLoginComponent,
    TrainerRegisterComponent,
  ],
  providers: [],
})
export class TrainerModule {}
