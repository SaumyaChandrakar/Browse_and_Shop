import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/Forms';
import { AppComponent } from './app.component';

import { NavigationComponent } from './Components/Shared/navigation/navigation.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ClothingComponent } from './Components/Categories/clothing/clothing.component';
import { AccessoriesComponent } from './Components/Categories/accessories/accessories.component';
import { ElectronicsComponent } from './Components/Categories/electronics/electronics.component';
import {  HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { Cart1Component } from './Components/cart1/cart1.component';
import { Cart2Component } from './Components/cart2/cart2.component';
import { RegComponent } from './Components/reg/reg.component';
import { L1Component } from './Components/l1/l1.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ClothingComponent,
    AccessoriesComponent,
    ElectronicsComponent,
    HomeComponent,
   Cart1Component,
    Cart2Component,
    RegComponent,
    
    L1Component
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
