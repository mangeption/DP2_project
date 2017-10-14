import { Component, OnInit } from '@angular/core';
import {SaleService} from '../sale.service';
import {Sales} from '../sales';
import {Location} from '@angular/common';
import {Products} from '../products';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css'],
  providers: [SaleService, ProductsService]
})
export class AddSaleComponent implements OnInit {
  id : number;
  prodId: number;
  date: Date;
  qty: number;
  stock: number;
  products : Products[];
  showtheform : boolean;
  constructor(private saleService: SaleService, private location: Location, private productService: ProductsService) {
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
    this.saleService.addSale(newSale).subscribe(() => {
  
    });
    this.modifyProduct(this.prodId, this.stock);
  }

  getShowTheForm()
  {
    return this.showtheform;
  }

  reverseShowTheForm(productID,stock)
  {
    this.showtheform = !this.showtheform;
    this.prodId = productID;
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

}
