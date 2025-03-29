import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfReaderComponent } from './pdf-reader.component';

describe('PdfReaderComponent', () => {
  let component: PdfReaderComponent;
  let fixture: ComponentFixture<PdfReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfReaderComponent]
    });
    fixture = TestBed.createComponent(PdfReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
