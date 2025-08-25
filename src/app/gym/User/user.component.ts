import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user.model';
import { Repository } from '../../model/repository';
import { Trainer } from '../../model/trainer.model';

import { CalendarMonthViewDay } from 'angular-calendar';

// import { Injectable } from '@angular/core';

// @Injectable({
// providedIn: 'root',
// })
@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent implements OnInit {
  userId!: string;
  userData: any;
  showbmi = false;
  bmi: number = 0;
  trainers: Trainer[] = [];
  viewDate: Date = new Date();
  constructor(
    private route: ActivatedRoute,
    private repo: Repository,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Get user ID from route parameter
    this.userId = this.route.snapshot.paramMap.get('id')!;

    // Try to get user data from localStorage first
    const loggedUserString = localStorage.getItem('logged');
    if (loggedUserString && loggedUserString !== '') {
      try {
        this.userData = JSON.parse(loggedUserString);
        console.log('User data from localStorage:', this.userData);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    }

    // If user data not found in localStorage or ID doesn't match, fetch from API
    if (!this.userData || String(this.userData.id) !== this.userId) {
      this.repo.getAllUsers().subscribe((data) => {
        // Convert IDs to strings for comparison to handle numeric vs string IDs
        this.userData = data.find(
          (u) => u && String(u.id) === String(this.userId)
        );
        console.log('User data from API:', this.userData);

        // Update localStorage with the latest user data
        if (this.userData) {
          localStorage.setItem('logged', JSON.stringify(this.userData));
        }
      });
    }

    this.repo.getAllTrainers().subscribe((data: Trainer[]) => {
      this.trainers = data.slice(0, 2);
    });
  }
  bmiCalculate() {
    this.showbmi = !this.showbmi;
    console.log(this.userData);

    // this.bmi = 10;
    this.bmi = this.userData.weight / this.userData.height;
  }
  logout() {
    localStorage.setItem('logged', '');
    this.router.navigate(['/home']);
  }

  dayModifier = (day: CalendarMonthViewDay): void => {
    const today = new Date();
    if (
      day.date.getDate() === today.getDate() &&
      day.date.getMonth() === today.getMonth() &&
      day.date.getFullYear() === today.getFullYear()
    ) {
      day.cssClass = 'today-highlight';
    }
  };
}
