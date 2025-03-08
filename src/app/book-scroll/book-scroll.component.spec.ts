import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookScrollComponent } from './book-scroll.component';

describe('BookScrollComponent', () => {
  let component: BookScrollComponent;
  let fixture: ComponentFixture<BookScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookScrollComponent]
    });
    fixture = TestBed.createComponent(BookScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
