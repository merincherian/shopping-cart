import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})

export class AddToCartComponent implements OnInit {

  constructor(private product_service: ProductService, private router: Router, private route: ActivatedRoute) { }

  //Refer documentation for syntax of formgroup, validators etc.

  shopping_form = new FormGroup({
    title: new FormControl('', [Validators.required] ),
    imageUrl: new FormControl('', [Validators.required] ),
    description: new FormControl('', [Validators.required] )
  });

  ngOnInit(): void {
  }

  onSubmit()
  {
    //console.log(this.shopping_form.value);
    this.product_service.add_product(this.shopping_form.value).subscribe(
      (res) => {
        console.log(res);
      }
    );

    this.router.navigate(['']);
  }

}
