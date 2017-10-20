import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Sales} from './sales';
import 'rxjs/add/operator/map';

@Injectable()
export class SaleService {

  constructor(private http: Http) { }

  getSales(){
    return this.http.get('http://localhost:3000/s/sales').map(res => res.json());
  }
  addSale(newSale){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/s/addSale', newSale, {headers:headers})
    .map(res => res.json());
  }
  
  deleteSale(id){
    return this.http.delete('http://localhost:3000/s/delSale/' + id).map(res => res.json());
  }
  editSale(id, foundObject){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://localhost:3000/s/editSale/' + id, foundObject, {headers:headers}).map(res => res.json());
  }
  getSaleByMonth(month, year){
    return this.http.get('http://localhost:3000/s/saleByMonth/' + month + '/' + year).map(res => res.json());
  }
  getSaleByWeek(date, month, year){
    return this.http.get('http://localhost:3000/s/saleByWeek/' + date + '/' + month + '/' + year).map(res => res.json());
  }
}
