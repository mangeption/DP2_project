import { Component, OnInit } from '@angular/core';
import {Sales} from '../sales';
import {SaleService} from '../sale.service';

@Component({
  selector: 'app-sale-week',
  templateUrl: './sale-week.component.html',
  styleUrls: ['./sale-week.component.css'],
  providers: [SaleService]
})
export class SaleWeekComponent implements OnInit {

  salesweek: Sales[];  
  constructor(private salesService: SaleService) { }

  ngOnInit() {
    var d = new Date();
    var n = d.getMonth();
    var y = d.getFullYear();
    var w = d.getDay()/7;
    console.log(n);
    this.salesService.getSaleByWeek(n, y, w).subscribe(sales => this.salesweek = sales);
  }

}
