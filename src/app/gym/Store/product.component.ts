import { Component, Input } from '@angular/core';
import { Store } from '../../model/store.model';
import { Repository } from '../../model/repository';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Store; //
  public seeMore = false;
  public addedToCart = false;

  constructor(private repository: Repository) {}

  update() {
    this.seeMore = !this.seeMore;
  }

  // deleteProduct(id?: number) {
  //   this.repository.deleteProduct(id);
  // }

  addToCart() {
    const logged = localStorage.getItem('logged');
    if (!logged) {
      alert('Please login to add items to cart');
      return;
    }
    const user: User = JSON.parse(logged);
    const cart = user.cart || [];
    const existing = cart.find((c) => c.productId === String(this.product.id));
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ productId: String(this.product.id || ''), quantity: 1 });
    }
    user.cart = cart;
    localStorage.setItem('logged', JSON.stringify(user));

    if (user.id) {
      this.repository.updateUser(user.id, user).subscribe();
    }
    this.addedToCart = true;
    setTimeout(() => {
      this.addedToCart = false;
    }, 1000);
  }
}
