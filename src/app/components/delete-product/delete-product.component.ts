import {Component, OnInit} from '@angular/core';
import {Product} from "../../data/interfaces/product";
import {ProductService} from "../../core/services/ProductService/product.service";
import {ProductRespondDTO} from "../../data/DTOs/product-respond-dto";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent implements OnInit {

  constructor(private readonly productService: ProductService) {
  }

  public productId = "";

  ngOnInit(): void {
  }

  deleteProduct(id: string) {
    this.productId = "";
    this.productService.deleteById(id).subscribe((data: Product) => {
      console.log(data)
    });
  }
}
