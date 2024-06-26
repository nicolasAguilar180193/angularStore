import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _http: HttpClient) { }

  getAllProducts(limit = '12', sort = 'desc', category?: string): Observable<Product[]> {
    return this._http.get<Product[]>(
      `${STORE_BASE_URL}/products${
        category ? `/category/${category}` : ''
      }?limit=${limit}&sort=${sort}`
    );
  }

  getAllCategories(): Observable<string[]> {
    return this._http.get<string[]>(
      `${STORE_BASE_URL}/products/categories`
    );
  }
}
