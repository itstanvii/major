import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  showUsers: boolean = false;
  constructor(private router: Router) {}

  // navigateTo(path: string): void {
  //   this.router.navigate([path]);
  // }
}
