import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit 
{
  product_details: any;

  constructor(private activated_route : ActivatedRoute, private product_service : ProductService) { }

  ngOnInit(): void {
    let id;

    this.activated_route.params.subscribe((res)=>{
      id = res.id; //Note:- res is an object => {id: 5}
    });


    this.product_service.get_products_with_id(id).subscribe( (res) => {
      this.product_details = res;
      console.log(res);
    })
    


  }

}
