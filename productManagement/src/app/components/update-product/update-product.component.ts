import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/product-service/products.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id!: number
  product!: Product
  submitted!: false;

  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.productService.fetchProduct(this.id).subscribe(response => this.product = response)
  }
  backToProduct() {
    this.router.navigate(['product', this.id])
  }
  onUpdateProduct(id: number, updatedProduct: Product) {
    this.productService.updateProduct(id, updatedProduct).subscribe(response => {
      this.product = response
      this.backToProduct()
    })
  }
}
