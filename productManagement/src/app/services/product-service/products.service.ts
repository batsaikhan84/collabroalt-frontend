import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:3000/products'

  constructor(private http: HttpClient) { }

  fetchProducts() {
    return this.http.get<Product[]>(this.url)
  }
  fetchProduct(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }
  createProduct(product: Product) {
    console.log(product)
    return this.http.post(this.url, product)
  }
  updateProduct(id: number, product: Object) {
    return this.http.put<Product>(`${this.url}/${id}`, product)
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
