import { ProductsService } from './../../services/product-service/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []


  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.loadProducts()
  }
  loadProducts() {
    this.productService.fetchProducts().subscribe(response => { this.products = response;} )
  }
  onProduct(id: number) {
    this.router.navigate(['product', id])
  }

}
