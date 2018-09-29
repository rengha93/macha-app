import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { UrlSegment } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dataa: UrlSegment[];
  loginflg: boolean;
  //loginflg=true;
  aa:any;

  product:
  {
  name:string,
  price:string,
  description:string
};

  constructor(
  private authService:AuthService,
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private productservice:ProductService) { }

  ngOnInit() {
    // this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {
    // let root: ActivatedRoute = this.activatedRoute.root;
    // console.log("header URL:::"+this.router.routerState.snapshot.url.toString())});
    // var temp = this.router.routerState.snapshot.url.toString();
    // var temp1 = temp.split("/");
    // console.log("after spiltting"+temp1[1]);
    //this.getShirts();

    this.activatedRoute.data.subscribe(x=>{
      this.aa = x;
      console.log("data of header compo::"+JSON.stringify(this.aa))
      console.log("data of header compo::"+JSON.stringify(this.aa.breadcrumb))
    })
}
  onlogout(){
    this.authService.logout();
    this.loginflg = this.authService.isAuthenticated();
    console.log("after loggiing out flag value"+this.loginflg);
  }

  getShirts(){
    this.productservice.getShirt()
    .subscribe(res =>{
      this.product = res;
      console.log(this.product);
      // console.log(this.product[0].name = res[0].name);
      // console.log(this.product[0].name = res[0].price);
      // console.log(this.product[0].name = res[0].description);
    },err=>{
    console.log("failed to fetch data from API...")
  })
  }

}
