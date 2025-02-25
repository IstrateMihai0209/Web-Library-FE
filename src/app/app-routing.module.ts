import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent, title: 'Home - WebLibrary' },
  { path: 'login', component: LoginComponent, title: 'Login - WebLibrary' },
  { path: 'register', component: RegisterComponent, title: 'Register - WebLibrary' },
  { path: 'profile', component: ProfilePageComponent, title: 'Profile' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
