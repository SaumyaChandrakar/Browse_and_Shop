import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Shared/header/header.component';
import { NavigationComponent } from './Components/Shared/navigation/navigation.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ClothingComponent } from './Components/Categories/clothing/clothing.component';
import { AccessoriesComponent } from './Components/Categories/accessories/accessories.component';
import { ElectronicsComponent } from './Components/Categories/electronics/electronics.component';
import { ShoppingCartComponent } from './Components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ClothingComponent,
    AccessoriesComponent,
    ElectronicsComponent,
    ShoppingCartComponent,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
