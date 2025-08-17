import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { Repository } from '../model/repository';

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
@Component({
  selector: 'user',
  templateUrl: 'user.component.html',
})
export class UserComponent implements OnInit {
  userId!: string;
  userData: any;
  showbmi = false;
  bmi: number = 0;
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
  }
  bmiCalculate() {
    this.showbmi = true;
    // this.bmi = 10;
    this.bmi = this.userData.weight / this.userData.height;
  }
  logout() {
    this.router.navigate(['/home']);
  }
}
