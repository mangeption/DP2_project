import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Products} from '../products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductsService]
})
export class AddProductComponent implements OnInit {
  products: Products[];
  product: Products;
  id: number;
  name: string;
  price: number;
  stock: number;
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }
  addProduct(){
    const newProduct={
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock
    }
    this.productsService.addProduct(newProduct).subscribe(product => {
      this.products.push(product);
      this.productsService.getProducts().subscribe(products => this.products = products);
    });
  }

}
