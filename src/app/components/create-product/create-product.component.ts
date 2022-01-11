import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ProductService} from "../../core/services/ProductService/product.service";
import {Product} from "../../data/interfaces/product";
import {ProductRespondDTO} from "../../data/DTOs/product-respond-dto";
import {ProductRegisterDTO} from "../../data/DTOs/product-register-dto";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  public product: ProductRegisterDTO = {name: "", price: 0, description: "", photoLink: "",categoryId:""};
  public Products:ProductRegisterDTO[]=[];

  registrationForm = this.fb.group({
    //scriem proprietatile pe care o sa le folosim

    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    photoLink: ['', Validators.required],
    categoryId: ['', Validators.required],

  })

  constructor(private fb: FormBuilder,private readonly productService: ProductService,private readonly httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  checkForm() {
    this.getFormValidationErrors(['name', 'price'])
    console.log(this.registrationForm.value)
  }

  getFormValidationErrors(keys: any) {
    keys.forEach((key: any) => {
      const controlErrors = this.registrationForm.get(key)?.errors;
      if (controlErrors !== null)
        console.error(controlErrors);
    });
  }

  submit():void{

    let productRegisterDto = this.registrationForm.value;

    this.productService.createProduct(productRegisterDto).subscribe((data: any) => {
      this.Products=data;
    });

    //this.httpClient.post(`https://localhost:5001/api/Product/create`,newProduct).subscribe( (data : any) =>{this.Products = data});

  }

}
