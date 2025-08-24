import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  Router,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthComponent } from './auth.component';

@Injectable()
export class StoreFirstGuard implements CanActivate {
  private firstNavigation = true;
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;

      if (route.component !== AuthComponent) {
        this.router.navigateByUrl('/auth/adminLogin');
        return false;
      }
    }
    return true;
  }
}
