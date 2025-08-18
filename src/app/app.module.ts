import { TrainerRegisterComponent } from './Feature/trainer.register.component';
import { BmiCalculatorComponent } from './Feature/bmi.component';
import { AuthComponent } from './Auth/auth.component';
import { UserComponent } from './Feature/user.component';
import { RegisterComponent } from './Feature/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './Feature/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './Feature/feature.module';
import { LoginComponent } from './Feature/login.component';
import { TrainerLoginComponent } from './Feature/trainer.login.component';
import { TrainerComponent } from './Feature/trainer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FeatureModule,

    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent,
      },

      {
        path: 'user/:id',
        component: UserComponent,
        //children: [{ path: 'user/:id', component: UserComponent }],
      },
      {
        path: 'trainer',
        component: TrainerComponent,
        //children: [{ path: 'user/:id', component: UserComponent }],
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'trainer-register',
        component: TrainerRegisterComponent,
      },
      {
        path: 'trainer-login',
        component: TrainerLoginComponent,
      },

      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'bmiCalculator',
        component: BmiCalculatorComponent,
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./Auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
