import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBookUploadData } from '../book/book.model';
import { BookService } from '../book/book.service';

@Component({
  selector: 'lib-book-upload-page',
  templateUrl: './book-upload-page.component.html',
  styleUrls: ['./book-upload-page.component.css']
})
export class BookUploadPageComponent {
  bookForm: FormGroup;
  coverImageFile: File | null = null;
  textFile: File | null = null;
  submitted: boolean = false;
  bookUploadData: IBookUploadData = {
    title: '',
    author: '',
    genre: '',
    publisher: '',
    publishYear: -1,
    moreAboutAuthor: '',
    description: '',
  }

  constructor(private formBuilder: FormBuilder, private bookService: BookService) {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: ['', Validators.required],
      publishYear: ['', Validators.required],
      genre: ['', Validators.required],
      description: ['', Validators.required],
      moreAboutAuthor: [''],
    });
  }

  onCoverImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.coverImageFile = file;
    }
  }

  onTextFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      this.textFile = file;
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.bookForm.valid && this.coverImageFile && this.textFile) {
      const formData = new FormData();
      formData.append('UploaderId', this.bookService.userId.toString());
      formData.append('Title', this.bookForm.get('title')?.value);
      formData.append('Author', this.bookForm.get('author')?.value);
      formData.append('Publisher', this.bookForm.get('publisher')?.value);
      formData.append('Genre', this.bookForm.get('genre')?.value);
      formData.append('Description', this.bookForm.get('description')?.value);
      formData.append('PublishYear', this.bookForm.get('publishYear')?.value);
      formData.append('MoreAboutAuthor', this.bookForm.get('moreAboutAuthor')?.value);
      formData.append('CoverImage', this.coverImageFile, this.bookForm.get('title')?.value.toLowerCase().replace(' ', '-'));
      formData.append('TextFile', this.textFile, this.bookForm.get('title')?.value.toLowerCase().replace(' ', '-'));

      console.log('Uploading book');
      this.bookService.uploadBook(formData).subscribe({
        next: (event) => {
          this.bookForm.reset();
          this.submitted = false;
          this.coverImageFile = null;
          this.textFile = null;

          //TODO: Redirect to success page or other page or show message in the upload page
        },
        error: (err) => {
          console.error('Upload failed', err);
        },
        complete: () => {
          
        }
      });
    } else {
      this.bookForm.markAllAsTouched();
    }
  }
}
