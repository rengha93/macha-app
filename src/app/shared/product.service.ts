import { Injectable,OnDestroy } from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { from, of, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { Output } from '@angular/core';

// export interface shirt{
//   name:String;
//   price:String;
//   description:String;
// }

export interface shirt{
    name:string;
    price:string;
    description:string;
};

@Injectable()
export class ProductService implements OnDestroy{



  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();


  constructor(private http:HttpClient) { }

  //calls when behvior changes
  changeMessage(message:string){
  this.messageSource.next(message);
}
  getShirt(){
    const response = this.http.get<shirt>('http://localhost:3000/api/men?category=shirt').pipe(map(res=>res))
    return response;
  }

  getBooks(){
    const response = this.http.get<shirt>('http://localhost:3000/api/books').pipe(map(res=>of(res)))
    return response;
  }

  getTrouser(){
    const response = this.http.get<shirt>('http://localhost:3000/api/men?category=trouser').pipe(map(res=>res))
    return response;
  }
  getShoe(){
    const response = this.http.get<shirt>('http://localhost:3000/api/men?category=shoe').pipe(map(res=>res))
    return response;
  }
  getProduct(){
    const response = this.http.get<shirt>('http://localhost:3000/api/men').pipe(map(res=>res))
    return response;
  }
  ngOnDestroy(): void {
    
  }

}
