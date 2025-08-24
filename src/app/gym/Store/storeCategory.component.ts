import { Store } from '../../model/store.model';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from '../../model/repository';

@Component({
  selector: 'store-categories',
  templateUrl: 'storeCat.component.html',
  styleUrls: ['storeCat.component.css'],
})
export class StoreComponent {

  store: Store[] = [];
  filteredstore: Store[] = [];
  visible = false;

  category = [
    { name: 'Clothes', image: 'assets/images/c1.jpeg' },
    { name: 'Power Intake', image: 'assets/images/f1.jpeg' },
    { name: 'Weights', image: 'assets/images/w1.jpeg' },
    { name: 'Accessories', image: 'assets/images/a1.webp' },
  ];

  constructor(private repo: Repository, private router: Router) {}

  goToCategory(category: string) {
    this.router.navigate(['/view-plans'], { queryParams: { category } });
  }

  ngOnInit(): void {
    this.repo.getAllProducts().subscribe((data) => {
      this.store = data;
    });
  }

  filterByCategory(category: string): void {
    this.filteredstore = this.store.filter(
      (store) => store.itemName === category
    );
  }
}
