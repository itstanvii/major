import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Trainer } from './trainer.model';
import { Store } from './store.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable({
  providedIn: 'root',
})
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
  }
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/user', user);
  }

  getAllUsers(): Observable<any[]> {
    // console.log(this.baseUrl + 'products');
    return this.http.get<User[]>(this.baseUrl + '/user');
  }
  saveTrainer(trainer: Trainer) {
    return this.http.post<Trainer>(this.baseUrl + '/trainer', trainer);
  }
  getAllTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.baseUrl}/trainer`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/user/${id}`, user);
  }
    saveProduct(product: Store): Observable<Store> {
    return this.http.post<Store>(this.baseUrl + '/items', product);
  }

  getProducts(): Observable<Store[]> {
    return this.http.get<Store[]>(this.baseUrl + '/items');
  }

  deleteProduct(id?: number): Observable<any> {
    if (!id) throw new Error('Product ID is required for deletion');
    return this.http.delete(`${this.baseUrl}/items/${id}`);
  }
}
