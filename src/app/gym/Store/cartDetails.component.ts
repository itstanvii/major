import { Component, OnInit } from '@angular/core';
import { Store } from '../../model/store.model';
import { Repository } from '../../model/repository';
import { User } from '../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Orders } from '../../model/orders.model';

@Component({
  selector: 'cart-details',
  templateUrl: 'cartDetails.component.html',
})
export class CartDetails implements OnInit {
  addressError: string = '';
  successMsg: string = '';
  messageClass: string = ''; // ✅ Added this
  items: { product: Store; quantity: number }[] = [];
  total = 0;
  userId!: string;
  userData: any;
  address: string = '';

  constructor(
    private repo: Repository,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();

    // Prefer logged-in user from localStorage for reliability
    const logged = localStorage.getItem('logged');
    if (logged) {
      const parsed = JSON.parse(logged);
      this.userData = parsed;
      this.userId = String(parsed?.id ?? '');
    } else {
      this.userId = this.route.snapshot.paramMap.get('id') || '';
    }

    // Also reconcile with backend list and coerce id types
    this.repo.getAllUsers().subscribe((data) => {
      if (!this.userData) {
        this.userData = data.find((u) => u && String(u.id) === this.userId);
      }
      if (!this.userId && this.userData?.id != null) {
        this.userId = String(this.userData.id);
      }
      if (!this.userId) {
        console.error('User ID not found in route or localStorage!');
      }
    });
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

  private calculateTotal() {
    this.total = this.items.reduce(
      (sum, i) => sum + Number(i.product.price || 0) * i.quantity,
      0
    );
  }

  saveOrder() {
    console.log('helloo');
    if (!this.address || this.address.trim().length === 0) {
      this.addressError = 'Delivery address is required.';
      this.successMsg = '';
      return;
    }

    this.addressError = ''; // clear error if valid

    if (!this.userData) {
      console.warn('userData is undefined');
      return;
    }

    const orderId = Date.now().toString();
    const order = new Orders(
      orderId,
      this.userData.id,
      this.userData.name,
      this.userData.email,
      this.address,
      this.userData.cart
    );

    this.repo.saveOrders(order);

    const updatedUser = { ...this.userData, cart: [] };

    this.repo.updateUser(this.userData.id, updatedUser).subscribe(() => {
      console.log('user updated');
      localStorage.setItem('logged', JSON.stringify(updatedUser));

      // ✅ show green success msg above table
      this.successMsg = `✅ Order placed successfully for ${this.userData.name}! Redirecting...`;
      this.messageClass = 'alert alert-success';

      setTimeout(() => {
        this.successMsg = '';
        this.router.navigate(['/store']);
      }, 2000);
    });
  }
}
