import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Omodel } from './omodel';
import { Imodel } from './imodel';
import { C2imodel } from '../c2imodel';
import { C2omodel } from '../c2omodel';
import { Pomodel } from '../pomodel';
import { Pimodel } from '../pimodel';

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


  postFunctionCall(x:Imodel):Observable<Omodel>
  {
    console.log("hey this is post at work")
    let url:string ="http://localhost:6070/ar";
    return this.y.post<Omodel>(url,x);
  }

  
  postcart2functionCall(x:C2imodel):Observable<C2omodel>
  {
    console.log("hey this is post at work")
    let url:string ="http://localhost:6070/arcart2";
    return this.y.post<C2omodel>(url,x);
  }

  GetListOfProduct(cid:Pimodel):Observable<Pomodel[]>
  {
    console.log("product service is working");
    console.log(cid);
    let url:string="http://localhost:6070/ms" ;
    return this.y.post<Pomodel[]>(url,cid);
  }
}