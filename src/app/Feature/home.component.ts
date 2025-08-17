import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'selector-name',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private router: Router) {}
}
