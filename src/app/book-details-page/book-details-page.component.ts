import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book/book.service';
import { IBookModel } from '../book/book.model';

@Component({
  selector: 'lib-book-details-page',
  templateUrl: './book-details-page.component.html',
  styleUrls: ['./book-details-page.component.css']
})
export class BookDetailsPageComponent implements OnInit {
  book!: IBookModel;
  similarBooks!: IBookModel[];

  constructor(private route: ActivatedRoute, private bookService: BookService) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = params.get('id');
      if (bookId) {
        this.fetchBook(Number(bookId));

        setTimeout(() => {
          this.bookService.getSimilarBooks(this.book).subscribe(response => {
            this.similarBooks = response; 
          });
        }, 500);
      }
    });
  }
  
  fetchBook(bookId: number): void {
    this.bookService.getBookById(bookId).subscribe({
      next: (result) => {
        this.book = result;
      },
      error: (error) => {
        console.error('Error fetching book details: ', error);
      }
    });
  }
}
