import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NavigationStateService } from '../navigation-state.service';
import { browserRefresh } from '../app.component';
import { IBookModel } from '../book/book.model';
import { BookService } from '../book/book.service';

@Component({
  selector: 'lib-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements AfterViewInit, OnDestroy {
  currentFilter: string = 'reading';
  private routerSubscription: Subscription = new Subscription();
  private browserRefresh: boolean = false;

  loadBooksFn!: (page: number) => Observable<IBookModel[]>;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private subscription: NavigationStateService,
      private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.currentFilter = params['filter'] || 'reading';
      this.loadBooksFn = this.getLoadBooksFn(this.currentFilter);
    });
  }

  ngAfterViewInit() {
    this.browserRefresh = browserRefresh;
    console.log('refreshed?:', this.browserRefresh);

    if (this.browserRefresh) {
      this.restoreActiveButton();
    }
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  setFilter(filter: string) {
    this.currentFilter = filter;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter }, // update query params
      queryParamsHandling: 'merge' // preserve other params
    });
  }

  private getLoadBooksFn(filter: string): (page: number) => Observable<IBookModel[]>
  {
    switch (filter) {
      case 'reading':
        return (page) => this.bookService.getReadingHistoryOfUser(this.bookService.userId, page);
      case 'wishlist':
        return (page) => this.bookService.getUserWishlist(this.bookService.userId, page);
      case 'uploads':
        return (page) => this.bookService.getBooksByUploader(this.bookService.userId, page);
      case 'already-read':
        return (page) => this.bookService.getBooksMarkedAsReadByUser(this.bookService.userId, page);
      default:
        return () => new Observable(subscriber => subscriber.next([]));
    }
  }

  highlightButton(buttonId: string) {
    const buttons = document.querySelectorAll('.profile-sections button');
    buttons.forEach(btn => btn.classList.remove('active'));

    const button = document.getElementById(buttonId);
    if(button != null) {
      button.classList.add('active');
      localStorage.setItem('activeButtonId', button.id);
    }
  }

  private restoreActiveButton(): void {
    const activeButtonId = localStorage.getItem('activeButtonId');
    console.log(activeButtonId);

    if (activeButtonId) {
      this.highlightButton(activeButtonId);
    }
    else {
      this.highlightButton(this.currentFilter);
    }
  }
}
