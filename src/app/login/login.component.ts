import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      user: [''],
      pass: [''],
    })

  }

  get fields() { return this.loginForm.controls; }

  ngOnInit(): void {
  }


  public addNumbers(
    number1: number,
    number2: number = 2
  ): number {
    return number1 + number2;
  }

  public loginUser() {
    let responseLogin: String = "";
    console.log("llegue", this.fields.user.value);
    if (this.fields.user.value == "admin" && this.fields.pass.value == "admin") {
      responseLogin = "OK";
    } else {
      responseLogin = "FAIL";
    }
    //alert(responseLogin);
    return responseLogin;

  }

}
