import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-check-stock',
  templateUrl: './check-stock.component.html',
  styleUrls: ['./check-stock.component.css'],
  providers: [ProductsService]
})
export class CheckStockComponent implements OnInit {
 
  lowStocks: Products[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.checkStock().subscribe(products => this.lowStocks = products);
  }

  getPercentage(percentage)
  {
    console.log(percentage);
    return percentage + "%";
  }
  
}
  

