import { Directive, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[libInfiniteScroll]'
})
export class InfiniteScrollDirective implements OnInit, OnDestroy {
  @Output() scrolled = new EventEmitter<void>();
  private scrollSubscription!: Subscription;
  private thresold = 100; // pixels from the bottom to trigger loading

  ngOnInit(): void {
    this.scrollSubscription = fromEvent(window, 'scroll')
    .pipe(debounceTime(200))
    .subscribe(() => this.checkScroll());
  }

  ngOnDestroy(): void {
    this.scrollSubscription?.unsubscribe();
  }

  private checkScroll() : void {
    const position = window.scrollY + window.innerHeight;
    const height = document.documentElement.scrollHeight;

    if (position > height - this.thresold) {
      this.scrolled.emit();
    }
  }
}
