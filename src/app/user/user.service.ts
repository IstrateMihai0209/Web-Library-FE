import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable, tap } from 'rxjs';
import { IUserModel } from './user.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { 
    const user = localStorage.getItem('currentUser');
    if (user) this.authService.currentUserSubject.next(JSON.parse(user));
  }

  getUploaderProfilePage(userId: string): string {
    return `${environment.localUrl}/profile/${userId}`;
  }

  getUserNameById(userId: string): Observable<string> {
    let httpParams = new HttpParams().set('userId', userId);

    return this.http.get(`${environment.apiUrl}/user`, { 
      params: httpParams,
      responseType: 'text'
    });
  }

  updateUserName(usernameModel: { Username: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put(`${environment.apiUrl}/user/change-username`, usernameModel, {
      headers,
      withCredentials: true,
    }).pipe(
      tap(() => {
        const currentUser = this.authService.currentUserSubject.value;
        
        if (currentUser) {
          const updatedUser = {
            ...currentUser,
            userName: usernameModel.Username
          };
          this.authService.currentUserSubject.next(updatedUser);

          //localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        }
      })
    );
  }
}
