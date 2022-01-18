import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../core/services/OrderService/order.service";
import {Product} from "../../data/interfaces/product";
import {Order} from "../../data/interfaces/order";

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss']
})
export class DeleteOrderComponent implements OnInit {

  constructor(private readonly orderService:OrderService) { }
  public orderId="";
  ngOnInit(): void {
  }

  deleteOrder(id: string) {
    this.orderService.deleteById(id).subscribe((data: Order) => {
      console.log(data)
    });
  }
}
