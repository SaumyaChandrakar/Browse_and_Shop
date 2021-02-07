import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Omodel } from './omodel';
import { Imodel } from './imodel';
import { C2imodel } from '../c2imodel';
import { C2omodel } from '../c2omodel';
import { Pomodel } from '../pomodel';
import { Pimodel } from '../pimodel';
import { Lomodel } from '../lomodel';
import { Limodel } from '../limodel';
import { ProductToCart } from '../product-to-cart';
import { Carttodb } from '../carttodb';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
 
  constructor(private y:HttpClient) { }

 
  // postFunctionCall(x:Imodel):Observable<Omodel>
  // {
  //   console.log("hey this is post at work")
  //   let url:string ="http://localhost:8081/insert";
  //   return this.y.post<Omodel>(url,x);


  // }

  cartToDb(x:ProductToCart):Observable<Carttodb>
  {
    console.log("hey this is post at work")
    let url:string ="http://localhost:6080/acart";
    return this.y.post<Carttodb>(url,x);
  }

  postFunctionCall(x:Imodel):Observable<Omodel>
  {
    console.log("hey this is post at work")
    let url:string ="http://localhost:6080/arreg";
    return this.y.post<Omodel>(url,x);
  }

  
  postcart2functionCall(x:C2imodel):Observable<C2omodel>
  {
    console.log("hey this is post at work")
    let url:string ="http://localhost:6080/armcart";
    return this.y.post<C2omodel>(url,x);
  }

  GetListOfProduct(cid:Pimodel):Observable<Pomodel[]>
  {
    console.log("product service is working");
    console.log(cid);
    let url:string="http://localhost:6080/ms" ;
    return this.y.post<Pomodel[]>(url,cid);
  }

CheckLogin(x:Limodel):Observable<Lomodel>
{
  console.log("hey login worked")
  let url:string ="http://localhost:6080/login";
  return this.y.post<Lomodel>(url,x);
}
}