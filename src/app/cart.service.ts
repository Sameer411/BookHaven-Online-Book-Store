import { Injectable } from '@angular/core';
import { Book } from './models/book.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Book[] = [];
  private cartCount = new BehaviorSubject<number>(0);
  private items = new BehaviorSubject<Book[]>([]);
  cartItems = this.items.asObservable();
  cartCount$ = this.cartCount.asObservable();

  addToCart(item: any): void {
    const currentItems = this.items.value;
    this.items.next([...currentItems, item]);
  }

  clearCart(): void {
    this.items.next([]);
  }

  getCart(): Book[] {
    return this.cart;
  }

}