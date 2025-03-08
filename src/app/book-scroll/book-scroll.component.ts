import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { IBookModel } from '../book/book.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-book-scroll',
  templateUrl: './book-scroll.component.html',
  styleUrls: ['./book-scroll.component.css']
})
export class BookScrollComponent implements AfterViewInit {
  @ViewChild('scrollContent') scrollContent!: ElementRef;
  @Input() books!: IBookModel[];
  
  public canScrollLeft: boolean = false;
  public canScrollRight: boolean = false;
  
  constructor(private route: ActivatedRoute, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.route.paramMap.subscribe(() => {
      this.resetScroll();
    });

    setTimeout(() => {
      this.checkScroll();

      const resizeObserver = new ResizeObserver(() => this.checkScroll());
      resizeObserver.observe(this.scrollContent.nativeElement);
    }, 0);
  }

  checkScroll(): void {
    const el = this.scrollContent.nativeElement;
    const tolerance = 1;
    this.canScrollLeft = el.scrollLeft > tolerance;
    this.canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth - tolerance;
  
    this.cdRef.detectChanges();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScroll();
  }

  scrollLeft(): void {
    this.scrollContent.nativeElement.scrollBy({
      left: -800,
      behavior: 'smooth'
    });
    setTimeout(() => this.checkScroll(), 400);
  }

  scrollRight(): void {
    this.scrollContent.nativeElement.scrollBy({
      left: 800,
      behavior: 'smooth'
    });
    setTimeout(() => this.checkScroll(), 400);
  }

  private resetScroll() {
    if (this.scrollContent?.nativeElement) {
      this.scrollContent.nativeElement.scrollLeft = 0;
    }
  }
}
