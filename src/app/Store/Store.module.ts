import { NgModule } from '@angular/core';

import { StoreComponent } from './storeCategory.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewProductsComponent } from './viewProducts.component';
import { ProductCardComponent } from './product.component';



@NgModule({
  imports: [CommonModule,RouterModule,FormsModule],
  exports: [StoreComponent,ViewProductsComponent,ProductCardComponent],
  declarations: [StoreComponent,ViewProductsComponent,ProductCardComponent],
  providers: [],
})
export class StoreModule { }
