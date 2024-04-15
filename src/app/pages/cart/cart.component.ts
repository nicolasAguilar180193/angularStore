import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit{
  cart: Cart = { items:[{
    id: 1,
    name: 'Snickers',
    price: 150,
    quantity: 1,
    product: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Snickers',
    price: 150,
    quantity: 2,
    product: 'https://via.placeholder.com/150'
  }]};

  dataSource: CartItem[] = [];
  displayedColumns: string[] = [
    'product', 
    'name', 
    'price', 
    'quantity', 
    'total', 
    'action'
  ];

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => {
      this.cart = _cart
      this.dataSource = this.cart.items
    })
  }

  getTotal(items: CartItem[]): number {
    return this._cartService.getTotal(items);
  }

  onRemoveQuantity(item: CartItem) {
    this._cartService.removeQuantity(item);
  }
  onAddQuantity(item: CartItem) {
    this._cartService.addToCart(item);
  }

  onClearCart() {
    this._cartService.clearCart();
  }

  onRemoveFromCart(item: CartItem) {
    this._cartService.removeItem(item);
  }
}
