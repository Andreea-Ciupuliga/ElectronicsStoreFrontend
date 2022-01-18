import { Component, OnInit } from '@angular/core';
import {Product} from "../../data/interfaces/product";
import {ProductService} from "../../core/services/ProductService/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public Products: Product[] =[];
  constructor(private readonly productService: ProductService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;


    this.productService.getAllProductsFromCategory(String(this.route.snapshot.paramMap.get('id'))).subscribe((data: Product[]) => {         //daca nu scriem .subscribe nu o sa se faca requestul
      this.Products = data;

    });
  }

}
