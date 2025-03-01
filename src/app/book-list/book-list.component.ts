import { Component, Input, OnInit } from '@angular/core';
import { IBookModel } from '../book/book.model';
import { BookService } from './book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  public books: IBookModel[] = [];

  private currentPage: number = 1;
  private isLoading: boolean = false;
  private hasMore: boolean = true;
  private filter: string = '';
  
  //@Input() books!: IBookModel[];

  @Input() endpoint!: string;
  
  constructor(private bookService: BookService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'] || 'reading';

      this.resetLoadedBooks();
      this.loadMore();
    });
  }

  public loadMore(): void { 
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;
    switch (this.endpoint)
    {
      case 'homepage':
        this.bookService.getTopPopularBooks(this.currentPage).subscribe({
          next: (newBooks) => {
            this.loadNextBooks(newBooks);
          },
          error: () => this.isLoading = false
        });
        break;
      case 'profile':
        if (this.filter === 'reading') {
          console.log('getting reading history');
          this.bookService.getReadingHistoryOfUser(this.bookService.userId, this.currentPage).subscribe({
            next: (newBooks) => {
              this.loadNextBooks(newBooks);
            },
            error: () => this.isLoading = false
          });
        }
        if (this.filter === 'wishlist') {
          this.bookService.getUserWishlist(this.bookService.userId, this.currentPage).subscribe({
            next: (newBooks) => {
              this.loadNextBooks(newBooks);
            },
            error: () => this.isLoading = false
          });
        }
        if (this.filter === 'uploads') {
          this.bookService.getBooksByUploader(this.bookService.userId, this.currentPage).subscribe({
            next: (newBooks) => {
              this.loadNextBooks(newBooks);
            },
            error: () => this.isLoading = false
          });
        }
        if (this.filter === 'already-read') {
          this.bookService.getBooksMarkedAsReadByUser(this.bookService.userId, this.currentPage).subscribe({
            next: (newBooks) => {
              this.loadNextBooks(newBooks);
            },
            error: () => this.isLoading = false
          });
        }
        break;
    }
    
  }

  private checkAutoLoad(): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if(documentHeight <= windowHeight && this.hasMore && !this.isLoading) {
      this.loadMore();
    }
  }

  private loadNextBooks(newBooks: IBookModel[]): void {
    if (!this.hasMore) return;

    this.books = [...this.books, ...newBooks];
    this.currentPage++;
    this.hasMore = newBooks.length > 0;
    this.isLoading = false;

    // Load more if the page isn't scrollable
    setTimeout(() => this.checkAutoLoad(), 0);
  }

  private resetLoadedBooks(): void {
      this.books = [];
      this.currentPage = 1;
      this.hasMore = true;
      this.isLoading = false;
  }
}
