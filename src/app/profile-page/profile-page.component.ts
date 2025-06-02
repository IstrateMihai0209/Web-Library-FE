import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NavigationStateService } from '../navigation-state.service';
import { browserRefresh } from '../app.component';
import { IBookModel } from '../book/book.model';
import { BookService } from '../book/book.service';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'lib-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements AfterViewInit, OnDestroy {
  currentFilter: string = 'reading';
  profileId: string = '';
  error: string | null = null;
  userName: string = '';

  private routerSubscription: Subscription = new Subscription();

  loadBooksFn!: (page: number) => Observable<IBookModel[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bookService: BookService,
    public userService: UserService
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const userId = params.get('userId');
      if (userId) {
        this.profileId = userId;
        this.currentFilter = 'reading';
        this.loadBooksFn = this.getLoadBooksFn(this.currentFilter);
      } else {
        this.error = 'Invalid profile ID';
      }
    })

    this.route.queryParams.subscribe(params => {
      this.currentFilter = params['filter'] || 'reading';
      this.loadBooksFn = this.getLoadBooksFn(this.currentFilter);
    });

    this.userService.getUserNameById(this.profileId).subscribe({
      next: (result) => {
        this.userName = result;
      },
      error: (err) => {
        console.error('An error appeared while requesting the uploader name', err);
      }
    });
  }

  ngAfterViewInit() {
    // this.browserRefresh = browserRefresh;
    // console.log('refreshed?:', this.browserRefresh);

    // if (this.browserRefresh) {
    //   this.restoreActiveButton();
    // }
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
        return (page) => this.bookService.getReadingHistoryOfUser(this.profileId, page);
      case 'wishlist':
        return (page) => this.bookService.getUserWishlist(this.profileId, page);
      case 'uploads':
        return (page) => this.bookService.getBooksByUploader(this.profileId, page);
      case 'already-read':
        return (page) => this.bookService.getBooksMarkedAsReadByUser(this.profileId, page);
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
