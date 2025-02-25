import { Component, Input, OnInit } from '@angular/core';
import { IBookModel } from '../book/book.model';
import { BookService } from './book.service';

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
  
  //@Input() books!: IBookModel[];

  @Input() endpoint!: string;
  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  public loadMore(): void { 
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;
    switch (this.endpoint)
    {
      case 'homepage':
        this.bookService.getTopPopularBooks(40, this.currentPage).subscribe({
          next: (newBooks) => {
            this.loadNextBooks(newBooks);
          },
          error: () => this.isLoading = false
        });
        break;
      case 'profile':
          this.bookService.getBooksByUploader(this.bookService.userId).subscribe({
            next: (newBooks) => {
              this.loadNextBooks(newBooks);
            },
            error: () => this.isLoading = false
          });
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
    this.books = [...this.books, ...newBooks];
    this.currentPage++;
    this.hasMore = newBooks.length > 0;
    this.isLoading = false;

    // Load more if the page isn't scrollable
    setTimeout(() => this.checkAutoLoad(), 0);
  }
}
