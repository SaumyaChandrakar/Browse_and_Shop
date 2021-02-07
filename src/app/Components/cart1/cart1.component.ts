import { Component, Input, OnInit } from '@angular/core';
import { Carttodb } from 'src/app/carttodb';
import { CompTalkService } from 'src/app/comp-talk.service';
import { Pomodel } from 'src/app/pomodel';
import { ProductToCart } from 'src/app/product-to-cart';
import { AppServiceService } from '../appservice.service';

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
 objs:Carttodb;
  cartlist: ProductToCart[];
  totalSum: number = 0;
 

  event:any="status";
  abc:any="";
  so: any;


  constructor(private com:CompTalkService, private ser:AppServiceService) 
  {
    this.obj=new ProductToCart();
    this.obj.pname="";
    this.obj.price="";
    this.obj.image="";
    this.obj.quantity="";
   }

//   ngOnInit() 
//   {
//     this.com.op.subscribe((dt:ProductToCart)=>
//     {
//       console.log(dt);

//       this.obj.pname=dt.pname;
//       this.obj.image=dt.image;
//       this.obj.price=dt.price;
      
//     });
//   }

// }


cm()
{
  
  this.ser.cartToDb(this.obj).subscribe(
    (data:Carttodb)=>{  
        
      if(data.status ==0)
      {
          this.event ="nothing to calcualte";
         

     }

     
      else
      {
      this.event =data.status  ;
   
      this.abc = "";
       
     //  alert("your order is confirmed")
 }
 this.com.sendProdToOrder(this.obj);

       
}
,(error)=>{
  this.event ="ajax failed some issue in contacting";
  

}
);
}




ngOnInit() 
{
 this.com.op.subscribe((dt:ProductToCart)=>
 {
   console.log(dt);

   this.obj.pname=dt.pname;
   this.obj.image=dt.price;
   this.obj.price=dt.image;
   this.obj.quantity=dt.quantity;
   
 

 this.cartlist.forEach(value => {
   this.totalSum = this.totalSum + (value.quantity * value.price);
 });
});
}

}
