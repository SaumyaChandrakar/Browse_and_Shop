import { Component, OnInit } from '@angular/core';
import { Imodel } from '../imodel';
import { Omodel } from '../omodel';
import { AppServiceService } from '../appservice.service';


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.less']
})
export class RegComponent implements OnInit {


  event:any="status";
   
 
  obj1:Imodel;
  obj2:Omodel;
  
  abc:any="";
 
 
constructor(private so:AppServiceService)
  { 
    this.obj1=new Imodel();
    this.obj1.regid="";
    this.obj1.name="";
    this.obj1.emailid="";
    this.obj1.address="";
    this.obj1.mobileno="";
    this.obj1.password="";
   
  }

 sgg()
 {
   
   this.so.postFunctionCall(this.obj1).subscribe(
     (data:Omodel)=>{  
         
       if(data.status ==0)
       {
           this.event ="nothing to calcualte";
          
 
      }
 
      
       else
       {
       this.event =data.status  ;
    
       this.abc = "";
        
       alert("signup successfull")
  }
        
 }
 ,(error)=>{
   this.event ="ajax failed some issue in contacting";
   
 
 }
 );
 }

close()
{
  
}

  

  ngOnInit(): void {
  }

}
