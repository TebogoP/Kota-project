import { Component, OnInit } from '@angular/core';
import { Products } from '../products/products';
import {ProductsInterface} from '../products';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [Products, NgForOf, RouterLink,  NgIf],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  productList: ProductsInterface[] = [];

  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    if (this.productList.length ===0){
        this.loadApiData();
    }
  }

  loadApiData() {
    this.http.get<{ products: ProductsInterface[] }>('/products.json').subscribe({
      next: (data) => {
        this.productList = data.products;
        localStorage.setItem('products', JSON.stringify(this.productList));

        console.log('Loaded and saved to localStorage');
        console.log(data.products);
      },
      error: (err) => {
        console.error('Failed to load:', err);
      },
    });
  }
  loadFromStorage() {
    const stored = localStorage.getItem('products');
    if (stored) {
      this.productList = JSON.parse(stored);
    }
    else{
      console.log("No data to load")
    }
  }
}

