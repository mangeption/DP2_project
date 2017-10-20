import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module'


import { AppComponent } from './app.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CheckStockComponent } from './check-stock/check-stock.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
import { SaleMonthComponent } from './sale-month/sale-month.component';
import { SaleWeekComponent } from './sale-week/sale-week.component';
import {SalesGraphComponent} from './sales-graph/sales-graph.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    AddProductComponent,
    EditProductComponent,
    CheckStockComponent,
    ListSaleComponent,
    AddSaleComponent,
    EditSaleComponent,
    SaleMonthComponent,
    SaleWeekComponent,
    SalesGraphComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule, ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
