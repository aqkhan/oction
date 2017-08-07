import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SingleProductService {
  apiURL = 'http://localhost/json.php';
  product: any;
  constructor(public http: Http) {
    console.log('Single product Data service connected');
  }
  getSingleProduct(slug) {
    this.product = this.http.get(this.apiURL + '?slug=' + slug).map(res => res.json());
    return this.product;
  }
}
