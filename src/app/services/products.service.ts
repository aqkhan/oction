import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {
  apiURL = 'http://localhost/json.php';
  products: any;
  constructor(public http: Http) {
    console.log('Data service connected');
  }
  getAllProducts() {
    this.products = this.http.get(this.apiURL).map(res => res.json());
    return this.products;
  }
}
