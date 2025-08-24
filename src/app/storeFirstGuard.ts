import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { HomeComponent } from './gym/Feature/home.component';

@Injectable()
export class StoreFirstAppGuard implements CanActivate {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;

      if (route.component !== HomeComponent) {
        this.router.navigateByUrl('/home');
        return false;
      }
    }
    return true;
  }
}
