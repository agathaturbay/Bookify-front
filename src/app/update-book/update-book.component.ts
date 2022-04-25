import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from '@app/services/toast.service';
import { BookService } from '@app/services/book.service';
import { Book } from '@app/models/book.model';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss'],
})
export class UpdateBookComponent implements OnInit {
  bookForm!: FormGroup;
  newBook!: Book;
  bookCategories!: string[];
  selectedFile: any;
  image: any;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {}

  loadForms() {
    this.bookForm = this.fb.group({
      _id: [''],
      title: ['', Validators.required],
      autor: ['', Validators.required],
      category: ['', Validators.required],
      playlist: ['', Validators.required],
      sin: ['', Validators.required],
    });
  }

  populateForms(book: Book) {
    this.bookForm.patchValue(book);
  }

  ngOnInit(): void {
    this.loadForms();
    this.bookCategories = this.bookService.getCategories();

    const id = this.route.snapshot.params['id'];
    console.log(id);

    this.bookService.readById(id).subscribe((book) => {
      this.populateForms(book);
      this.image = book.image;
    });
  }

  onFileSelected(event: any) {
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]); // to trigger onload

    this.selectedFile = <File>event.target.files[0];
  }

  updateBook(): void {
    this.newBook = this.bookForm.value;

    this.bookService.update(this.newBook, this.selectedFile).subscribe((response) => {
      if (confirm('Tem certeza de que deseja atualizar o livro?')) {
        this.toastService.showMessage('Produto atualizado com sucesso!');
        this.router.navigate(['discover'], { replaceUrl: true });
      }
    });
  }

  cancel(): void {
    this.router.navigate(['discover'], { replaceUrl: true });
  }
}
