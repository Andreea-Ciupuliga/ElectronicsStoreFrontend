import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Product} from "../../../data/interfaces/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly endpoint = '/Product';
  constructor(private apiService : ApiService) { }

  getAllProducts(){ //merge
    return this.apiService.get(this.endpoint + '/allProducts/');
  }
  getProductByProductId(id: string){ //merge
    return this.apiService.get<Product>(this.endpoint + '/byId/'+id);
  }

  deleteById(id: string){
    return this.apiService.delete(this.endpoint+'/delete/'+id);
  }


}
