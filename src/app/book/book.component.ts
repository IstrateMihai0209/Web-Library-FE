import { Component, Input } from '@angular/core';
import { IBookModel } from './book.model';

@Component({
  selector: 'lib-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book!: IBookModel;

}
