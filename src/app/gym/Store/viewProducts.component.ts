import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '../../model/store.model';
import { Repository } from '../../model/repository';

@Component({
  selector: 'view-products',
  templateUrl: 'viewProducts.component.html',
})
export class ViewProductsComponent implements OnInit {
  store: Store[] = []; // full product list
  pagedProducts: Store[] = []; // products for current page
  category: string = '';

  // Pagination variables
  currentPage: number = 1;
  itemsPerPage: number = 9;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  constructor(private repo: Repository, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.category = params['category'];

      this.repo.getAllProducts().subscribe((data) => {
        this.store = this.category
          ? data.filter((product) => product.category === this.category)
          : data;

        this.totalPages = Math.ceil(this.store.length / this.itemsPerPage);
        this.totalPagesArray = Array.from(
          { length: this.totalPages },
          (_, i) => i + 1
        );

        this.updatePagedProducts();
      });
    });
  }

  changePage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePagedProducts();
  }

  updatePagedProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.pagedProducts = this.store.slice(start, end);
  }
}
