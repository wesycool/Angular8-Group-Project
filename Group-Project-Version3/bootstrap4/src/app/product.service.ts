import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  baseUrl: string = environment.baseUrl;
  
  constructor(private httpClient: HttpClient) { }
  
  public getProducts() {
    return this.httpClient.get(`${this.baseUrl+ 'products'}`);
  }

  create(product: Product) {
    //http://localhost:8080/products-ut-wo-db/rest/product/create
    this.httpClient.post<Product>(`${this.baseUrl}/product/create`, product).subscribe(data => {
    console.log(data);
    },
    error =>
    console.log('Could not create product.'));
    }
}