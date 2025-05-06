import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationStateService } from './navigation-state.service';
import { AuthService } from './auth/auth.service';

export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'web-library';
  subscription: Subscription;
  
  constructor(private authService: AuthService, private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        browserRefresh = !router.navigated;
      }
    });
  }

  ngOnInit(): void {
    this.authService.isAuthCheckComplete.subscribe(() => {
      if (this.authService.isUserAuthenticated) {
      }
    });
  }
}
