import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {Sales} from '../sales';
import {ProductsService} from '../products.service';
import {SaleService} from '../sale.service';
import {AlertsService} from '@jaspero/ng2-alerts';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers: [ProductsService, SaleService]
})
export class ListProductsComponent implements OnInit {
  products: Products[];
  product: Products;
  salesProdId: Sales[];

  constructor(private productsService: ProductsService, private saleService: SaleService, private alertService: AlertsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }
 
  deleteProduct(id:any){
    var products = this.products;
    this.productsService.getProductId(id).subscribe(product =>{
      this.product = product;
      this.saleService.getSalesProductId(this.product.id).subscribe(salesProdId => {
        this.salesProdId = salesProdId;
        if (this.salesProdId.length == 0)
          this.deleteProductId(id);
        else
         {
           this.alertService.create('warning', 'Cannot delete this item as it affects the sales',{ 
              overlay: false,
              overlayClickToClose: true,
              showCloseButton: true,
              duration: 10000
           });
         }
      });
    });
  }
  
  deleteProductId(id){
    this.productsService.deleteProduct(id).subscribe(data=>{
      for(var i=0; i< this.products.length; i++)
      {
        if(this.products[i]._id == id)
        {
          console.log("true");
          this.products.splice(i,1);
        }
      }
  });
  }  
    

}
