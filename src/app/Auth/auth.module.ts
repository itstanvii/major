import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../User/user.component';

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([
      {
        path: 'adminLogin',
        component: AuthComponent,
      },
      {
        path: 'admin',
        component: AdminComponent,
      },
    ]),
  ], // Dependency Modules
  providers: [],
  declarations: [AuthComponent, AdminComponent],
})
export class AuthModule {} // lazy loaded.
