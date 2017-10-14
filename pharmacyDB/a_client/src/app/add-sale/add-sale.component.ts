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
  products : Products[];
  showtheform : boolean;
  constructor(private saleService: SaleService, private location: Location, private productService: ProductsService) {
    this.showtheform = false;
   }

  ngOnInit() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  addProduct(){
    const newSale={
      id: this.id,
      prodId: this.prodId,
      date: this.date,
      qty: this.qty
    }
    this.saleService.addSale(newSale).subscribe(() => {
      this.location.back();
    });
  }

  getShowTheForm()
  {
    console.log(this.showtheform);
    return this.showtheform;
  }

  reverseShowTheForm()
  {
    console.log("Reverse");
    this.showtheform = ! this.showtheform;
  }

}
