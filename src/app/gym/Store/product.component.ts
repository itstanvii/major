import { Component, Input } from '@angular/core';
import { Store } from '../../model/store.model';
import { Repository } from '../../model/repository';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.css'],
})
export class ProductCardComponent {
  @Input() product!: Store;
  public seeMore = false;

  public addedToCart = false;
  public loginError = false;

  constructor(private repository: Repository, private router: Router) {}

  update() {
    this.seeMore = !this.seeMore;
  }

  addToCart() {
    const logged = localStorage.getItem('logged');

    if (!logged) {
      // show error
      this.loginError = true;
      this.addedToCart = false;

      // after 2s redirect to login
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

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
    this.loginError = false;

    // hide after 2s
    setTimeout(() => {
      this.addedToCart = false;
    }, 2000);
  }
}
