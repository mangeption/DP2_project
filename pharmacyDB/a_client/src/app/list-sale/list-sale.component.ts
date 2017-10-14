import { Component, OnInit } from '@angular/core';
import {Sales} from '../sales';
import {Products} from '../products';
import {SaleService} from '../sale.service';
import {ProductsService} from '../products.service'
@Component({
  selector: 'app-list-sale',
  templateUrl: './list-sale.component.html',
  styleUrls: ['./list-sale.component.css'],
  providers: [SaleService, ProductsService]
})
export class ListSaleComponent implements OnInit {

  sales: Sales[];
  productChosen: Products;
  
    constructor(private salesService: SaleService, private productService: ProductsService) { }
  
    ngOnInit() {
      this.salesService.getSales().subscribe(sales => this.sales = sales);
    }
   
    deleteSale(id:any, prodId, qty:number){
      var sales = this.sales;
      this.productService.getProductId(prodId).subscribe(product => this.productChosen = product);
      this.salesService.deleteSale(id).subscribe(data=>{
          for(var i=0; i< sales.length; i++)
          {
            if(sales[i].id == id)
            {
              //console.log("true");
              this.EditProduct(this.productChosen, qty);
              sales.splice(i,1);
            }
          }
      })
    }

    EditProduct(product, quantity)
    {
      const selProduct={
        id: product.id,
        stock: product.stock + quantity
      }
      this.productService.editProduct(selProduct.id, selProduct).subscribe(product => {
      });
    }
}
