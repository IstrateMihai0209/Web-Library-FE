import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-add-username',
  templateUrl: './add-username.component.html',
  styleUrls: ['./add-username.component.css']
})
export class AddUsernameComponent {
    usernameForm: FormGroup;
    errorMessage: string = '';
    isLoading: boolean = false;
  
    constructor(
        public authService: AuthService,
        private fb: FormBuilder,
        private router: Router) {
          this.usernameForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
          });
      }

    onSubmit() {

    }
}
