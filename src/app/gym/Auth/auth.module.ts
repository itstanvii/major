import { AllUsersComponent } from './allUsers.component';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserComponent } from '../User/user.component';
import { AdminAddComponent } from './adminAdd.component';
import { AdminDeleteComponent } from './adminDelete.component';
import { AllTrainerComponent } from './allTrainer.component';
import { SharedModule } from '../Shared/shared.module';
import { ViewOrdersComponent } from './viewOrders.component';
import { StoreFirstGuard } from './store-FirstGuard';
// import { ViewOrdersComponent } from './viewOrders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'adminLogin',
        component: AuthComponent,
      },
      {
        path: 'remove',
        component: AdminDeleteComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'edit',
        component: AdminAddComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'view-user',
        component: AllUsersComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'view-trainer',
        component: AllTrainerComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'view-orders',
        component: ViewOrdersComponent,
        canActivate: [StoreFirstGuard],
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [StoreFirstGuard],
      },
    ]),
  ], // Dependency Modules
  providers: [StoreFirstGuard],
  declarations: [
    AuthComponent,
    AdminComponent,
    AdminDeleteComponent,
    AdminAddComponent,
    AllUsersComponent,
    AllTrainerComponent,
    ViewOrdersComponent,
  ],
})
export class AuthModule {} // lazy loaded.
