import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';

@Component({
  selector: 'lib-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  loadBooksFn: (page: number) => any;

  private filtersDict: { [key: string]: string[] } = {};
  private lastQuery: string = '';

  constructor(private bookService: BookService) {
    this.loadBooksFn = (page) => this.bookService.getTopPopularBooks(page);
  }

  handleSearch(query: string) {
    if (query !== '') {
      this.loadBooksFn = (page) => this.bookService.searchBooks(query, this.filtersDict, page);
      this.lastQuery = query;
    } else {
      this.loadBooksFn = (page) => this.bookService.getTopPopularBooks(page);
      this.lastQuery = query;
    }
  }

  onFiltersChanged(filters: Map<string, Set<string>>) {
    this.filtersDict = {};

    filters.forEach((values, key) => {
      if (values.size > 0) {
        this.filtersDict[key] = Array.from(values);
      }
    });

    this.loadBooksFn = (page) => this.bookService.searchBooks(this.lastQuery, this.filtersDict, page)
  }
}
