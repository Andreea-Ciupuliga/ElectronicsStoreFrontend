import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registrationForm = this.fb.group({
    //scriem proprietatile pe care o sa le folosim

    userName: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.email],

    // address: new FormGroup({
    //   street: new FormControl(''),
    //   city: new FormControl(''),
    //   state: new FormControl(''),
    //   zip: new FormControl('')
    // })

  })

  value ='3';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  checkForm() {
    this.getFormValidationErrors(['userName', 'email'])
    console.log(this.registrationForm.value)
  }

  getFormValidationErrors(keys: any) {
    keys.forEach((key: any) => {
      const controlErrors = this.registrationForm.get(key)?.errors;
      if (controlErrors !== null)
        console.error(controlErrors);
    });
  }

}
