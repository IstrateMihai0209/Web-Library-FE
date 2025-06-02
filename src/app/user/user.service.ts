import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

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
}
