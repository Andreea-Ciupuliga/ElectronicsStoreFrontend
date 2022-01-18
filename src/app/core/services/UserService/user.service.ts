import { Injectable } from '@angular/core';
import {ApiService} from "../api/api.service";
import {User} from "../../../data/interfaces/user";
import {UserRegisterDTO} from "../../../data/DTOs/user-register-dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly endpoint = '/User';
  constructor(private apiService : ApiService) { }

  getAllUsers(){
    return this.apiService.get(this.endpoint + '/allUsers/');
  }


  getUserByUserId(id: string){
    return this.apiService.get<User>(this.endpoint + '/byId/'+id);
  }

  deleteById(id: string){
    return this.apiService.delete(this.endpoint+'/delete/'+id);
  }

  createUser(userRegisterDTO: UserRegisterDTO) {
    return this.apiService.post<User>(this.endpoint + '/createUser',userRegisterDTO);
  }
}
