import { Component, Input } from '@angular/core';
import { IBookModel } from '../book/book.model';

@Component({
  selector: 'lib-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {
  @Input() book!: IBookModel;


}
