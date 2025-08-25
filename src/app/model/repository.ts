import { Trainer } from './trainer.model';
import { RestDataSource } from './restDataSource';
import { Observable, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Store } from './store.model';
import { Orders } from './orders.model';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  // SRP - CRUD methods
  private products: Store[] = [];
  private user: User[] = [];
  private trainer: Trainer[] = [];
  private loaded = false;
  order: any;

  constructor(private dataSource: RestDataSource) {}

  getAllUsers(): Observable<User[]> {
    // console.log(this.dataSource.getProducts());
    return this.dataSource.getAllUsers();
  }
  getUserByCredentials(email: string, password: string): Observable<User[]> {
    return this.dataSource.getUserByCredentials(email, password);
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
  updateProduct(product: Store): Observable<Store> {
    return this.dataSource.updateProduct(product);
  }
  getAllProducts(): Observable<Store[]> {
    return this.dataSource.getProducts();
  }
  saveProduct(product: Store): Observable<Store> {
    return this.dataSource.saveProduct(product);
  }
  updateUser(id: any, user: User): Observable<User> {
    return this.dataSource.updateUser(id, user);
  }

  deleteProduct(id: number): Observable<any> {
    return this.dataSource.deleteProduct(id);
  }
  deleteUser(id?: string) {
    this.dataSource.deleteUser(id).subscribe((p) => {
      this.user.splice(
        this.user.findIndex((p) => p.id == id),
        1
      );
    });
  }
  deleteTrainer(id?: string) {
    this.dataSource.deleteTrainer(id).subscribe((p) => {
      this.trainer.splice(
        this.trainer.findIndex((t) => t.id == id),
        1
      );
    });
  }
  saveOrders(order: Orders) {
    this.dataSource.saveOrder(order).subscribe((p) => this.order.push(p));
  }
  getAllOrders(): Observable<Orders[]> {
    return this.dataSource.getAllOrders();
  }
}
