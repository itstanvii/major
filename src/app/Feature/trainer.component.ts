import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from '../model/repository';

@Component({
  selector: 'trainer',
  templateUrl: 'trainer.component.html',
})
export class TrainerComponent implements OnInit {
  trainerId!: string;
  trainerData: any;
  userData: any;
  constructor(
    private route: ActivatedRoute,
    private repo: Repository,
    private router: Router
  ) {}

  ngOnInit() {
    this.trainerId = this.route.snapshot.paramMap.get('id')!;

    this.repo.getAllTrainers().subscribe((data) => {
      this.trainerData = data.find((u) => u && u.id === this.trainerId);
      // console.log(this.trainerData);
    });
    this.repo.getAllUsers().subscribe((data: any[]) => {
      this.userList = data.filter(
        (user) => user?.category === this.trainerData.specialization
      );
    });
  }
  userList: any[] = [];

  getUsers() {
    console.log(this.userList);
  }

  logout() {
    this.router.navigate(['/home']);
  }
}
