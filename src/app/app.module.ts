import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { InfiniteScrollDirective } from './infinite-scroll.directive';
import { BookDetailsPageComponent } from './book-details-page/book-details-page.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookScrollComponent } from './book-scroll/book-scroll.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { BookUploadPageComponent } from './book-upload-page/book-upload-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ExamplePdfViewerComponent } from "./example-pdf-viewer/example-pdf-viewer.component";
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BookUpdatePageComponent } from './book-update-page/book-update-page.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SocialCallbackComponent } from './social-callback/social-callback.component';
import { GoogleCallbackComponent } from './google-callback/google-callback.component';
import { AddUsernameComponent } from './add-username/add-username.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookListComponent,
    BookComponent,
    FiltersComponent,
    HomepageComponent,
    ProfilePageComponent,
    InfiniteScrollDirective,
    BookDetailsPageComponent,
    BookDetailsComponent,
    BookScrollComponent,
    CategoryPageComponent,
    BookUploadPageComponent,
    ConfirmationDialogComponent,
    BookUpdatePageComponent,
    SearchBarComponent,
    SocialCallbackComponent,
    GoogleCallbackComponent,
    AddUsernameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxExtendedPdfViewerModule,
    ExamplePdfViewerComponent,
    MatDialogModule,
    MatButtonModule,
    PdfReaderComponent,
],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
