import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import {Products} from '../products';
import {Location} from '@angular/common';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [ProductsService, NotificationsService]
})
export class AddProductComponent implements OnInit {
  id: number;
  name: string;
  price: number;
  stock: number;
  constructor(private productsService: ProductsService, private location: Location, private notiService:NotificationsService) { }

  ngOnInit() {
  }
  addProduct(){
    const newProduct={
      id: this.id,
      name: this.name,
      price: this.price,
      stock: this.stock
    }

    if (!this.id || !this.name || !this.price || !this.stock)
    {
      const toast = this.notiService.error('Invalid input', 'You must enter all fields', {
        timeOut: 10000,
        showProgressBar: true,
        pauseOnHover:false,
        clickToClose: true
      })
    }
    else
    {
      this.productsService.addProduct(newProduct).subscribe(() => {
        this.location.back();
      });
    }
  }

  public options = {
    position: ["bottom", "right"],
    timeOut:1000,
    lastOnBottom: true
  }

}
