import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../services/product-service/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id!: number;
  product!: Product;
  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.productService.fetchProduct(this.id).subscribe(response => this.product = response)
  }
  backToProducts() {
    this.router.navigate(['products'])
  }
  onDeleteProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(response => {
      this.backToProducts()
      console.log(response)
    })
  }
}
