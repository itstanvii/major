import { NgModule } from '@angular/core';
import { TrainerComponent } from './trainer.component';
import { TrainerLoginComponent } from './trainer.login.component';
import { TrainerRegisterComponent } from './trainer.register.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatureModule } from '../Feature/feature.module';
import { SharedModule } from '../Shared/shared.module';
import { TrainerInfoComponent } from './trainerInfo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FeatureModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
  declarations: [
    TrainerComponent,
    TrainerLoginComponent,
    TrainerRegisterComponent,
    TrainerInfoComponent,
  ],
  providers: [],
})
export class TrainerModule {}
