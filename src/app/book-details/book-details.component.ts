import { Component, Input, OnInit } from '@angular/core';
import { IBookModel } from '../book/book.model';
import { BookService } from '../book/book.service';
import { IWishlistModel } from '../book/wishlist.model';
import { HttpEventType } from '@angular/common/http';
import { IReadBooksModel } from '../book/read.books.model';

@Component({
  selector: 'lib-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  @Input() book!: IBookModel;
  isBookInWishlist: boolean = false;
  isBookMarkedAsRead: boolean = false;
  isLoading: boolean = true;
  wishlistButtonId: string = "";
  markAsReadButtonId: string = "";

  constructor (public bookService: BookService) {}

  ngOnInit() {
    setTimeout(() => {
      this.checkIfBookIsInWishlist();
      this.checkIfBookIsMarkedAsRead();
      this.isLoading = false;
    }, 500);
    
  }

  getYearOfDate(date: Date): Number {
    const publishDate = date;
    return new Date(publishDate).getFullYear();
  }

  checkIfBookIsInWishlist(): void {
    this.bookService.isBookInWishlist(this.book.id).subscribe(
      (response) => {
        this.isBookInWishlist = true;
        this.wishlistButtonId = 'delete';
      },
      (error) => {
        this.isBookInWishlist = false;
        this.wishlistButtonId = 'normal-button';
      }
    );
  }

  checkIfBookIsMarkedAsRead(): void {
    this.bookService.isBookMarkedAsRead(this.book.id).subscribe(
      (response) => {
        this.isBookMarkedAsRead = true;
        this.markAsReadButtonId = 'delete';
      },
      (error) => {
        this.isBookMarkedAsRead = false;
        this.markAsReadButtonId = 'normal-button';
      }
    )
  }

  addOrRemoveFromWishlist(): void {
    if(!this.isBookInWishlist) {
      const wishlist = {} as IWishlistModel;
      wishlist.Books = new Array<IBookModel>();
      wishlist.Books.push(this.book);
  
      this.bookService.addBookToWishlist(wishlist).subscribe(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.isBookInWishlist = true;
            this.wishlistButtonId = "delete";
          }
        },
        (error) => console.error('Error adding to wishlist: ', error)
      );
    } else {
      this.bookService.removeBookFromWishlist(this.book.id).subscribe(
        (event) => {
          if(event.type === HttpEventType.Response) {
            this.isBookInWishlist = false;
            this.wishlistButtonId = "normal-button";
          }
        },
        (error) => console.error('Error removing from wishlist: ', error)
      );
    }
  }

  markOrUnmarkAsRead(): void {
    if(!this.isBookMarkedAsRead) {
      const readBooks = {} as IReadBooksModel;
      readBooks.Books = new Array<IBookModel>();
      readBooks.Books.push(this.book);

      this.bookService.markBookAsRead(readBooks).subscribe(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.isBookMarkedAsRead = true;
            this.markAsReadButtonId = 'delete';
          }
        },
        (error) => console.error('Error marking book as read: ', error)
      )
    } else {
      this.bookService.unmarkBookAsRead(this.book.id).subscribe(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.isBookMarkedAsRead = false;
            this.markAsReadButtonId = 'normal-button';
          }
        },
        (error) => console.error('Error unmarking book as read: ', error)
      );
    }
  }
}
