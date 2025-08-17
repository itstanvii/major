import { RestDataSource } from './restDataSource';
import { Observable, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  // SRP - CRUD methods

  private user: User[] = []; // 15 object --- data aware states !
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}
  // private products$ = this.dataSource.getProducts().pipe(shareReplay(1));

  getAllUsers(): Observable<User[]> {
    // console.log(this.dataSource.getProducts());
    return this.dataSource.getAllUsers();
  }
  saveProduct(user: User) {
    this.dataSource.saveProduct(user).subscribe((p) => this.user.push(p));
  }
}
