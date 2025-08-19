import { User } from './../model/user.model';
import { Component } from '@angular/core';
import { Repository } from '../model/repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
})
export class AdminComponent {
  users: User[] = [];

  constructor(
    private repo: Repository,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.repo.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  deleteUser(id?: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.repo.deleteUser(id);
      this.users = this.users.filter((user) => user.id !== id);
    }
  }

  logout() {
    this.router.navigateByUrl('/home');
  }
}
