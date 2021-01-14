import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // onUpdateProduct(id: number, product: Object) {
  //   this.productService.updateProduct(id, product).subscribe(response => {
  //     console.log(response), this.loadProducts()}
  //     )
  // }

}
