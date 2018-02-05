import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  apiRoot = "http://localhost:8000/";
  url = "";
  result;
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Object[]> {
    return this.http.get<Object[]>(this.apiRoot + 'productos/');
  }

  updateProduct(product) {
    this.url = this.apiRoot + 'productos/' + product.id + '/';
    console.log(this.url);
    this.http.patch(this.url, product).subscribe(res => {
      console.log(res);
    });
  }

  deleteProduct(id) {
    this.url = this.apiRoot + 'productos/' + id + '/';
    this.http.delete(this.url).subscribe(res => {
      console.log(res);
    });
  }

  addProduct(product): Observable<Object[]> {
    this.url = this.apiRoot + 'productos/';
    return this.http.post<Object[]>(this.url, product);
  }
}
