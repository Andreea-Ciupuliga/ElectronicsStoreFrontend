import { Component, OnInit } from '@angular/core';
import {Product} from "../../data/interfaces/product";
import {ProductService} from "../../core/services/ProductService/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public Products: Product[] =[];
  title = 'Electronics Store';
  constructor(private readonly productService: ProductService) {

  }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe((data: Product[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.Products = data;
      console.log(data);
    });


  }

}
