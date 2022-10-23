import { Component } from '@angular/core';
import { IBook } from './models/book';
import * as data from './data/books.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'angular books homework';

  books: IBook[] = (data as any).default;
  
  addToCart(ISBN: number): void {
    this.books = this.books.filter((item: IBook) => item.ISBN !== ISBN);
    console.log('pressed parrent');
  }
}



