import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user.model';
import { Repository } from './../model/repository';
import { Component } from '@angular/core';

@Component({
  selector: 'trainer',
  templateUrl: 'trainer.component.html',
})
export class TrainerComponent {
  user: User[] = [];
  constructor(private repo: Repository, private route: ActivatedRoute) {}
}
