import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username: string = '';
  isAuthenticated: boolean = false;
  isLoggingOut: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      if (user) {
        this.username = user.userName;
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    });
  }

  logout() {
    if (this.isLoggingOut)
      return;

    this.isLoggingOut = true;
    this.authService.logout().subscribe({
      complete: () => this.isLoggingOut = false,
      error: () => this.isLoggingOut = false
    });
  }
}
