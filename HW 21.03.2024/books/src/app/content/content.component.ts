import { Component } from '@angular/core';
import { books } from '../books';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  books = books;

  selectedBook: any;

  showDetails(book: any) {
    this.selectedBook = book;
  }
}


