import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from './user.model';
import { Trainer } from './trainer.model';
import { Store } from './store.model';
import { HttpHeaders } from '@angular/common/http';
import { Orders } from './orders.model';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable({
  providedIn: 'root',
})
export class RestDataSource {
  baseUrl: string;
  auth_token?: string;

  constructor(private http: HttpClient) {
    // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
    this.baseUrl = '/api';
    // Restore token after refresh
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      this.auth_token = storedToken;
    }
  }
  saveUser(user: User): Observable<User> {
    return this.http.post<User>(
      this.baseUrl + '/user',
      user,
      this.getOptions()
    );
  }

  getAllUsers(): Observable<any[]> {
    // console.log(this.baseUrl + 'products');
    return this.http.get<User[]>(this.baseUrl + '/user', this.getOptions());
  }
  getUserByCredentials(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + '/user', {
      params: { email, password },
      ...this.getOptions(),
    });
  }
  saveTrainer(trainer: Trainer) {
    return this.http.post<Trainer>(
      this.baseUrl + '/trainer',
      trainer,
      this.getOptions()
    );
  }
  getAllTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(
      `${this.baseUrl}/trainer`,
      this.getOptions()
    );
  }

  updateUser(id: string, user: User): Observable<User> {
    return this.http.put<User>(
      `${this.baseUrl}/user/${id}`,
      user,
      this.getOptions()
    );
  }
  saveProduct(product: Store): Observable<Store> {
    return this.http.post<Store>(
      `${this.baseUrl}/items`,
      product,
      this.getOptions()
    );
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/items/${id}`, this.getOptions());
  }
  deleteUser(id?: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/user/${id}`, this.getOptions());
  }
  deleteTrainer(id?: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/trainer/${id}`, this.getOptions());
  }
  updateProduct(product: Store): Observable<Store> {
    return this.http.put<Store>(
      `${this.baseUrl}/items/${product.id}`,
      product,
      this.getOptions()
    );
  }
  getProducts(): Observable<Store[]> {
    return this.http.get<Store[]>(`${this.baseUrl}/items`, this.getOptions());
  }
  //Local Error Handling
  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http
      .post<any>(this.baseUrl + '/login', {
        name: user,
        password: pass,
      })
      .pipe(
        map((response) => {
          this.auth_token = response.success ? response.token : null;
          if (response.success && response.token) {
            localStorage.setItem('auth_token', response.token);
          } else {
            localStorage.removeItem('auth_token');
          }
          return response.success;
        }),
        //Local Error Handling
        catchError((error) => {
          console.error('Login Error:', error.message);

          return throwError(() => error);
        })
      );
  }
  saveOrder(order: Orders): Observable<Orders> {
    return this.http.post<Orders>(this.baseUrl + '/orders', order);
  }

  getAllOrders(): Observable<any[]> {
    return this.http.get<Orders[]>(this.baseUrl + '/orders');
  }
  private getOptions() {
    const headers = this.auth_token
      ? new HttpHeaders({ Authorization: `Bearer ${this.auth_token}` })
      : new HttpHeaders();
    return { headers };
  }
}
