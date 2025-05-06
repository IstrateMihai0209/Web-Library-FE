import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({ providedIn: 'root' })
export class AuthResolver implements Resolve<void> {
    constructor(private authService: AuthService) {}

    resolve(): Observable<void> {
        return this.authService.isAuthCheckComplete.pipe(
            take(1),
            map(() => undefined)
        );
    }
}