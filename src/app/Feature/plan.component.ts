import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan.component.html',
})
export class PlanComponent {
  @Input() plan: any;
  message: string = '';

  constructor(private router: Router) {}

  buyPlan() {
    const user = localStorage.getItem('logged');
    if (!user) {
      // User not logged in
      this.message = '⚠️ Please log in first to continue.';
      // Optional: Redirect to login page after a short delay
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500);
    } else {
      // User is logged in → go to payment page
      this.router.navigate(['/payment', this.plan.title]);
    }
  }
}
