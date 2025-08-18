import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  plans = [
    {
      title: 'Basic Fit Plan',
      description:
        'Perfect for beginners who want access to essential gym equipment.',
      features: ['Gym floor access', 'Locker room', '1 fitness assessment'],
      price: 999,
      total: 1179,
    },
    {
      title: 'Pro Fit Plan',
      description:
        'Ideal for regular gym-goers with personal training and classes.',
      features: [
        'Everything in Basic',
        '4 PT sessions',
        'Group classes',
        'Nutrition guidance',
      ],
      price: 1999,
      total: 2359,
    },
    {
      title: 'Premium Fit Plan',
      description:
        'Full experience with unlimited training and wellness access.',
      features: [
        'Everything in Pro',
        'Unlimited PT',
        'Custom plans',
        'Sauna access',
      ],
      price: 3499,
      total: 4129,
    },
  ];
  constructor(private router: Router) {}
  trainerRegister() {
    this.router.navigate(['/trainer-register']);
  }
  trainerLogin() {
    this.router.navigate(['/trainer-login']);
  }
}
