import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signup:NgForm;
  scsmsg:any;

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  onSignup(form:NgForm){
    const email = this.signup.form.value.email;
    const password = this.signup.form.value.password;
    this.scsmsg=this.authService.signupUser(email,password)
    console.log("value returned after signup::::::"+ this.scsmsg);
    setTimeout(()=>{
        if(this.scsmsg = true){
          this.scsmsg=true;
        }
        this.signup.reset();
    },3000)
  }

}
