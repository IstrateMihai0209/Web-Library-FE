import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IBookModel } from '../book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public userId: number = 1; // should add an UserService to handle the userId

  constructor(private http: HttpClient) { }

  getBookById(bookId: number): Observable<IBookModel> {
    let params = new HttpParams().set('bookId', bookId);
    
    return this.http.get<IBookModel>('api/book', { params });
  }

  getTopPopularBooks(pageNumber: number = 1): Observable<IBookModel[]> {
    let params = this.assignMainParams(pageNumber);

    return this.http.get<IBookModel[]>('/api/book/top-popular', { params });
  }

  getBooksByUploader(uploaderId: number, pageNumber: number = 1): Observable<IBookModel[]> {
    let params = this.assignMainUserParams(uploaderId, pageNumber);

    return this.http.get<IBookModel[]>('/api/book/uploader', { params });
  }

  getReadingHistoryOfUser(userId: number, pageNumber: number = 1): Observable<IBookModel[]> {
    let params = this.assignMainUserParams(userId, pageNumber);

    return this.http.get<any>('/api/reading-history', { params }).pipe(
      map((response => response.books))
    );
  }

  getUserWishlist(userId: number, pageNumber: number = 1): Observable<IBookModel[]> {
    let params = this.assignMainUserParams(userId, pageNumber);

    return this.http.get<any>('api/wishlist', { params }).pipe(
      map((response => response.books))
    );
  }

  getBooksMarkedAsReadByUser(userId: number, pageNumber: number = 1): Observable<IBookModel[]> {
    let params = this.assignMainUserParams(userId, pageNumber);

    return this.http.get<any>('api/read-books', { params }).pipe(
      map((response => response.books))
    );
  }

  private assignMainUserParams(userId: number, pageNumber: number): HttpParams {
    return new HttpParams()
      .set('userId', userId)
      .set('pageNumber', pageNumber.toString());
  }

  private assignMainParams(pageNumber: number): HttpParams {
    return new HttpParams()
      .set('pageNumber', pageNumber.toString());
  }
}
