import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

const ROWS_HEIGHT: { [id: number]: number } = {1: 400, 3: 335, 4: 350};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  cols: number = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  category: string | undefined;

  constructor(private _cartService: CartService) { }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    console.log(newCategory);
  }

  onAddToCart(event: Product): void {
    this._cartService.addToCart({
      product: event.image,
      name: event.title,
      price: event.price,
      quantity: 1,
      id: event.id
    });
  }
}
