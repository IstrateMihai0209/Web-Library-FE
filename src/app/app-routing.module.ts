import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BookDetailsPageComponent } from './book-details-page/book-details-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { BookUploadPageComponent } from './book-upload-page/book-upload-page.component';
import { BookUpdatePageComponent } from './book-update-page/book-update-page.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent, title: 'Home - WebLibrary' },
  { path: 'login', component: LoginComponent, title: 'Login - WebLibrary' },
  { path: 'register', component: RegisterComponent, title: 'Register - WebLibrary' },
  { path: 'profile', component: ProfilePageComponent, title: 'Profile' },
  { path: 'book/:id', component: BookDetailsPageComponent, title: 'Book Details' },
  { path: 'categories', component: CategoryPageComponent, title: 'Categories' },
  { path: 'upload', component: BookUploadPageComponent },
  { path: 'edit/:id', component: BookUpdatePageComponent },
  { path: 'read/:id', component: PdfReaderComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
