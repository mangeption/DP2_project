import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Products} from './products';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsService {

  constructor(private http: Http) { }

  getProducts(){
    return this.http.get('http://localhost:3000/api/products').map(res => res.json());
  }

  addProduct(newProduct){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/product', newProduct, {headers:headers})
    .map(res => res.json());
  }
  
  deleteProduct(id){
    return this.http.delete('http://localhost:3000/api/product/' + id).map(res => res.json());
  }

}
