import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-social-callback',
  templateUrl: './social-callback.component.html',
  styleUrls: ['./social-callback.component.css']
})
export class SocialCallbackComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit () {
    this.authService.handleSocialCallback().subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => this.router.navigate(['/login'])
    });
  }
}
