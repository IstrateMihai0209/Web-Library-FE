import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IBookModel } from '../book/book.model';
import { BookService } from '../book/book.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnChanges {
  public books: IBookModel[] = [];

  private currentPage: number = 1;
  private isLoading: boolean = false;
  private hasMore: boolean = true;
  
  @Input() similarBooks!: IBookModel[]; //might replace books
  @Input() loadBooksFn!: (page: number) => Observable<IBookModel[]>;
  
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadMore();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['loadBooksFn']) {
      this.resetLoadedBooks();
      this.loadMore();
    }
  }

  public loadMore(): void { 
    if (this.isLoading || !this.hasMore) return;

    this.isLoading = true;
    this.loadBooksFn(this.currentPage).subscribe({
      next: (newBooks) => {
        this.handleNewBooks(newBooks);
      },
      error: () => {
        this.isLoading = false;
      }
    })
  }

  private handleNewBooks(newBooks: IBookModel[]): void {
    if (!this.hasMore) return;

    this.books = [...this.books, ...newBooks];
    this.currentPage++;
    this.hasMore = newBooks.length > 0;
    this.isLoading = false;

    setTimeout(() => this.checkAutoLoad(), 0);
  }

  private checkAutoLoad(): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    if(documentHeight <= windowHeight && this.hasMore && !this.isLoading) {
      this.loadMore();
    }
  }

  // private loadNextBooks(newBooks: IBookModel[]): void {
  //   if (!this.hasMore) return;

  //   this.books = [...this.books, ...newBooks];
  //   this.currentPage++;
  //   this.hasMore = newBooks.length > 0;
  //   this.isLoading = false;

  //   // Load more if the page isn't scrollable
  //   setTimeout(() => this.checkAutoLoad(), 0);
  // }

  private resetLoadedBooks(): void {
      this.books = [];
      this.currentPage = 1;
      this.hasMore = true;
      this.isLoading = false;
  }
}
