import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
  token: string;
  successmsg:boolean;
  isAuthFlag:boolean;

  constructor(private router:Router){}

  signupUser(email: string,password: string):any{
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(resolve =>{
          console.log('users added..');
          //this.router.navigate(['login']);
          this.successmsg=true;
          console.log("auth after setting success msg:"+this.successmsg)
          return this.successmsg;
        }).catch(
          error =>console.log(error));
  }

  signinUser(email: string,password: string){
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(response =>{
      this.isAuthFlag = true;
      this.router.navigate(['/']);
      firebase.auth().currentUser.getIdToken().then((token:string) => {
        this.token = token;
//        this.isAuthFlag = true;
      })
    }
  ).catch(error=>{
    this.isAuthFlag = false;
    console.log(error)
  });
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }


  getToken(){
      firebase.auth().currentUser.getIdToken()
      .then((token:string) => {
        this.token = token;
        console.log("tokennnn"+this.token);
      });
      return this.token;
  }

  isAuthenticated(){
    return this.token != null;
  }

  isAuth(){
      return this.isAuthFlag;
  }
}
