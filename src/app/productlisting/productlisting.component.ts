import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';



@Component({
  selector: 'app-productlisting',
  templateUrl: './productlisting.component.html',
  styleUrls: ['./productlisting.component.scss']
})



export class ProductlistingComponent implements OnInit {

  constructor(private product_service : ProductService) { }

  products: any = [];

  ngOnInit(): void 
  {
    
    this.product_service.get_products().subscribe(
     (res) => {
       this.products = res;
       //console.log(this.products);
     }
    );
  }

  delete_product(id)
  {
    let value = confirm("Are you sure you want to remove this product?");

    if(value==true)
    {
      console.log(id);
      this.product_service.delete_product(id).subscribe((res)=>
      {
        console.log(res);
      });

      location.reload(); //To reload/refresh the current page. Location is the Dom object having inof about current URL
    }
    else
    {
      console.log("NOT OKAY");
    }
    
  }
}
