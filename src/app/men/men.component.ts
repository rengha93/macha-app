import { Component, OnInit, Input,ViewChild, OnDestroy } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { NavigationStart } from '@angular/router';
import { ProductService, shirt } from '../shared/product.service';
import { Subject, Subscription, BehaviorSubject } from 'rxjs';
import { ShirtComponent } from '../men/shirt/shirt.component';
import { SearchPipe } from '../shared/search.pipe';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css'],
  providers:[ProductService]
})
export class MenComponent implements OnInit,OnDestroy {

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  @ViewChild(ShirtComponent) shirt;
  temp:any;
  msg:any;
  ab:any=[];
  aa: any;
  routesub: any;
  dataa:any;

  product:
  {
  name:string,
  price:string,
  description:string
};

  private pgeVal = new BehaviorSubject<string>("home");
  val = this.pgeVal.asObservable();


  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private productservice:ProductService) {
    }




  ngOnInit() {
      //var v = this.router.routerState.root.data['page']
    this.activatedRoute.url.subscribe(x=>{
    this.dataa = x
    console.log(x)})
    console.log("value of the data of Men's component after navigation:::::"+this.dataa);


    // this.activatedRoute.data.subscribe(x=>{
    //   this.aa = x;
    //   //this.dataa = this.aa.page;
    //   this.dataa = "shirt";
    //   console.log("data of Mens' compo::"+JSON.stringify(this.aa.page))
    // })
    //this.productservice.currentMessage.subscribe(message=>this.msg = message);
    this.productservice.changeMessage(this.dataa);
    this.setPage();
    this.getProduct()
    console.log("Men's Init executed::::::");
  }

  getProduct(){
    this.productservice.getProduct()
    .subscribe(res=>{
      this.product = res;
      console.log(this.product)
    },err=>{
      console.log("NOt able to fetch Men's product from server...")
    })
  }

    this.productservice.currentMessage.subscribe(x=>{
}
