import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductlistingComponent } from './productlisting/productlisting.component';

const routes: Routes = [
  {path: '', component: ProductlistingComponent},
  {path: 'product', component: ProductlistingComponent},
  {path: 'add-to-cart', component: AddToCartComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
