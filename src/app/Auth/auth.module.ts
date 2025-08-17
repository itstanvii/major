import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { UserComponent } from '../User/user.component';

let routing = RouterModule.forChild([
  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'user/:id',
    component: UserComponent,
    //children: [{ path: 'user/:id', component: UserComponent }],
  },
  { path: '**', redirectTo: '/login' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing], // Dependency Modules
  providers: [],
  declarations: [LoginComponent],
})
export class AuthModule {} // lazy loaded.
