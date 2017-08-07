import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params, NavigationEnd} from '@angular/router';
import { SingleProductService } from '../../services/single-product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {
  slug: string;
  product: any = {
    id: 1,
    name: 'Title',
    img: 'assets/images/oction-alt-white-1.png',
    price: 99,
    date_time: '7/7/2017',
    description: 'Loading description'
  };
  constructor(private activatedRoute: ActivatedRoute, private singleProduct: SingleProductService, private router: Router) {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.slug = params['slug'];
    });
    this.singleProduct.getSingleProduct(this.slug).subscribe((product) => {
      this.product = product;
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

}

interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  date_time: string;
  description: string;
}
