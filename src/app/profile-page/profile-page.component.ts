import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  currentFilter: string = 'reading';

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    // this.bookService.getBooksByUploader(this.userId).subscribe((books) => {
    //     this.books = books;
    // });
    // this.bookService.getReadingHistoryOfUser(this.userId).subscribe((books) => {
    //     this.books = books;
    // });
    // this.bookService.getUserWishlist(this.userId).subscribe((books) => {
    //   this.books = books;
    // });
    // this.bookService.getBooksMarkedAsReadByUser(this.userId).subscribe((books) => {
    //   this.books = books;
    // })
  }
}
