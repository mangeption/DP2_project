import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Products} from '../products';
import {Location} from '@angular/common';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
  providers: [ProductsService]
})
export class EditProductComponent implements OnInit {

  _id: string;
  id: number;
  name: string;
  price: number;
  stock: number;
  
  constructor(private productsService: ProductsService, private location : Location, 
    private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {this._id = params['_id']; this.id = +params['id'];});
  }
 
  editProduct(){
    const selProduct={
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock
    }
    this.productsService.editProduct(this._id, selProduct).subscribe(product => {
      this.location.back();
    });
  }
  goBack(){
    this.location.back();
  }

}
