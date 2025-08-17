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
import { TrainerRegister } from './Feature/TrainerRegister.component';
import { TrainerLogin } from './Feature/trainerLogin.component';

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
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path:'trainerRegister',
        component:TrainerRegister,
      },
      {
        path:'trainerLogin',
        component:TrainerLogin,
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
