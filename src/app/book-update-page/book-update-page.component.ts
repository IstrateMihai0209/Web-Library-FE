import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-book-update-page',
  templateUrl: './book-update-page.component.html',
  styleUrls: ['./book-update-page.component.css']
})
export class BookUpdatePageComponent implements OnInit {
  editForm: FormGroup;
  submitted: boolean = false;
  title: string = "";

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private bookService: BookService, private router: Router) {
    this.editForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      publishDate: [new Date(), Validators.required],
      publishYear: [new Date().getFullYear(), Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      moreAboutAuthor: [''],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadData(id);
      }
    });
  }

  loadData(id: number) {
    this.bookService.getBookById(id).subscribe({
      next: (result) => {
        this.title = result.title;
        const publishYear = new Date(result.publishDate).getFullYear();
        this.editForm.patchValue({
          ...result,
          publishYear: publishYear,
        });
      },
      error: (err) => {
        console.error('Failed to fetch data: ', err);
      }
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      const rawData = this.editForm.value;
      const updatedData = {
        ...rawData,
        publishDate: new Date(rawData.publishYear, 1, 1),
      };

      this.bookService.updateBook(this.route.snapshot.params['id'], updatedData).subscribe({
        next: (response) => {
          this.router.navigate(['/book', response.id]);
        },
        error: (err) => {
          console.error('Update failed', err);
        },
        complete: () => {
          console.log('Book updated!');
        }
      });
    }
  }
}
