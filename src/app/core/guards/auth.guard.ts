import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkIfUserisLogged();
    }

    checkIfUserisLogged(): boolean {
        if (this.userService.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
