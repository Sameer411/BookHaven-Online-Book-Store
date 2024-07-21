import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Book } from '../models/book.model';
import { CartService } from '../cart.service';
import { NgForm } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-purchase-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './purchase-form.component.html',
  styleUrl: './purchase-form.component.css'
})
export class PurchaseFormComponent implements OnInit {
  cartItems: Book[] = [];
  @Output() formClosed: EventEmitter<void> = new EventEmitter<void>();  
  
  constructor(private cartService: CartService) {
    this.cartService.cartItems.subscribe(items => {
      this.cartItems = items;
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Implement purchase logic here
      console.log('Purchase submitted', form.value);
      // Clear the cart
      this.cartService.clearCart();
      // Notify parent component to close the form
      this.formClosed.emit();
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {
  }

}
