import { Component, OnInit } from '@angular/core';
import {ProductRespondDTO} from "../../data/DTOs/product-respond-dto";
import {ProductService} from "../../core/services/ProductService/product.service";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../../data/interfaces/product";
import {ProductRegisterDTO} from "../../data/DTOs/product-register-dto";
import {OrderRegisterDTO} from "../../data/DTOs/order-register-dto";
import {FormBuilder, Validators} from "@angular/forms";
import {OrderService} from "../../core/services/OrderService/order.service";
import {DeliveryAddressService} from "../../core/services/DeliveryAddressService/delivery-address.service";
import {DeliveryAddressRegisterDTO} from "../../data/DTOs/delivery-address-register-dto";

@Component({
  selector: 'app-add-to-card',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {
  public product: ProductRespondDTO = {id: "", name: "", price: 0, description: "", photoLink: "",categoryId:""};
  public Orders:OrderRegisterDTO[]=[];

  public deliveryAddress : DeliveryAddressRegisterDTO = {city:"",street:"",number:"",zipCode:"",orderId:""}
  public deliveryAddresses:DeliveryAddressRegisterDTO[] =[];

  registrationForm = this.fb.group({
    //scriem proprietatile pe care o sa le folosim

    userId: ['', Validators.required],

    City: ['', Validators.required],
    Street: ['', Validators.required],
    Number: ['', Validators.email],
    ZIPCode: ['', Validators.required],

    })

  constructor(private deliveryAddressService: DeliveryAddressService,private orderService:OrderService,private fb: FormBuilder,private readonly productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productService.getProductByProductId(String(this.route.snapshot.paramMap.get('id'))).subscribe((data: Product) => {
      this.product = data;
    });
  }

  submit():void{

    let orderRegisterDto = this.registrationForm.value;

    orderRegisterDto.totalPrice=this.product.price;
    orderRegisterDto.productId=this.product.id;

    console.log(orderRegisterDto)

    this.orderService.createOrder(orderRegisterDto).subscribe((data: any) => {
      this.Orders=data;
    });


  }

}
