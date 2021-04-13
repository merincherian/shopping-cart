import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private baseUrl = "https://sheltered-springs-67444.herokuapp.com/";
  constructor(private http: HttpClient ) { }

  get_products(){
   return this.http.get(this.baseUrl+'product');
  }

  get_products_with_id(id)
  {  
    return this.http.get(this.baseUrl+'product/'+id);
  }

  add_product(product: any)
  {
    console.log(product);
    return this.http.post(this.baseUrl+'product/', product);
  }

  delete_product(id)
  {
    return this.http.delete(this.baseUrl+'product/'+id);
  }
    
}
