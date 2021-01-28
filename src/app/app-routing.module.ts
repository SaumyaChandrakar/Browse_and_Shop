import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/Shared/navigation/navigation.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { ClothingComponent } from './Components/Categories/clothing/clothing.component';
import { AccessoriesComponent } from './Components/Categories/accessories/accessories.component';
import { ElectronicsComponent } from './Components/Categories/electronics/electronics.component';

import { HomeComponent } from './home/home.component';
import { Cart1Component } from './Components/cart1/cart1.component';
import { Cart2Component } from './Components/cart2/cart2.component';
import { L1Component } from './Components/l1/l1.component';
import { RegComponent } from './Components/reg/reg.component';


const routes: Routes =[{path: '', component: L1Component },
  { path: 'Home', component: HomeComponent },{path:'App',component:AppComponent}, {path:'cart1',component:Cart1Component},{path:'cart2',component:Cart2Component},{path:'Electronics',component:ElectronicsComponent},
  {path:'Accessories',component:AccessoriesComponent},{path:'Clothing',component:ClothingComponent},{path:'Footer',component:FooterComponent},{path:'Navigation',component:NavigationComponent}
  ,{path:'l1',component:L1Component},{path:'reg',component:RegComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }