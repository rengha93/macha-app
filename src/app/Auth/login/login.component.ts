import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signup:NgForm;
  loginflag;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.signup);
  }

  onSignin(form:NgForm){
    const email = this.signup.form.value.email;
    const password = this.signup.form.value.password;
    console.log("sign in values:"+email +" "+password);
    this.authService.signinUser(email,password);
    setTimeout(()=>{
          this.loginflag = this.authService.isAuth();
          console.log("the login is ::::"+this.loginflag);
    },2000)
  }

}
