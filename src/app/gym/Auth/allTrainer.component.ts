import { Component } from '@angular/core';
import { Repository } from '../../model/repository';
import { Router } from '@angular/router';
import { Trainer } from '../../model/trainer.model';

@Component({
  selector: 'selector-name',
  templateUrl: 'allTrainer.component.html',
})
export class AllTrainerComponent {
  trainers: Trainer[] = [];

  constructor(private repo: Repository, private route: Router) {
    this.repo.getAllTrainers().subscribe((data: Trainer[]) => {
      this.trainers = data;
    });
  }

  deleteTrainer(id?: any) {
    this.repo.deleteTrainer(id);
    this.trainers = this.trainers.filter((trainer) => trainer.id !== id);
  }

  logout() {
    this.route.navigateByUrl('/');
  }
}
