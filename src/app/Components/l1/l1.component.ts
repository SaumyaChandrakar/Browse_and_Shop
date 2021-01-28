import { Component, OnInit } from '@angular/core';
import { Limodel } from 'src/app/limodel';
import { Lomodel } from 'src/app/lomodel';
import { AppServiceService } from '../appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-l1',
  templateUrl: './l1.component.html',
  styleUrls: ['./l1.component.less']
})


  export class L1Component  {

    event:any="";
     
   
    obj1:Limodel;
    obj2:Lomodel;
    
  
   
  constructor(private so:AppServiceService,private route: Router,)
    { 
      this.obj1=new Limodel();
   
  
    }
    Login()
    {
      console.log(this.obj1);
      this.so.CheckLogin(this.obj1).subscribe(
        (data:Lomodel)=>{  
            console.log(data.status);
            console.log(data.message);
          if(data.status ==0)
          {
              this.event =data.message
            
          }
          else if(data.status==-1)
          {
          this.event =data.message;
          }
          else
          { 
            this.event=data.message;
            this.route.navigate(['/Home'])
          }
           
         
     }
      )     
    
     ,(error)=>{
      this.event ="ajax failed some issue in contacting";
      };
    
   
    }
   
   
   
  

  }

