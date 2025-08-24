import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../../model/repository';
import { Router } from '@angular/router';
import { User } from '../../model/user.model';

@Component({
  selector: 'all-users',
  templateUrl: 'allUsers.component.html',
})
export class AllUsersComponent {
  users: User[] = [];

  constructor(private repo: Repository, private route: Router) {
    this.repo.getAllUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  deleteUser(id?: any) {
    this.repo.deleteUser(id);
    this.users = this.users.filter((user) => user.id !== id);
  }

  logout() {
    this.route.navigateByUrl('/');
  }
}
