import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationStateService } from '../navigation-state.service';
import { browserRefresh } from '../app.component';

@Component({
  selector: 'lib-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements AfterViewInit, OnDestroy {
  currentFilter: string = 'reading';
  private routerSubscription: Subscription = new Subscription();
  private browserRefresh: boolean = false;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private subscription: NavigationStateService
    ) { }

  ngAfterViewInit() {
    this.browserRefresh = browserRefresh;
    console.log('refreshed?:', this.browserRefresh);

    if (this.browserRefresh) {
      this.restoreActiveButton();
    }
  }

  // ngAfterViewInit(): void {

  //  // Detect page reload
  // //  this.routerSubscription.add(
  // //   this.navigationService.onPageReload().subscribe(() => {
  // //     this.restoreActiveButton();
  // //   })
  // //  );

  //  // Detect route changes
  // //  this.routerSubscription.add(
  // //   this.navigationService.onRouteChange().subscribe((url) => {
  // //   })
  // //  );
  // }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  // ngAfterViewInit(): void {
  //   this.restoreActiveButton();
  // }
  
  setFilter(filter: string) {
    this.currentFilter = filter;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { filter }, // update query params
      queryParamsHandling: 'merge' // preserve other params
    });
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
