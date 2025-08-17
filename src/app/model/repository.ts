import { RestDataSource } from './restDataSource';
import { Observable, shareReplay } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Trainer } from './trainer.model';

@Injectable({
  providedIn: 'root',
})
export class Repository {
  // SRP - CRUD methods

  private user: User[] = []; // 15 object --- data aware states !
  private loaded = false;
  private trainer:Trainer[] =[];

  constructor(private dataSource: RestDataSource) {}
  // private products$ = this.dataSource.getProducts().pipe(shareReplay(1));

  getAllUsers(): Observable<User[]> {
    // console.log(this.dataSource.getProducts());
    return this.dataSource.getAllUsers();
  }
  getAllTrainers(): Observable<Trainer[]> {
    return this.dataSource.getAllTrainers();
  }
  saveProduct(user: User) {
    this.dataSource.saveProduct(user).subscribe((p) => this.user.push(p));
  }
  saveTrainers(trainer:Trainer){
    this.dataSource.saveTrainers(trainer).subscribe((p) => this.trainer.push(p));
  }


}
