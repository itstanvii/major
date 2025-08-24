import { Component, OnInit } from '@angular/core';
import { Repository } from '../../model/repository';
import { Store } from '../../model/store.model';
import { User } from '../../model/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
})
export class CartComponent implements OnInit {
  items: { product: Store; quantity: number }[] = [];
  total = 0;

  constructor(private repo: Repository,private router:Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  private loadCart() {
    const logged = localStorage.getItem('logged');
    if (!logged) return;
    const user: User = JSON.parse(logged);
    const cart = user.cart || [];
    this.repo.getAllProducts().subscribe((products) => {
      this.items = cart
        .map((c) => {
          const product = products.find((p) => String(p.id) === c.productId);
          if (!product) return undefined as any;
          return { product, quantity: c.quantity };

        })
        .filter(Boolean);
      this.calculateTotal();
    });
  }

  increase(productId?: string | number) {
    this.updateQty(productId, 1);
  }
  decrease(productId?: string | number) {
    this.updateQty(productId, -1);
  }
  remove(productId?: string | number) {
    this.updateQty(productId, 0, true);
  }

  private updateQty(productId: string | number | undefined, delta: number, remove = false) {
    if (!productId) return;
    const productIdStr = String(productId);
    const logged = localStorage.getItem('logged');
    if (!logged) return;
    const user: User = JSON.parse(logged);
    const cart = user.cart || [];
    console.log(user);
    console.log(cart);
    const entry = cart.find((c) => c.productId === productIdStr);
    if (!entry) return;
    if (remove) {
      user.cart = cart.filter((c) => c.productId !== productIdStr);
    } else {
      entry.quantity = Math.max(1, entry.quantity + delta);
    }
    localStorage.setItem('logged', JSON.stringify(user));
    if (user.id) this.repo.updateUser(user.id, user).subscribe(() => this.loadCart());
    else this.loadCart();
  }

  private calculateTotal() {
    this.total = this.items.reduce((sum, i) => sum + Number(i.product.price || 0) * i.quantity, 0);
  }

  gotToCartDetails() {
    const loggedUserString = localStorage.getItem('logged');
    if (loggedUserString !== null) {
      const loggedUser = JSON.parse(loggedUserString);
      const userId = loggedUser.id;
      this.router.navigate(['/cartDetails', userId]);
    }
  }
}



