import { Component, OnInit } from '@angular/core';
import {SaleService} from '../sale.service';
import {Sales} from '../sales';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-sale',
  templateUrl: './edit-sale.component.html',
  styleUrls: ['./edit-sale.component.css'],
  providers: [SaleService]
})
export class EditSaleComponent implements OnInit {

  id : number;
  prodId: number;
  date: Date;
  qty: number;
  
  constructor(private saleService: SaleService, private location : Location, 
    private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = +params['id'];});
  }
 
  editSale(){
    const selSale={
      id: this.id,
      name: this.prodId,
      price: this.date,
      stock: this.qty
    }
    this.saleService.editSale(selSale.id, selSale).subscribe(sale => {
      this.location.back();
    });
  }
  goBack(){
    this.location.back();
  }

}
