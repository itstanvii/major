import { Repository } from '../../model/repository';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'reviewPage',
  templateUrl: 'review.component.html',
})
export class ReviewComponent {
  user: User = new User();
  plan: any;
  user1: any;
  userId: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repo: Repository
  ) {}

  savePlan() {
    const selectedPlan = this.route.snapshot.paramMap.get('title');
    if (!selectedPlan) {
      alert('No plan selected.');
      return;
    }

    const userString = localStorage.getItem('logged');
    if (!userString) {
      alert('No user is logged in.');
      return;
    }

    const user = JSON.parse(userString);
    if (!user.id) {
      console.error('User ID is missing:', user);
      alert('Cannot save plan: user ID is missing.');
      return;
    }

    const today = new Date();
    const expiryDate = new Date(
      today.setDate(today.getDate() + 30)
    ).toISOString();

    const updatedUser = {
      ...user,
      membership: selectedPlan,
      membershipExpireDate: expiryDate,
    };

    this.repo.updateUser(updatedUser.id, updatedUser).subscribe({
      next: () => {
        alert(`Plan saved for ${updatedUser.name}`);
      },
      error: (err) => {
        console.error('Error updating user:', err);
        alert('Failed to save plan. Please try again.');
      },
    });
    this.router.navigate(['/home']);
  }
}
