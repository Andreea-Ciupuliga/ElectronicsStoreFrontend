import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Order} from "../../../data/interfaces/order";
import {OrderRegisterDTO} from "../../../data/DTOs/order-register-dto";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly endpoint = '/Order';
  constructor(private apiService : ApiService) { }

  getAllOrders(){
    return this.apiService.get(this.endpoint + '/allOrders/');
  }
  getOrderByOrderId(id: string){
    return this.apiService.get<Order>(this.endpoint + '/byId/'+id);
  }

  deleteById(id: string){
    return this.apiService.delete(this.endpoint+'/delete/'+id);
  }

  createOrder(orderRegisterDTO: OrderRegisterDTO) {
    return this.apiService.post<Order>(this.endpoint + '/create',orderRegisterDTO);
  }
}
