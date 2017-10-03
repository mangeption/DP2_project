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
    return this.http.post('http://localhost:3000/api/addProduct', newProduct, {headers:headers})
    .map(res => res.json());
  }
  
  deleteProduct(id){
    return this.http.delete('http://localhost:3000/api/delProduct/' + id).map(res => res.json());
  }
  editProduct(id, foundObject){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/api/editProduct/' + id, foundObject, {headers:headers}).map(res => res.json());
  }

}
