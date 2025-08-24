import { Component } from '@angular/core';
import { Store } from '../../model/store.model';
import { Repository } from '../../model/repository';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-add',
  templateUrl: 'adminAdd.component.html',
  styleUrls: ['./adminAdd.component.css'],
})
export class AdminAddComponent {
  newProduct: Store = new Store();

  constructor(private repo: Repository, private router: Router) {}

  saveProduct(): void {
    if (
      this.newProduct.itemName &&
      this.newProduct.category &&
      this.newProduct.description &&
      this.newProduct.src &&
      this.newProduct.price
    ) {
      this.repo.saveProduct(this.newProduct).subscribe({
        next: (savedProduct) => {
          console.log('Product saved:', savedProduct);
          this.newProduct = new Store(); // Reset form
        },
        error: (err) => {
          console.error('Error saving product:', err);
        },
      });
    }
    this.router.navigate(['/auth/admin']);
  }
}
