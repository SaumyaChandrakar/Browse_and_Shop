import { Component, OnInit } from '@angular/core';
import { C2imodel } from 'src/app/c2imodel';
import { C2omodel } from 'src/app/c2omodel';
import { CompTalkService } from 'src/app/comp-talk.service';
import { ProductToCart } from 'src/app/product-to-cart';
import { AppServiceService } from '../appservice.service';

@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.less']
})
export class Cart2Component implements OnInit {

 
  obj:ProductToCart;

  event:any="status";
   
 
  obj1:C2imodel;
  obj2:C2omodel;
  
  abc:any="";
 
 
constructor(private so:AppServiceService,private com:CompTalkService,)
  { 
    this.obj1=new C2imodel();
    this.obj1.cid="";
    this.obj1.fullname="";
    this.obj1.email="";
    this.obj1.address="";
    this.obj1.city="";
    this.obj1.cvv="";
    this.obj1.expirymonth="";
    this.obj1.creditcardno="";
    this.obj1.expiryyear="";
    this.obj1.nameoncard="";
    this.obj1.state="";
    this.obj1.zip="";
  }

cmsg()
{
  
  this.so.postcart2functionCall(this.obj1).subscribe(
    (data:C2omodel)=>{  
        
      if(data.status ==0)
      {
          this.event ="nothing to calcualte";
         

     }

     
      else
      {
      this.event =data.status  ;
   
      this.abc = "";
       
      // alert("your order is confirmed")
 }
 this.com.sendDetailToOrder(this.obj1);  
    }
,(error)=>{
  this.event ="ajax failed some issue in contacting";
  

}
);
}


  

  ngOnInit() {
  }

}
