import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/product.service';
import { Router, UrlSegment } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trouser',
  templateUrl: './trouser.component.html',
  styleUrls: ['./trouser.component.css']
})
export class TrouserComponent implements OnInit {

  product:{
    name:string,
    price:string,
    description:string
  };
  aa:any;
  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private productservice:ProductService
  ) { }

  ngOnInit() {

    this.activatedRoute.url.subscribe(x=>{
    this.aa = x
    console.log(x)})
    console.log("value of the data of Shirts component after navigation:::::"+this.aa);

    this.productservice.changeMessage(this.aa);
    this.getTrouser()
    console.log("Trouser Init executed::::::");
  }

  getTrouser(){
    this.productservice.getTrouser()
    .subscribe(res =>{
      this.product = res;
      console.log(this.product);
    })
  }
}
