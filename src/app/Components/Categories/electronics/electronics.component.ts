import { Component, OnInit } from '@angular/core';
import { CompTalkService } from 'src/app/comp-talk.service';
import { Pimodel } from 'src/app/pimodel';
import { Pomodel } from 'src/app/pomodel';
import { ProductToCart } from 'src/app/product-to-cart';
import { AppServiceService } from '../../appservice.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.less']
})
export class ElectronicsComponent implements OnInit {


  obj:Pomodel[];
  obj1:Pimodel;
  ptc:ProductToCart;
constructor(private cs:AppServiceService,private com:CompTalkService) 
{ 
  this.obj1 = new Pimodel('c2');
  this.ptc=new ProductToCart();
  this.cs.GetListOfProduct(this.obj1).subscribe
  (
    (data:Pomodel[])=>
    {
      console.log(data);
      this.obj = data; 
    }
  )
}

  ngOnInit() {
  }
  addtocart(pname:any,image:any,price:any)
  //addtocart()
  { 

     console.log(pname+" "+image+" "+price);
     this.ptc.pname=pname;
     this.ptc.price=price;
     this.ptc.image=image;
   // console.log(this.obj.pname);
  //  this.com.clothSendToCart(this.obj);
  this.com.clothSendToCart(this.ptc);

  }
  

}
