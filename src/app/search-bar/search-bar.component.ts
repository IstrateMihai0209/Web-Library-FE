import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../book/book.service';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'lib-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchSubmitted = new EventEmitter<string>();
  
  searchQuery: string = '';
  private searchSubject = new Subject<string>();

  constructor(private bookService: BookService) {
    this.searchSubject
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((query) => {
        this.searchSubmitted.emit(query);
      });
  }

  onSearchInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }

  search() {
    this.searchSubmitted.emit(this.searchQuery);
  }
}
