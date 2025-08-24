import { Component, OnInit } from '@angular/core';
import { Store } from '../../model/store.model';
import { Repository } from '../../model/repository';

@Component({
  selector: 'admin-delete',
  templateUrl: 'adminDelete.component.html',
  styleUrls: ['./adminDelete.component.css'],
})
export class AdminDeleteComponent implements OnInit {
  products: Store[] = [];
  currentPage: number = 1;
  pageSize: number = 9;

  constructor(private repo: Repository) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.repo.getAllProducts().subscribe((data: Store[]) => {
      this.products = data;
    });
  }

  deleteProduct(id: number | undefined): void {
    if (!id) return;

    this.repo.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter((p) => p.id !== id);
    });
  }

  get pagedProducts(): Store[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.products.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.products.length / this.pageSize);
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
