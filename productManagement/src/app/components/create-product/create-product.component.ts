import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from './../../services/product-service/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  backToProducts() {
    this.router.navigate(['products'])
  }
  onCreateProduct(product: Product) {
    this.productService.createProduct(product).subscribe(response => {
        console.log(response);
        this.backToProducts();
    });
  }
}
