import { Component, OnInit } from '@angular/core';
import {SaleService} from '../sale.service';
import {Sales} from '../sales';
import {Location} from '@angular/common';
import {Products} from '../products';
import {ProductsService} from '../products.service';
import {PatternValidator} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications';


@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css'],
  providers: [SaleService, ProductsService, NotificationsService]
})
export class AddSaleComponent implements OnInit {
  id : number;
  prodId: number;
  prod_Id: string;
  date: Date;
  qty: number;
  stock: number;
  products : Products[];
  showtheform : boolean;
  constructor(private saleService: SaleService, private location: Location, private productService: ProductsService, private notiService: NotificationsService) {
    this.showtheform = false;
   }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  addSale(){
    const newSale={
      id: this.id,
      prodId: this.prodId,
      date: this.date,
      qty: this.qty
    }
    
    if (!newSale.id || !newSale.date || !newSale.qty)
    {
      const toast = this.notiService.error("Invalid Input", "You must fill all inputs", {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover:false,
        clickToClose: true
      });
    }
    else if (/((0[1-9])|(1[0-2]))\/(([0-2][0-9])|(3[0-1]))\/([1-2][0-9][0-9][0-9])/g.test(this.date.toString()))
    {
      this.saleService.addSale(newSale).subscribe(() => {
        
          });
          this.modifyProduct(this.prod_Id, this.stock);
    }
    else
    {
      const toast = this.notiService.error("Invalid Input", "Your date is in wrong pattern", {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover:false,
        clickToClose: true
      });
    }
  }

  getShowTheForm()
  {
    return this.showtheform;
  }

  reverseShowTheForm(product_ID, productID,stock)
  {
    this.showtheform = !this.showtheform;
    this.prodId = productID;
    this.prod_Id = product_ID;
    this.stock = stock;
  }

  modifyProduct(productID, productStock)
  {
    const selProduct={
      id: productID,
      stock: productStock - this.qty
    }
    this.productService.editProduct(selProduct.id, selProduct).subscribe(product => {
    });
  }

  public options = {
    position: ["bottom", "right"],
    timeOut:1000,
    lastOnBottom: true
  }

}
