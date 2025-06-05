import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-google-callback',
  templateUrl: './google-callback.component.html',
  styleUrls: ['./google-callback.component.css']
})
export class GoogleCallbackComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit(): void {
    this.authService.handleSocialCallback().subscribe(success => {
      if(!success) this.router.navigate(['/login']);
      else this.router.navigate(['/change-username']);
    })
  }
}
