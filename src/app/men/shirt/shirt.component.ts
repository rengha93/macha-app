import { Component, OnInit, Output ,EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {
  @Output() eve = new EventEmitter<string>();
  @Input() message:string;
//  message:string;

  aa: any;
  val:any;
  product:{
    name:string,
    price:string,
    description:string
  };


  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private productservice:ProductService) {
        console.log("shirt const Init executed::::::");

    }

  ngOnInit() {

    this.activatedRoute.url.subscribe(x=>{
    this.aa = x
    console.log(x)})
    console.log("value of the data of Shirts component after navigation:::::"+this.aa);

    // this.activatedRoute.data.subscribe(x=>{
    //   this.aa = x;
    //   this.val = this.aa.page;
    //   console.log("data of Shirt compo::"+JSON.stringify(this.aa.page))
    // })
    // this.productservice.currentMessage.subscribe(message=>this.message = message);
    //this.newMsg();
    //this.eve.emit(this.aa.page);
    this.productservice.changeMessage(this.aa);
    this.getShirts()
    console.log("shirt Init executed::::::");
  }

  getShirts(){
    this.productservice.getShirt()
    .subscribe(res =>{
      this.product = res;
      console.log(this.product);
    })
  }

  newMsg(){
    this.productservice.changeMessage(this.aa.page);
  }
}
