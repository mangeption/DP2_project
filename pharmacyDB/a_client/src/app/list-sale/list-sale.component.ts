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
  products: Products[];
  sales: Sales[];
  productChosen: Products;
  
    constructor(private salesService: SaleService, private productService: ProductsService) { }
  
    ngOnInit() {
      this.salesService.getSales().subscribe(sales => this.sales = sales);
      this.productService.getProducts().subscribe(products => this.products = products);
    }
   
    deleteSale(id:any, prodId, qty:number){
      var sales = this.sales;
      for (var i = 0; i < this.products.length; i++)
      {
        if (this.products[i].id == prodId)
          this.productChosen = this.products[i];
      }
      this.salesService.deleteSale(id).subscribe(data=>{
          for(var i=0; i< sales.length; i++)
          {
            if(sales[i]._id == id)
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
        id: product._id,
        stock: product.stock + quantity
      }
      this.productService.editProduct(selProduct.id, selProduct).subscribe(product => {
      });
    }
}
