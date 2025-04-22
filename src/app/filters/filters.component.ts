import { Component, EventEmitter, Output } from '@angular/core';

interface FilterCategory {
  key: string;
  label: string;
}

@Component({
  selector: 'lib-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent {
  @Output() filtersChanged = new EventEmitter<Map<string, Set<string>>>();

  categories: FilterCategory[] = [
    { key: 'author', label: 'Author' },
    { key: 'publisher', label: 'Publisher' },
    { key: 'genre', label: 'Genre' },
    { key: 'language', label: 'Language' }
  ];

  selectedFilters = new Map<string, Set<string>>([
    ['author', new Set()],
    ['publisher', new Set()],
    ['genre', new Set()],
    ['language', new Set()],
  ]);

  visibleInputs: { [key: string]: boolean } = {
    author: false,
    publisher: false,
    genre: false,
    language: false
  };

  toggleInput(category: string): void {
    this.visibleInputs[category] = !this.visibleInputs[category];
  }

  addFilter(category: string, value: string): void {
    const trimmedValue = value?.trim();
    if (!trimmedValue) return;

    this.selectedFilters.get(category)?.add(trimmedValue);
    this.visibleInputs[category] = false;
    this.emitFilters();
  }

  removeFilter(category: string, value: string): void {
    this.selectedFilters.get(category)?.delete(value);
    this.emitFilters();
  }

  private emitFilters(): void {
    this.filtersChanged.emit(new Map(this.selectedFilters));
  }
}
