import { Component, OnInit } from '@angular/core';
import { C2imodel } from '../c2imodel';
import { CompTalkService } from '../comp-talk.service';
import { AppServiceService } from '../Components/appservice.service';
import { ProductToCart } from '../product-to-cart';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.less']
})
export class OrderlistComponent implements OnInit {
  obj:ProductToCart;
  obj1:C2imodel;
  constructor(private com:CompTalkService, private ser:AppServiceService) { 
    this.obj=new ProductToCart(); 
    this.obj1=new C2imodel();}

  ngOnInit() {
    this.com.op.subscribe((dt:C2imodel)=>
  {
    console.log(dt);

    this.obj1.cid=dt.cid ;
    this.obj1.fullname=dt.fullname;
    this.obj1.address=dt.address;
    this.obj1.email=dt.email;
  });
  }

  
}
