import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBookModel } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public userId: number = 1;

  constructor(private http: HttpClient) { }

  getTopPopularBooks(count: number = 40, pageNumber: number = 1): Observable<IBookModel[]> {
    console.log('getting books: count = ' + count + ', pageNumber = ' + pageNumber);
    
    let params = new HttpParams()
      .set('count', count.toString())
      .set('pageNumber', pageNumber.toString());
    return this.http.get<IBookModel[]>('/api/book/top-popular', { params });
  }

  getBooksByUploader(uploaderId: number): Observable<IBookModel[]> {
    let params = new HttpParams().set('userId', uploaderId);
    return this.http.get<IBookModel[]>('/api/book/uploader', { params });
  }

  getReadingHistoryOfUser(userId: number): Observable<IBookModel[]> {
    let params = new HttpParams().set('userId', userId);
    return this.http.get<any>('/api/reading-history', { params }).pipe(
      map((response => response.books))
    );
  }

  getUserWishlist(userId: number): Observable<IBookModel[]> {
    let params = new HttpParams().set('userId', userId);
    return this.http.get<any>('api/wishlist', { params }).pipe(
      map((response => response.books))
    );
  }

  getBooksMarkedAsReadByUser(userId: number): Observable<IBookModel[]> {
    let params = new HttpParams().set('userId', userId);
    return this.http.get<any>('api/read-books', { params }).pipe(
      map((response => response.books))
    );
  }
}
