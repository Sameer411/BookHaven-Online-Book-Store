import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {
  title = 'BookHaven';
  @Input() book!: Book;

  constructor(private cartService: CartService) {}

  addToCart(book: Book) {
    this.cartService.addToCart(book);
  }
}
