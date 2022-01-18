import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {DeliveryAddress} from "../../../data/interfaces/delivery-address";
import {DeliveryAddressRegisterDTO} from "../../../data/DTOs/delivery-address-register-dto";

@Injectable({
  providedIn: 'root'
})
export class DeliveryAddressService {
  private readonly endpoint = '/DeliveryAddress';
  constructor(private apiService : ApiService) { }

  getAllDeliveryAddresses(){
    return this.apiService.get(this.endpoint + '/allDeliveryAddresses/');
  }

  getDeliveryAddressByDeliveryAddressId(id: string){
    return this.apiService.get<DeliveryAddress>(this.endpoint + '/byId/'+id);
  }

  deleteById(id: string){
    return this.apiService.delete(this.endpoint+'/delete/'+id);
  }

  createDeliveryAddress(deliveryAddressRegisterDTO: DeliveryAddressRegisterDTO) {
    return this.apiService.post<DeliveryAddress>(this.endpoint + '/create',deliveryAddressRegisterDTO);
  }

}
