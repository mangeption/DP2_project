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
import { TestComponentComponent } from './test-component/test-component.component';
import { SimpleNotificationsModule} from 'angular2-notifications';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

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
    SalesGraphComponent,
    TestComponentComponent,
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule, AppRoutingModule, ChartsModule,
    BrowserAnimationsModule,
    JasperoAlertsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
