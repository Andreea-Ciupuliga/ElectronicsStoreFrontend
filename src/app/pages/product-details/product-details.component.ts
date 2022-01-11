import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../core/services/ProductService/product.service";
import {Product} from "../../data/interfaces/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public product: Product = {id: "", name: "", price: 0, description: "", photoLink: ""};

  constructor(private readonly productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.productService.getProductByProductId(String(this.route.snapshot.paramMap.get('id'))).subscribe((data: Product) => {
      this.product = data;
    });

  }

  deleteProduct(id: string) {
    this.productService.deleteById(id).subscribe((data: Product) => {
      this.product = data;
    });
  }

}
