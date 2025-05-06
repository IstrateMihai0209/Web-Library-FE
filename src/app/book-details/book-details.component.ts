import { Component, Input, OnInit } from '@angular/core';
import { IBookModel } from '../book/book.model';
import { BookService } from '../book/book.service';
import { IWishlistModel } from '../book/wishlist.model';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { IReadBooksModel } from '../book/read.books.model';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

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
  showUserActions: boolean = false;
  wishlistButtonId: string = "";
  markAsReadButtonId: string = "";

  constructor (
    public bookService: BookService,
    public authService: AuthService,
    public dialog: MatDialog, 
    private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.checkIfBookIsInWishlist();
      this.checkIfBookIsMarkedAsRead();
      this.isLoading = false;
    }, 500);

    this.authService.isAuthCheckComplete.subscribe(() => {
      if (this.authService.isUserAuthenticated) {
        this.showUserActions = true;
      } else {
        this.showUserActions = false;
      }
    });
  }

  readBook() {
    this.router.navigate(['/read', this.book.id]);
  }

  getYearOfDate(date: Date): Number {
    const publishDate = date;
    return new Date(publishDate).getFullYear();
  }

  checkIfBookIsInWishlist() {
    this.bookService.isBookInWishlist(this.authService.userId, this.book.id).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.isBookInWishlist = true;
          this.wishlistButtonId = 'delete';
        } else if (response.status === 204) {
          this.isBookInWishlist = false;
          this.wishlistButtonId = 'normal-button';
        }
      }
    });
  }

  checkIfBookIsMarkedAsRead() {
    this.bookService.isBookMarkedAsRead(this.authService.userId, this.book.id).subscribe({
      next: (response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.isBookMarkedAsRead = true;
          this.markAsReadButtonId = 'delete';
        } else if (response.status === 204) {
          this.isBookMarkedAsRead = false;
          this.markAsReadButtonId = 'normal-button';
        }
      }
    });
  }

  addOrRemoveFromWishlist() {
    if(!this.isBookInWishlist) {
      const wishlist = {} as IWishlistModel;
      wishlist.Books = new Array<IBookModel>();
      wishlist.Books.push(this.book);
  
      this.bookService.addBookToWishlist(this.authService.userId, wishlist).subscribe(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.isBookInWishlist = true;
            this.wishlistButtonId = "delete";
          }
        },
        (error) => console.error('Error adding to wishlist: ', error)
      );
    } else {
      this.bookService.removeBookFromWishlist(this.authService.userId, this.book.id).subscribe(
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

  markOrUnmarkAsRead() {
    if(!this.isBookMarkedAsRead) {
      const readBooks = {} as IReadBooksModel;
      readBooks.Books = new Array<IBookModel>();
      readBooks.Books.push(this.book);

      this.bookService.markBookAsRead(this.authService.userId, readBooks).subscribe(
        (event) => {
          if (event.type === HttpEventType.Response) {
            this.isBookMarkedAsRead = true;
            this.markAsReadButtonId = 'delete';
          }
        },
        (error) => console.error('Error marking book as read: ', error)
      )
    } else {
      this.bookService.unmarkBookAsRead(this.authService.userId, this.book.id).subscribe(
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

  confirmDeletion() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteBook();
      }
    })
  }

  deleteBook() {
      this.bookService.deleteBook(this.book.id).subscribe({
        next: () => {
          console.log('Book removed from library');
          this.router.navigate(['/profile']);
        },
        error: (err) => {
          console.error('An error appeared while removing book', err);
        }
      });
  }

  editBook() {
    this.router.navigate(['/edit', this.book.id]);
  }
}
