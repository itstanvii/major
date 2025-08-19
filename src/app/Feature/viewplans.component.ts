import { Component } from '@angular/core';

@Component({
  selector: 'app-view-plans',
  templateUrl: './viewplans.component.html',
})
export class ViewPlansComponent {
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
}
