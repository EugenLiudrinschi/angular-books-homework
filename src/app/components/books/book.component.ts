import {Component, EventEmitter, Input, Output} from "@angular/core";
import { IBook } from "src/app/models/book";

@Component ({
  selector: 'app-book',
  templateUrl: './book.component.html'
})

export class BookComponent {
  @Input() 
  book: IBook;

  @Output() 
  onCart = new EventEmitter<number>();

  addBookToCart() {
    this.onCart.emit(this.book.ISBN);       
  }

  summary = false;

}