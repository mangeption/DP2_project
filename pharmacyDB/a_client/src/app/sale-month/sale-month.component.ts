import { Component, OnInit } from '@angular/core';
import {Sales} from '../sales';
import {SaleService} from '../sale.service';


@Component({
  selector: 'app-sale-month',
  templateUrl: './sale-month.component.html',
  styleUrls: ['./sale-month.component.css'],
  providers: [SaleService]
  
})
export class SaleMonthComponent implements OnInit {

  salesmonth: Sales[];
  constructor(private salesService: SaleService) { }

  ngOnInit() {
    var d = new Date();
    var n = d.getMonth();
    var y = d.getFullYear();
    console.log(n);
    this.salesService.getSaleByMonth(n - 1, y).subscribe(sales => this.salesmonth = sales);
  }

}
