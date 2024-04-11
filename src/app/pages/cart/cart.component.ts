import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/Models/cart.model';

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

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: CartItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, curr) => prev + curr, 0);
  }

  onRemoveQuantity(e: any) {}
  onAddQuantity(e: any) {}

  onClearCart() {}
}
