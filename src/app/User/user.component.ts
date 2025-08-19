import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { Repository } from '../model/repository';
import { Trainer } from '../model/trainer.model';

import { CalendarMonthViewDay } from 'angular-calendar';

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
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
    this.userId = this.route.snapshot.paramMap.get('id')!;

    this.repo.getAllUsers().subscribe((data) => {
      this.userData = data.find((u) => u && u.id === this.userId);
    });
    this.repo.getAllTrainers().subscribe((data: Trainer[]) => {
      this.trainers = data.slice(0, 2);
      console.log(this.trainers);
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
