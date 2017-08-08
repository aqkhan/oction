import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationEnd } from '@angular/router';
import { SingleProductService } from '../../services/single-product.service';
import { Observable } from "rxjs/Rx";


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {
  slug: string;
  product: Product = {
    id: 1,
    name: 'Title',
    img: 'assets/images/oction-alt-white-1.png',
    price: 99,
    date_time: '2017-08-09',
    description: 'Loading description'
  };

  public _trialEndsAt;

  public _diff: number;

  public _days: number;

  public _hours: number;

  public _minutes: number;

  public _seconds: number;

  constructor(private activatedRoute: ActivatedRoute, private singleProduct: SingleProductService, private router: Router) {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.slug = params['slug'];
    });
    this.singleProduct.getSingleProduct(this.slug).subscribe((product) => {
      this.product = product;
      this._trialEndsAt = this.product.date_time;
    });
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    Observable.interval(1000).map((x) => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    }).subscribe((x) => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });

  }

  getDays(t){
    return Math.floor( t/(1000*60*60*24) );
  }

  getHours(t){
    return Math.floor( (t/(1000*60*60)) % 24 );
  }

  getMinutes(t){
    return Math.floor( (t/1000/60) % 60 );
  }

  getSeconds(t){
    return Math.floor( (t/1000) % 60 );
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
