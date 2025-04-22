import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { IBookModel } from './book.model';
import { IWishlistModel } from './wishlist.model';
import { IReadBooksModel } from './read.books.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  public userId: number = 2; // should add an UserService to handle the userId

  constructor(private http: HttpClient) { }

  getBookById(bookId: number): Observable<IBookModel> {
    let params = new HttpParams().set('bookId', bookId);
    
    return this.http.get<IBookModel>('/api/book', { params });
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

    return this.http.get<any>('/api/wishlist', { params }).pipe(
      map((response => response.books))
    );
  }

  getBooksMarkedAsReadByUser(userId: number, pageNumber: number = 1): Observable<IBookModel[]> {
    let params = this.assignMainUserParams(userId, pageNumber);

    return this.http.get<any>('/api/read-books', { params }).pipe(
      map((response => response.books))
    );
  }

  getSimilarBooks(currentBook: IBookModel): Observable<IBookModel[]> {
    let params = new HttpParams()
      .set('id', currentBook.id.toString());

    return this.http.get<any>('/api/book/similar-books', { params });
  }

  uploadBook(formData: FormData): Observable<IBookModel> {
    return this.http.post<IBookModel>('/api/book', formData, {
      reportProgress: true,
      observe: 'body'
    });
  }

  updateBook(bookId: number, bookDto: any): Observable<IBookModel> {
    let params = new HttpParams().set('bookId', bookId);

    return this.http.put<IBookModel>('api/book', bookDto, { params });  
  }

  addBookToWishlist(wishlistDto: IWishlistModel) {
    let params = new HttpParams()
      .set('userId', this.userId.toString());

    return this.http.put('/api/wishlist/add-book', wishlistDto, {
      params: params, 
      reportProgress: true,
      observe: 'events'
    });
  }

  removeBookFromWishlist(bookId: number) {
    let params = new HttpParams()
      .set('userId', this.userId.toString())
      .set('bookId', bookId.toString());

      return this.http.put('/api/wishlist/remove-book', "", {
        params: params,
        reportProgress: true,
        observe: 'events'
      });
  }

  isBookInWishlist(bookId: number) {
    let params = new HttpParams()
      .set('userId', this.userId.toString())
      .set('bookId', bookId.toString());

    return this.http.get('/api/wishlist/is-book-in-wishlist', {params, observe: 'response'});
  }

  markBookAsRead(readBooksDto: IReadBooksModel) {
    let params = new HttpParams()
      .set('userId', this.userId.toString());

    return this.http.put('api/read-books/add', readBooksDto, {
      params: params,
      reportProgress: true,
      observe: 'events'
    });
  }

  unmarkBookAsRead(bookId: number) {
    let params = new HttpParams()
      .set('userId', this.userId.toString())
      .set('bookId', bookId.toString());

    return this.http.put('api/read-books/remove', "", {
      params: params,
      reportProgress: true,
      observe: 'events'
    });
  }

  isBookMarkedAsRead(bookId: number) {
    let params = new HttpParams()
      .set('userId', this.userId.toString())
      .set('bookId', bookId.toString());

    return this.http.get('api/read-books/is-marked-as-read', { params, observe: 'response' });
  }

  deleteBook(bookId: number) {
    let params = new HttpParams()
      .set('bookId', bookId.toString());

    return this.http.delete('api/book', { params });
  }

  searchBooks(searchQuery: string, filters: { [key: string]: string[] }, pageNumber: number): Observable<IBookModel[]> {
    let params = new HttpParams()
      .set('searchQuery', searchQuery)
      .set('pageNumber', pageNumber.toString());

    return this.http.post<IBookModel[]>('api/book/search', filters, { params });
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
