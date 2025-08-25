import { TrainerRegisterComponent } from './gym/Trainer/trainer.register.component';
import { BmiCalculatorComponent } from './gym/Feature/bmi.component';
import { UserComponent } from './gym/User/user.component';
import { RegisterComponent } from './gym/User/register.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './gym/Feature/home.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './gym/Feature/feature.module';
import { LoginComponent } from './gym/User/login.component';
import { TrainerLoginComponent } from './gym/Trainer/trainer.login.component';
import { TrainerComponent } from './gym/Trainer/trainer.component';
import { UserModule } from './gym/User/user.module';
import { TrainerModule } from './gym/Trainer/trainer.module';
import { ViewProductsComponent } from './gym/Store/viewProducts.component';
import { ReviewComponent } from './gym/Feature/review.component';
import { CartComponent } from './gym/Store/cart.component';
import { StoreComponent } from './gym/Store/storeCategory.component';
import { CartDetails } from './gym/Store/cartDetails.component';
import { TrainerInfoComponent } from './gym/Trainer/trainerInfo.component';
import { StoreFirstAppGuard } from './storeFirstGuard';
import { HttpInterceptorService } from '../Interceptor/httpinterceptor-service';

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
        path: 'store',
        component: StoreComponent,
      },
      {
        path: 'user/:id',
        component: UserComponent,
        canActivate: [StoreFirstAppGuard],
      },
      {
        path: 'trainer/:id',
        component: TrainerComponent,
      },
      {
        path: 'trainerInfo',
        component: TrainerInfoComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'view-plans',
        component: ViewProductsComponent,
        canActivate: [StoreFirstAppGuard],
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [StoreFirstAppGuard],
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
        path: 'cartDetails/:id',
        component: CartDetails,
        canActivate: [StoreFirstAppGuard],
      },
      {
        path: 'payment/:title',
        component: ReviewComponent,
        canActivate: [StoreFirstAppGuard],
      },
      {
        path: 'auth',
        loadChildren: () =>
          import('./gym/Auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'bmiCalculator',
        loadComponent: () =>
          import('./gym/Feature/bmi.component').then(
            (m) => m.BmiCalculatorComponent
          ),
      },

      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: '**',
        redirectTo: '/home',
      },
    ]),
  ],
  providers: [
    StoreFirstAppGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
