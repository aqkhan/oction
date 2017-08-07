import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {ProductsService} from "./services/products.service";
import {HttpModule} from "@angular/http";
import {SingleProductService} from "./services/single-product.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:slug', component: SingleProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SingleProductComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsService, SingleProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
