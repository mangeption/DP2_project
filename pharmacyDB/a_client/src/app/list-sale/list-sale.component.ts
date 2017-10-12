import { Component, OnInit } from '@angular/core';
import {Sales} from '../sales';
import {SaleService} from '../sale.service';
@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css'],
  providers: [SaleService]
})
export class ListSaleComponent implements OnInit {

  sales: Sales[];
  
    constructor(private productsService: SaleService) { }
  
    ngOnInit() {
      this.productsService.getSales().subscribe(sales => this.sales = sales);
    }
   
    deleteSale(id:any){
      var sales = this.sales;
      //console.log(id);
      this.productsService.deleteSale(id).subscribe(data=>{
          for(var i=0; i< sales.length; i++)
          {
            if(sales[i].id == id)
            {
              console.log("true");
              sales.splice(i,1);
            }
          }
      })
    }

}
