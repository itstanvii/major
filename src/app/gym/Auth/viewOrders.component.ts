import { Router } from '@angular/router';
import { Repository } from '../../model/repository';
import { Orders } from './../../model/orders.model';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'view-order',
  templateUrl: 'viewOrders.component.html',
})
export class ViewOrdersComponent {
  orders: Orders[] = [];

  constructor(private repo: Repository, private route: Router) {
    this.repo.getAllOrders().subscribe((data: Orders[]) => {
      this.orders = data;
    });
  }
}
