import { CredentialsService } from '@app/core/authentication/credentials.service';
import { BookService } from '@app/services/book.service';
import { Book } from '@app/models/book.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss'],
})
export class DiscoverComponent implements OnInit {
  @ViewChild('categorySlider') slides!: IonSlides;
  books: Book[] = [];
  allBooks: Book[] = [];
  categories: string[] = [];
  categoria: string | undefined;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 'auto',
  };
  disablePrevBtn: boolean = true;
  disableNextBtn: boolean = false;

  constructor(private bookService: BookService, private credentialsService: CredentialsService) {}

  async ngOnInit() {
    await this.bookService.read().subscribe((books) => {
      console.log(books);
      this.books = books;
      this.allBooks = books;
      this.getBookCategories();
    });
  }

  getBookCategories() {
    this.books.map((book) => this.categories.push(book.category));
  }

  arrowVisibility() {
    let isBeg = this.slides.isBeginning();
    let isEnd = this.slides.isEnd();

    Promise.all([isBeg, isEnd]).then((data) => {
      data[0] ? (this.disablePrevBtn = true) : (this.disablePrevBtn = false);
      data[1] ? (this.disableNextBtn = true) : (this.disableNextBtn = false);
    });
  }

  next() {
    this.slides.slideNext();
    console.log('Deu next');
  }

  prev() {
    this.slides.slidePrev();
  }

  reachedEnd() {
    this.disableNextBtn = true;
  }

  listAll() {
    this.books = this.allBooks;
  }

  filterRomance() {
    var categoria = 'Romance';
    console.log(categoria);
    return categoria;
  }

  filterPolicial() {
    var categoria = 'Policial';
    console.log(categoria);
    return categoria;
  }

  filterFantasia() {
    var categoria = 'Fantasia';
    console.log(categoria);
    return categoria;
  }
  filterTerror() {
    var categoria = 'Terror/Suspense';
    console.log(categoria);
    return categoria;
  }
  filterAll() {
    var categoria = 'all';
    console.log(categoria);
    return categoria;
  }
}
