import { Router} from '@angular/router';
import { ProductsService } from './../../services/product-service/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }
  backToProducts() {
    this.router.navigate(['products'])
  }
  onCreateProduct(product: Product) {
    this.productService.createProduct(product).subscribe(response => {
      this.backToProducts();
    }, error => console.error(error));
  }
}


