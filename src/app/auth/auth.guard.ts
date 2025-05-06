import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { AuthService } from "./auth.service";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}    

    canActivate(): Observable<boolean> {
        return this.authService.isAuthCheckComplete.pipe(
            map(() => {
              if (!this.authService.isUserAuthenticated) {
                console.log('auth guard triggered!');
                this.router.navigate(['/login']);
                return false;
              }
              return true;
            })
        );
    }
}