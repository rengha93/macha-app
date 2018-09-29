import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { NavigationEnd } from '@angular/router';
import { RouterEvent } from '@angular/router';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { filter, mergeMap ,takeUntil, map ,startWith, merge, first, last, switchMap, tap, flatMap } from 'rxjs/operators';
import { of, concat ,NEVER, range, interval, pipe, timer, from, throwError, Subject, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/internal/operators/take';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductService } from './shared/product.service';

interface st {
    name:String,
    price:String,
    description:String
}
interface gn{
  name:String
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'macha-app';
  name:String;
  price:String
  desc:String

  constructor(  private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
  private productservice:ProductService){
    console.log("app constructor called");
  }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("app OnInit Called")
    firebase.initializeApp({
          apiKey: "AIzaSyAaRzdIMLXeHWLhJjGWqiZpbPh-XdyN1hQ",
          authDomain: "machaapp-6a634.firebaseapp.com",
    });




  //creating an observable.
  //   var observable = Observable.create((observer:any)=>{
  //     observer.next('Hello guys');
  //     observer.next('Hello people');
  //     observer.complete();
  //     observer.next('bye');
  // })
  //
  // observable.subscribe(
  //   (x)=>console.log(x),
  //   (error:any)=>console.log("error"),
  //   ()=>console.log("printing comppleted")
  // );

    //trying to get the values from db   /api/shirt
  //   this.http.post<st>('http://localhost:3000/api/shirt',
  // {
  //   name:"LP",
  //   price:"1000",
  //   description:"Checked Shirt"
  // })
  //   .subscribe(res=>{
  //   console.log(res)
  //   },err=>{
  //   console.log("error occured!");
  // });

  //  this.http.get('http://localhost:3000/api/shirt').pipe(map(res:Response)=>res.json()).subscribe(res =>console.log(res));
  //   .subscribe(res=>{
  //   console.log(res)
  //   },err=>{
  //   console.log("error occured!");
  // });
}

}
