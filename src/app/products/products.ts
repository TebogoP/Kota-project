import { Component, Input } from '@angular/core';
import {ProductsInterface} from '../products';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  @Input() productsInterface!: ProductsInterface;
}
