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

  // form fields
  cardName: string = '';
  cardNumber: string = '';
  expiry: string = '';
  cvv: string = '';

  // error messages
  cardNameError: string = '';
  cardNumberError: string = '';
  expiryError: string = '';
  cvvError: string = '';
  generalError: string = '';
  successMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private repo: Repository
  ) {}

  savePlan(event?: Event) {
    if (event) event.preventDefault();

    // Reset messages
    this.cardNameError = '';
    this.cardNumberError = '';
    this.expiryError = '';
    this.cvvError = '';
    this.generalError = '';
    this.successMessage = '';

    // Basic validations
    if (!this.cardName.trim())
      this.cardNameError = 'Cardholder name is required.';
    if (!/^\d{16}$/.test(this.cardNumber.replace(/\s+/g, '')))
      this.cardNumberError = 'Enter a valid 16-digit card number.';
    if (!/^\d{2}\/\d{2}$/.test(this.expiry))
      this.expiryError = 'Enter expiry in MM/YY format.';
    if (!/^\d{3,4}$/.test(this.cvv))
      this.cvvError = 'CVV must be 3 or 4 digits.';

    if (
      this.cardNameError ||
      this.cardNumberError ||
      this.expiryError ||
      this.cvvError
    ) {
      return; // stop if validation failed
    }

    const selectedPlan = this.route.snapshot.paramMap.get('title');
    if (!selectedPlan) {
      this.generalError = 'No plan selected.';
      return;
    }

    const userString = localStorage.getItem('logged');
    if (!userString) {
      this.generalError = 'No user is logged in.';
      return;
    }

    const user = JSON.parse(userString);
    if (!user.id) {
      this.generalError = 'Cannot save plan: user ID is missing.';
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
        localStorage.setItem('logged', JSON.stringify(updatedUser));
        this.successMessage = `Plan saved for ${updatedUser.name}`;
        setTimeout(() => this.router.navigate(['/home']), 2000);
      },
      error: () => {
        this.generalError = 'Failed to save plan. Please try again.';
      },
    });
  }
}
