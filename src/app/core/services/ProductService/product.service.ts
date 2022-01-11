import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Product} from "../../../data/interfaces/product";
import {ProductRegisterDTO} from "../../../data/DTOs/product-register-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly endpoint = '/Product';
  constructor(private apiService : ApiService) { }

  getAllProducts(){
    return this.apiService.get(this.endpoint + '/allProducts/');
  }
  getProductByProductId(id: string){
    return this.apiService.get<Product>(this.endpoint + '/byId/'+id);
  }

  deleteById(id: string){
    return this.apiService.delete(this.endpoint+'/delete/'+id);
  }

  createProduct(productRegisterDTO: ProductRegisterDTO) {
    return this.apiService.post<Product>(this.endpoint + '/create',productRegisterDTO);
  }


}
