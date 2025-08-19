import { TrainerRegisterComponent } from './Trainer/trainer.register.component';
import { BmiCalculatorComponent } from './Feature/bmi.component';
import { UserComponent } from './User/user.component';
import { RegisterComponent } from './User/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './Feature/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './Feature/feature.module';
import { LoginComponent } from './User/login.component';
import { TrainerLoginComponent } from './Trainer/trainer.login.component';
import { TrainerComponent } from './Trainer/trainer.component';
import { UserModule } from './User/user.module';
import { TrainerModule } from './Trainer/trainer.module';
import { ViewProductsComponent } from './Store/viewProducts.component';
import { ReviewComponent } from './Feature/review.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FeatureModule,
    UserModule,
    TrainerModule,

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
        path: 'trainer/:id',
        component: TrainerComponent,
        //children: [{ path: 'user/:id', component: UserComponent }],
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'view-plans',
        component: ViewProductsComponent,
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
        path: 'payment/:title',
        component: ReviewComponent,
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
