import { Component, OnInit } from '@angular/core';
import {Category} from "../../data/interfaces/category";
import {CategoryService} from "../../core/services/CategoryService/category.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public Categories: Category[] =[];
  title = 'Electronics Store';
  constructor(private readonly categoryService:CategoryService) { }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe((data: Category[]) => {
      this.Categories=data;
      console.log("iau toate categoriile")
      console.log(this.Categories)
    });

  }
  printCategory(categori:string){
    console.log(categori)
  }
}
