import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module'


import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ListProductsComponent,
    AddProductComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
