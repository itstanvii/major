import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Repository } from '../../model/repository';
import { User } from '../../model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'trainer',
  templateUrl: 'trainer.component.html',
})
export class TrainerComponent implements OnInit {
  user: User = new User();
  trainerId!: string;
  trainerData: any;
  userData: any;

  message: string = '';
  messageClass: string = 'alert-success';
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
    localStorage.setItem('loggedTrainer', '');
    this.router.navigate(['/home']);
  }
  // save(form: NgForm) {
  //   if (form.valid) {
  //     // Save logic here (e.g., POST to json-server)
  //     this.repo.saveUser(this.user);
  //     this.router.navigate(['/home']);
  //     console.log('Trainer saved:', this.user);
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }

  savePlan(user: any) {
    const updatedUser = {
      ...user,
      dietPlan: user.dietPlan,
      workoutPlan: user.workoutPlan,
    };

    this.message = `✅ Plan saved successfully for ${user.name}`;
    this.messageClass = 'alert alert-success';

    setTimeout(() => (this.message = ''), 3000);
    this.repo.updateUser(updatedUser.id, updatedUser).subscribe(() => {});
  }
  showMessage() {
    // this.message = `✅ Plan saved successfully for ${updatedUser.name}`;
    this.messageClass = 'alert alert-success';
    setTimeout(() => (this.message = ''), 3000);
  }
}
