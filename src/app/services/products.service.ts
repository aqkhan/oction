import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  apiURL = 'http://ec2-34-209-107-28.us-west-2.compute.amazonaws.com/json.php';
  products: any;
  constructor(public http: Http) {
    console.log('Data service connected');
  }
  getAllProducts() {
    this.products = this.http.get(this.apiURL).map(res => res.json());
    return this.products;
  }
}
