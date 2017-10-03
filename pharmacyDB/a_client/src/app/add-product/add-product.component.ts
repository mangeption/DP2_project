import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Products} from '../products';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductsService]
})
export class AddProductComponent implements OnInit {
  id: number;
  name: string;
  price: number;
  stock: number;
  constructor(private productsService: ProductsService, private location: Location) { }

  ngOnInit() {
  }
  addProduct(){
    const newProduct={
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock
    }
    this.productsService.addProduct(newProduct).subscribe(() => {
      this.location.back();
    });
  }

}
