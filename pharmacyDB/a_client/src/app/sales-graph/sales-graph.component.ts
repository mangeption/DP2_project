import { Component, OnInit } from '@angular/core';
import {Sales} from '../sales';
import {Products} from '../products';
import {SaleService} from '../sale.service';
import {ProductsService} from '../products.service';
@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.css'],
  providers: [SaleService, ProductsService]
})
export class SalesGraphComponent implements OnInit {
  public now = new Date();
  products: Products[];
  sales1: Sales[];
  sales2: Sales[];
  sales3: Sales[];
  sales4: Sales[];
  sales5: Sales[];
  sales6: Sales[];
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor(private salesService:SaleService, private productsService:ProductsService) { 
    this.lineChartData[0] = {data: new Array(6), label:'Series'};
  }

  ngOnInit() {
    this.productsService.getProducts().subscribe(res=>this.products = res);
    this.salesService.getSaleByMonth(this.now.getMonth() - 5, this.now.getFullYear()).subscribe(result =>{
      this.sales1 = result;
    }); 
    this.salesService.getSaleByMonth(this.now.getMonth() - 4, this.now.getFullYear()).subscribe(result =>{
      this.sales2 = result;
    });  
    this.salesService.getSaleByMonth(this.now.getMonth() - 3, this.now.getFullYear()).subscribe(result =>{
      this.sales3 = result;
    });    
    this.salesService.getSaleByMonth(this.now.getMonth() - 2, this.now.getFullYear()).subscribe(result =>{
      this.sales4 = result;
    });    
    this.salesService.getSaleByMonth(this.now.getMonth() - 1, this.now.getFullYear()).subscribe(result =>{
      this.sales5 = result;
    });    
    this.salesService.getSaleByMonth(this.now.getMonth() - 0, this.now.getFullYear()).subscribe(result =>{
      this.sales6 = result;
    });
    
  }

  generateSales()
  {
    // console.log(this.products);
    let _lineChartData = new Array(1);
    _lineChartData[0] = {data: new Array(6), label:'Series'};
    _lineChartData[0].data[0] = this.revenueMonth(this.sales1);
    _lineChartData[0].data[1] = this.revenueMonth(this.sales2);
    _lineChartData[0].data[2] = this.revenueMonth(this.sales3);
    _lineChartData[0].data[3] = this.revenueMonth(this.sales4);
    _lineChartData[0].data[4] = this.revenueMonth(this.sales5);
    _lineChartData[0].data[5] = this.revenueMonth(this.sales6);
    this.lineChartData = _lineChartData;
  }

  revenueMonth(sales:Sales[])
  {
       var revenue = 0;
       console.log(this.products);       
       for (var i = 0; i < sales.length;i++)
       {
         var prodId = sales[i].prodId;
         for (var j = 0; j < this.products.length; j++)
            if (this.products[j].id == prodId)
            {
              revenue += sales[i].qty * this.products[j].price;
              break;
            }
       }
      //  console.log(revenue); 
      return revenue;      
  }

  
  public lineChartData:Array<any> = new Array(1);
  //   // {data: [this.revenueMonth(this.sales1), this.revenueMonth(this.sales2), this.revenueMonth(this.sales3), this.revenueMonth(this.sales4), 
  //   //   this.revenueMonth(this.sales5), this.revenueMonth(this.sales6)], label: 'Series A'}
  //   // {month: this.months[this.now.getMonth() - 5], revenue: this.revenueMonth(this.now.getMonth() - 5, this.now.getFullYear())}, 
  //   // {month: this.months[this.now.getMonth() - 4], revenue: this.revenueMonth(this.now.getMonth() - 4, this.now.getFullYear())},
  //   // {month: this.months[this.now.getMonth() - 3], revenue: this.revenueMonth(this.now.getMonth() - 3, this.now.getFullYear())},
  //   // {month: this.months[this.now.getMonth() - 2], revenue: this.revenueMonth(this.now.getMonth() - 2, this.now.getFullYear())},
  //   // {month: this.months[this.now.getMonth() - 1], revenue: this.revenueMonth(this.now.getMonth() - 1, this.now.getFullYear())},
  //   // {month: this.months[this.now.getMonth()], revenue: this.revenueMonth(this.now.getMonth(), this.now.getFullYear())}    

  public lineChartLabels:Array<any> = [this.months[this.now.getMonth() - 5], this.months[this.now.getMonth() - 4], this.months[this.now.getMonth() - 3], this.months[this.now.getMonth() - 2], this.months[this.now.getMonth() - 1], this.months[this.now.getMonth()]];
  public lineChartOptions:any = {
       responsive: true
  };
   public lineChartColors:Array<any> = [
      { // grey
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: 'rgba(148,159,177,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)'
     }
    ];

  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // lineChart
  // public lineChartData:Array<any> = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartOptions:any = {
  //   responsive: true
  // };
  // public lineChartColors:Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   }
  // ];
  // public lineChartLegend:boolean = true;
  // public lineChartType:string = 'line';
 
  // public randomize():void {
  //   let _lineChartData:Array<any> = new Array(this.lineChartData.length);
  //   for (let i = 0; i < this.lineChartData.length; i++) {
  //     _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
  //     for (let j = 0; j < this.lineChartData[i].data.length; j++) {
  //       _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
  //     }
  //   }
  //   this.lineChartData = _lineChartData;
  // }
 
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
}
