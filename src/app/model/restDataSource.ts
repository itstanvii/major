import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { Trainer } from './trainer.model';

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
  saveProduct(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + '/user', user);
  }

  getAllUsers(): Observable<any[]> {
    // console.log(this.baseUrl + 'products');
    return this.http.get<User[]>(this.baseUrl + '/user');
  }
  saveTrainers(trainer: Trainer): Observable<Trainer> {
    return this.http.post<Trainer>(this.baseUrl + '/trainer', trainer);
  }

  getAllTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(`${this.baseUrl}/trainer`);
  }
}
