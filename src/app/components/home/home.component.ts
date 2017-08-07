import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Products;
  constructor(private productsService: ProductsService) {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  ngOnInit() {
  }

}

interface Products {
  id: number;
  name: string;
  img: string;
  price: number;
  date_time: string;
  description: string;
}
