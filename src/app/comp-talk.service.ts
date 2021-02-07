import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompTalkService
{
  private es = new BehaviorSubject<any>("Sending argument");
  op = this.es.asObservable();

  constructor() { }
/* 
  clothSendToCart(z:any)
  {
    this.es.next(z);
    console.log(z);
  } */
  clothSendToCart(ptc:any)
  {
    this.es.next(ptc);
    console.log(ptc);
}
sendProdToOrder(z:any)
{
  this.es.next(z);
}
sendDetailToOrder(z:any)
{
  this.es.next(z);
}
}
