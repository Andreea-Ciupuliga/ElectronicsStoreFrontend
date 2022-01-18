import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {Category} from "../../../data/interfaces/category";
import {CategoryRegisterDTO} from "../../../data/DTOs/category-register-dto";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly endpoint = '/Category';
  constructor(private apiService : ApiService) { }

  getAllCategories(){
    return this.apiService.get(this.endpoint + '/allCategories/');
  }
  getCategoryByCategoryId(id: string){
    return this.apiService.get<Category>(this.endpoint + '/byId/'+id);
  }

  deleteById(id: string){
    return this.apiService.delete(this.endpoint+'/delete/'+id);
  }

  createCategory(categoryRegisterDTO: CategoryRegisterDTO) {
    return this.apiService.post<Category>(this.endpoint + '/create',categoryRegisterDTO);
  }
}
