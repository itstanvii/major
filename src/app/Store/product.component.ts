import { Component, Input } from '@angular/core';
import { Store } from '../model/store.model';
import { Repository } from '../model/repository';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Store; //
  public seeMore = false;

  constructor(private repository: Repository) {}

  update() {
    this.seeMore = !this.seeMore;
  }

  // deleteProduct(id?: number) {
  //   this.repository.deleteProduct(id);
  // }
}
