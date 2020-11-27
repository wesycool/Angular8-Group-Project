import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service'

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})

export class SearchProductComponent implements OnInit {
  productId: number;
  productDescriptionEnglish: string;
  message: string;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  search(){
    this.productService.getProducts().subscribe((res:any)=>{
      console.log(res);
    },(err:any) => {
      console.log(err.error.status)
    })
  }
}
