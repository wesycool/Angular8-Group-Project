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
}