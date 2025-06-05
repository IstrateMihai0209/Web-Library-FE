import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { ConfirmationService } from '../confirmation.service';

@Component({
  selector: 'lib-add-username',
  templateUrl: './add-username.component.html',
  styleUrls: ['./add-username.component.css']
})
export class AddUsernameComponent {
    usernameForm: FormGroup;
    errorMessage: string = '';
    isLoading: boolean = false;
    isSubmitted: boolean = false;
    isFormDirty: boolean = false;
  
    constructor(
        public userService: UserService,
        private confirmationService: ConfirmationService,
        private fb: FormBuilder,
        private router: Router) {
          this.usernameForm = this.fb.group({
            Username: ['', [Validators.required]],
          });

          this.usernameForm.valueChanges.subscribe(() => {
            this.isFormDirty = this.usernameForm.dirty;
          });
    }

    @HostListener('window:onbeforeunload', ['$event'])
    unloadNotification($event: BeforeUnloadEvent) {
      if (!this.isSubmitted && this.isFormDirty) {
        $event.returnValue = 'You have unsaved changes!';
      }
    }

    async canDeactivate(): Promise<boolean | undefined> {
      if (this.isSubmitted)
        return true;
      
      // Get target route from router
      const currentNavigation = this.router.getCurrentNavigation();
      const targetRoute = currentNavigation?.extractedUrl.toString();

      // Whitelisted routes
      const allowedRoutes = ['/login', '/register'];

      if (targetRoute && allowedRoutes.some(route => targetRoute.includes(route))) {
        return true;
      }

      const message = "You didn't submit a new username. Are you sure you want to leave?";
      return await this.confirmationService.confirm(message, "Yes", "No").toPromise();
    } 

    onSubmit() {
      const usernameModel = {
        Username: this.usernameForm.get('username')?.value
      };

      this.userService.updateUserName(this.usernameForm.value).subscribe({
        next: () => {
          this.isSubmitted = true;
          this.isFormDirty = false;
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Failed to update username!', err);
        }
      })
    }
}
