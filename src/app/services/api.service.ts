import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from 'src/models/orders.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'https://cherrybrooklyn-api.herokuapp.com/Orders';
  products: Order[] = [];
  productCount = 0;

  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Accept': 'application/json'
    })
  };

  getOrders(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl, this.httpOptions);
  }
}
