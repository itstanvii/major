import { Trainer } from './trainer.model';
import { RestDataSource } from './restDataSource';
import { Observable, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Store } from './store.model';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  // SRP - CRUD methods
  private products: Store[] = [];
  private user: User[] = [];
  private trainer: Trainer[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}
  // private products$ = this.dataSource.getProducts().pipe(shareReplay(1));

  getAllUsers(): Observable<User[]> {
    // console.log(this.dataSource.getProducts());
    return this.dataSource.getAllUsers();
  }
  saveUser(user: User) {
    this.dataSource.saveUser(user).subscribe((p) => this.user.push(p));
  }
  saveTrainers(trainer: Trainer) {
    this.dataSource.saveTrainer(trainer).subscribe((p) => this.trainer.push(p));
  }
  getAllTrainers(): Observable<Trainer[]> {
    return this.dataSource.getAllTrainers();
  }
  updateUser(id: number, user: User): Observable<User> {
    return this.dataSource.updateUser(id, user);
  }
  getAllProducts(): Observable<Store[]> {
    // console.log(this.dataSource.getProducts());
    return this.dataSource.getProducts();
  }
  saveProduct(product: Store) {
    this.dataSource
      .saveProduct(product)
      .subscribe((p) => this.products.push(p));
  }
  deleteProduct(id?: number) {
    this.dataSource.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1
      );
    });
  }
  deleteUser(id?: string) {
    this.dataSource.deleteUser(id).subscribe((p) => {
      this.user.splice(
        this.user.findIndex((p) => p.id == id),
        1
      );
    });
  }
}
