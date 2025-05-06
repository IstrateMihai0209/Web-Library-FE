import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, catchError, distinctUntilChanged, filter, finalize, map, Observable, of, take, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  private authCheckedSubject = new BehaviorSubject<boolean>(false);
  public authChecked$ = this.authCheckedSubject.asObservable();

  private userIdSubject = new BehaviorSubject<string | null>(null);
  public userId$ = this.userIdSubject.asObservable().pipe(distinctUntilChanged());

  constructor(
    private http: HttpClient,
    private router: Router, 
    private route: ActivatedRoute) {
      this.initializeAuthState(); 
  }

  get userId(): string | null {
    return this.userIdSubject.value;
  }

  get isUserAuthenticated(): boolean {
    return !!this.currentUserSubject.value;
  }

  get isAuthCheckComplete(): Observable<boolean> {
    return this.authChecked$.pipe(
      filter(checked => checked),
      take(1)
    );
  }

  login(credentials: Partial<{ email: string | null; password: string | null; }>) {
    if (this.isUserAuthenticated) {
      return throwError(() => 'Already logged in!');
    }

    return this.http.post('api/auth/login', credentials, { withCredentials: true }).pipe(
      tap(() => this.initializeAuthState())
    );
  }

  logout(): Observable<void> {
    return this.http.post<void>('api/auth/logout', {}, { withCredentials: true }).pipe(
      tap(() => {
        this.currentUserSubject.next(null);
        this.router.navigate(['/login']);
      }),
      catchError(error => {
        console.error('Logout failed: ', error);
        return throwError(() => error);
      })
    );
  }

  register(user: { email: string, password: string }) {
    if (this.isUserAuthenticated) {
      return throwError(() => 'Already logged in!');
    }

    return this.http.post('api/auth/register', user);
  }

  loginWithGoogle() {
    window.location.href = 'https://localhost:7242/api/auth/external-login?provider=Google';
  }

  handleSocialCallback(): Observable<boolean> {
    return this.http.get('api/auth/userinfo', { withCredentials: true }).pipe(
      tap(user => {
        this.currentUserSubject.next(user);
        this.router.navigate(['/home']);
      }),
      map(() => true),
      catchError(() => of(false))
    );
  }

  private initializeAuthState() {
    this.http.get<any>('api/auth/userinfo', { withCredentials: true })
      .pipe(
        finalize(() => this.authCheckedSubject.next(true))
      )
      .subscribe({
        next: (user) => this.currentUserSubject.next(user),
        error: () => this.currentUserSubject.next(null)
      });

    this.initializeUserId();
  }

  private initializeUserId() {
    this.currentUser$.subscribe(user => {
      const userId = user?.id || null;
      this.userIdSubject.next(userId);
    });
  }
}
