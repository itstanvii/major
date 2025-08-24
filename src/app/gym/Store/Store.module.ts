import { FeatureModule } from './../Feature/feature.module';
import { NgModule } from '@angular/core';

import { StoreComponent } from './storeCategory.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ViewProductsComponent } from './viewProducts.component';
import { ProductCardComponent } from './product.component';
import { CartComponent } from './cart.component';
import { CartDetails } from './cartDetails.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, FeatureModule],
  exports: [
    StoreComponent,
    ViewProductsComponent,
    ProductCardComponent,
    CartComponent,
  ],
  declarations: [
    StoreComponent,
    ViewProductsComponent,
    ProductCardComponent,
    CartComponent,
    CartDetails,
  ],
  providers: [],
})
export class StoreModule {}
