import { Component, ChangeDetectionStrategy, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { NgxExtendedPdfViewerModule, NgxExtendedPdfViewerService, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { IBookModel } from '../book/book.model';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book/book.service';
import { CommonModule } from '@angular/common';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'lib-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css'], 
  standalone: true,
  imports: [NgxExtendedPdfViewerModule, CommonModule],
  providers: [NgxExtendedPdfViewerService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PdfReaderComponent implements OnInit {
  @HostListener('contextmenu', ['$event'])

  book: IBookModel | null = null;
  isLoading: boolean = true; 
  error: string | null = null;
  currentPageNumber: number = 1;

  private storageKeyPrefix = 'pdfPosition_';

 constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private pdfService: NgxExtendedPdfViewerService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.paramMap.subscribe(params => {
        const bookId = params.get('id');
        if (bookId) {
          const savedPosition = localStorage.getItem(`${this.storageKeyPrefix}${bookId}`);
          this.currentPageNumber = savedPosition ? parseInt(savedPosition, 10) : 1;
          this.fetchBook(Number(bookId));
        } else {
          this.error = 'Invalid book ID';
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
    }, 500);
  }
  
  fetchBook(bookId: number): void {
    this.bookService.getBookById(bookId).pipe(
      catchError(error => {
        this.error = 'Failed to load book';
        this.isLoading = false;
        this.cdr.markForCheck();
        console.error('Error fetching book details: ', error);
        return of(null);
      })
    ).subscribe(result => {
        this.book = result;
        this.isLoading = false;
        this.cdr.markForCheck();
    });
  }

  restorePosition() {
    // if (this.book?.id) {
    //   const savedPosition = localStorage.getItem(`${this.storageKeyPrefix}${this.book.id}`);
    //   if (savedPosition) {
    //     const newPage = parseInt(savedPosition, 10);
    //     if (newPage !== this.currentPageNumber) {
    //       this.currentPageNumber = newPage;
    //       this.cdr.detectChanges();
    //     }
    //   }
    // }
  }

  onPageChange(newPage: number) {
    if (this.book?.id) {
      localStorage.setItem(`${this.storageKeyPrefix}${this.book.id}`, newPage.toString());
    }
  }

  onRightClick(event: MouseEvent): void {
    event.preventDefault();
    return;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const blockedCombinations = [
      { ctrl: true, key: 's' },
      { ctrl: true, key: 'p' },
      { ctrl: true, shift: true, key: 'S' },
      { meta: true, key: 's' },
      { key: 'PrintScreen' },
      { alt: true, key: 'PrintScreen' }
    ];

    if (blockedCombinations.some(combo => 
      event.ctrlKey === (combo.ctrl || false) &&
      event.shiftKey === (combo.shift || false) &&
      event.metaKey === (combo.meta || false) &&
      event.key.toLowerCase() === combo.key.toLowerCase()
    )) {
      event.preventDefault();
      event.stopPropagation();
      return false;
    }

    if (event.key === 'PrintScreen' || (event.altKey && event.key === 'PrintScreen')) {
      event.preventDefault();
      navigator.clipboard.writeText('');
      return false;
    }

    return true;
  }
}
