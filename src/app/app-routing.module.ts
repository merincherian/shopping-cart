import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';

const routes: Routes = [
  {path: 'product', component: ProductlistingComponent},
  {path: 'add-to-cart', component: AddToCartComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: '', redirectTo: 'product', pathMatch :'prefix'},
   //^ This should be placed after declaring all the paths, else (if places at first )it wont work like its supposed to                                                         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
