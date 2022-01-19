import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UserRegisterDTO} from "../../data/DTOs/user-register-dto";
import {ProductService} from "../../core/services/ProductService/product.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../core/services/UserService/user.service";



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public user: UserRegisterDTO = {FirstName: "", LastName: "", Email: "",Username:"",PasswordHash:""};
  public users:UserRegisterDTO[]=[];

  registrationForm = this.fb.group({
    //scriem proprietatile pe care o sa le folosim

    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Email: ['', Validators.email],
    Username: ['', Validators.required],
    PasswordHash: ['', Validators.required],

  })

  constructor(private fb: FormBuilder, private readonly userService: UserService, private readonly httpClient : HttpClient) { }

  ngOnInit(): void {
  }

  submit():void{

    let userRegisterDto = this.registrationForm.value;
    this.registrationForm.reset();
    this.userService.createUser(userRegisterDto).subscribe((data: any) => {
      this.users=data;
    });


  }

}
