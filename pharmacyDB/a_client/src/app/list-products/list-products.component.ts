import { Component, OnInit } from '@angular/core';
import {Products} from '../products';
import {ProductsService} from '../products.service';
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
  providers: [ProductsService]
})
export class ListProductsComponent implements OnInit {
  products: Products[];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }
 
  deleteProduct(id:any){
    var products = this.products;
    //console.log(id);
    this.productsService.deleteProduct(id).subscribe(data=>{
        for(var i=0; i< products.length; i++)
        {
          if(products[i]._id == id)
          {
            console.log("true");
            products.splice(i,1);
          }
        }
    })
  }

}
