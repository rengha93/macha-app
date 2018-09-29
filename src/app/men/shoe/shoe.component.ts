import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.css']
})
export class ShoeComponent implements OnInit {

  aa: any;
  product:{
    name:string,
    price:string,
    description:string
  };

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private productservice:ProductService
  ) { }

  ngOnInit() {

    this.activatedRoute.url.subscribe(x=>{
    this.aa = x
    console.log(x)})
    console.log("value of the data of Shoe component after navigation:::::"+this.aa);

    this.productservice.changeMessage(this.aa);
    this.getShoe()
    console.log("Shoe Init executed::::::");
  }


  getShoe(){
    this.productservice.getShoe()
    .subscribe(res =>{
      this.product = res;
      console.log(this.product);
    })
  }

}
