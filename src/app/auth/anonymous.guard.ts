import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of, switchMap } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
    
    canActivate(): Observable<boolean> {
        return this.authService.isAuthCheckComplete.pipe(
            switchMap(() => {
                if (this.authService.isUserAuthenticated) {
                    console.log('not authorized!');
                    this.router.navigate(['/home']);
                    return of(false);
                }
                console.log('Authorized');
                return of(true);
            })
        );
    }
}