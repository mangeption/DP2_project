import { Component, OnInit } from '@angular/core';
import {SaleService} from '../sale.service';
import {Sales} from '../sales';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-sale',
  templateUrl: './add-sale.component.html',
  styleUrls: ['./add-sale.component.css'],
  providers: [SaleService]
})
export class AddSaleComponent implements OnInit {
  id : number;
  prodId: number;
  date: Date;
  qty: number;
  constructor(private saleService: SaleService, private location: Location) { }

  ngOnInit() {
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

}
