import { PurchaseFormComponent } from "../purchase-form/purchase-form.component";
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SearchService } from '../search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PurchaseFormComponent, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cartCount: number = 0;
  searchTerm: string = '';
  showPurchaseForm: boolean = false;

  constructor(private cartService: CartService, private searchService: SearchService) {
    this.cartService.cartItems.subscribe(items => {
      this.cartCount = items.length;
    });
  }

  ngOnInit() {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }

  onSearch(event: Event): void {
    event.preventDefault();
    this.searchService.setSearchTerm(this.searchTerm);
  }

  togglePurchaseForm(): void {
    this.showPurchaseForm = !this.showPurchaseForm;
  }

  handleFormClosed(): void {
    this.showPurchaseForm = false;
    this.cartCount = 0;  // Reset the cart count to 0
  }
  
}
