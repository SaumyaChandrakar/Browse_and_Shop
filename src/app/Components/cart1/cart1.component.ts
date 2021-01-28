import { Component, Input, OnInit } from '@angular/core';
import { CompTalkService } from 'src/app/comp-talk.service';
import { Pomodel } from 'src/app/pomodel';
import { ProductToCart } from 'src/app/product-to-cart';

@Component({
  selector: 'app-cart1',
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.less']
})
 export class Cart1Component implements OnInit 
 {
//export class Cart1Component{
  router:any;
  obj:ProductToCart;


  constructor(private com:CompTalkService) 
  {
    this.obj=new ProductToCart();
   }

  ngOnInit() 
  {
    this.com.op.subscribe((dt:ProductToCart)=>
    {
      console.log(dt);

      this.obj.pname=dt.pname;
      this.obj.image=dt.image;
      this.obj.price=dt.price;
      
    });
  }

}
