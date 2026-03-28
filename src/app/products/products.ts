import { Component, Input } from '@angular/core';
import {ProductsInterface} from '../products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  @Input() productsInterface!: ProductsInterface;
}
