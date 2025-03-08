import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUploadPageComponent } from './book-upload-page.component';

describe('BookUploadPageComponent', () => {
  let component: BookUploadPageComponent;
  let fixture: ComponentFixture<BookUploadPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookUploadPageComponent]
    });
    fixture = TestBed.createComponent(BookUploadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
