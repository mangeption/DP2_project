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
  selectedProduct: Products;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(products => this.products = products);
  }
  onSelect(prod: Products){
    this.selectedProduct = prod;
  }
  deleteProduct(id:any){
    var products = this.products;
    this.productsService.deleteProduct(id).subscribe(data=>{
      if(data.n==1){
        for(var i=0; i< products.length; i++){
          if(products[i]._id == id){
            products.splice(i,1);
          }
        }
      }
    })
  }

}
