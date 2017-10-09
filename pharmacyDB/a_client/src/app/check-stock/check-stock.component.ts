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
  products: Products[];
  lowStocks: Products[];
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => this.lowStocks = products);
  }
  checkStock(){
    for(var i=0; i<this.products.length; i++){
      this.lowStocks.push(this.products[i]);
    }
  }
  

}
