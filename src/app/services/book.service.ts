import { Book } from '@app/models/book.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  baseUrl = 'http://localhost:3000/v1';
  baseUrlToBook = 'http://localhost:3000/v1/books';
  baseUrlToRead = 'http://localhost:3000/v1/books/all';
  baseUrlToUpdateBook = 'http://localhost:3000/v1/book';
  baseUrlToReadByUserId = 'http://localhost:3000/v1/books/byUserId';

  constructor(private http: HttpClient) {}

  emptyFields(Book: Book) {
    Book.title = '';
    Book.autor = '';
    Book.category = '';
    Book.playlist = '';
    Book.sin = '';
    Book.image = '';
  }

  create(Book: Book, selectedFile: File): Observable<any> {
    Book.image = selectedFile.name;
    Book.file = selectedFile;

    const fd = new FormData();
    fd.append('image', selectedFile, selectedFile.name);
    fd.append('title', Book.title);
    fd.append('autor', Book.autor);
    fd.append('category', Book.category);
    fd.append('playlist', Book.playlist);
    fd.append('sin', Book.sin);

    return this.http.post(this.baseUrlToBook, fd);
  }

  getCategories(): string[] {
    const categories = ['Romance', 'Fantasia', 'Terror/Suspense', 'Policial'];

    return categories;
  }

  read(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrlToRead);
  }

  readByUserId(): Observable<Book[]> {
    return this.http.get<Book[]>(this.baseUrlToReadByUserId);
  }

  readById(id: any): Observable<Book> {
    return this.http.get<Book>(`${this.baseUrlToBook}/${id}`);
  }

  update(Book: Book, selectedFile: File): Observable<any> {
    const fd = new FormData();

    if (selectedFile) {
      fd.append('image', selectedFile, selectedFile.name);
    }

    fd.append('_id', Book._id);
    fd.append('title', Book.title);
    fd.append('autor', Book.autor);
    fd.append('category', Book.category);
    fd.append('playlist', Book.playlist);
    fd.append('sin', Book.sin);
    console.log(fd);

    return this.http.put<any>(this.baseUrlToBook, fd);
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.baseUrlToBook}/${id}`);
  }
}
