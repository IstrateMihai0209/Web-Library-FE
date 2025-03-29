import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUpdatePageComponent } from './book-update-page.component';

describe('BookUpdatePageComponent', () => {
  let component: BookUpdatePageComponent;
  let fixture: ComponentFixture<BookUpdatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookUpdatePageComponent]
    });
    fixture = TestBed.createComponent(BookUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
