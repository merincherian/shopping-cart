import { Component, OnInit } from '@angular/core';
import { promise } from 'selenium-webdriver';
import {ProductService} from '../product.service';



@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss']
})



export class ProductlistingComponent implements OnInit {

  constructor(private product_service : ProductService) { }

  products: any = [];
  parent_load: boolean = true;

  ngOnInit(): void 
  {
    
    this.product_service.get_products().subscribe(
     (res) => {
       this.products = res;
       this.parent_load = false;
     }
    );
  }

  async delete_product(id)
  {
    let value = confirm("Are you sure you want to remove this product?");

    if(value==true)
    {

    // console.log(id);
    //  let responce = this.product_service.delete_product(id);
     
    //  await responce.subscribe(value =>
    //   {
    //     console.log(value);
    //   });

    //The above code is not asynchronous. And async and await cannot be used with the above code, since this.http.get originally does not return a promise object
    //Hence, topromise(), is used in the service side, to return a promise object, with which async await and .then(),catch() is be used. 

    let promise_response = this.product_service.delete_product(id);

    await promise_response.then((res)=>{
      console.log("Responce:- "+res);
    }).catch((err) => console.log(err));
    ;

    location.reload(); //To reload/refresh the current page. Location is the Dom object having inof about current URL
    }
    else
    {
      console.log("NOT OKAY");
    }
    
  }
}
