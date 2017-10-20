import { Component, OnInit } from '@angular/core';
import {Sales} from '../sales';
import {SaleService} from '../sale.service';
import { Angular2Csv } from 'angular2-csv/Angular2-csv';

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
    var day = d.getDate();
    this.salesService.getSaleByMonth(n, y).subscribe(sales => this.salesmonth = sales);
  }

  GenerateCSV()
  {
    var data = new Array(this.salesmonth.length + 1);
    data[0] = {saleid: 'Sale ID', prodId: 'ProductID', date: 'Date', Quantity: 'Quantity'};
    for (var i = 0; i < this.salesmonth.length; i++)
    {
      data[i + 1] = {id: this.salesmonth[i].id, product: this.salesmonth[i].prodId, date:this.salesmonth[i].date, quantity: this.salesmonth[i].qty};
    }
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      useBom: true
    };
    new Angular2Csv(data, "MonthlySalesReport", options);
  }
}
