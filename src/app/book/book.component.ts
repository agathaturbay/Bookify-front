import { Component, OnInit } from '@angular/core';
import { BookService } from '@app/services/book.service';
import { ToastService } from '@app/services/toast.service';
import { Book } from '@app/models/book.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  bookForm!: FormGroup;
  newBook!: Book;
  bookCategories!: string[];
  image: any;
  selectedFile: any;

  constructor(private bookService: BookService, private toastService: ToastService, private fb: FormBuilder) {}

  loadForms() {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      autor: ['', Validators.required],
      category: ['', Validators.required],
      playlist: ['', Validators.required],
      sin: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadForms();
    this.bookCategories = this.bookService.getCategories();
    this.image = '';
  }

  onFileSelected(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]); // to trigger onload

    this.selectedFile = <File>event.target.files[0];
  }

  createBook() {
    this.newBook = this.bookForm.value;
    console.log(this.newBook);
    console.log(this.selectedFile);

    this.bookService.create(this.newBook, this.selectedFile).subscribe(() => {
      if (confirm('Tem certeza de que deseja cadastrar o livro?')) {
        console.log('livro cadastrado');
        this.toastService.showMessage('Livro cadastrado com sucesso!');
        this.ngOnInit();
      }
    });
  }
}
