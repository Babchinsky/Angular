import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.updateProducts$.subscribe(() => {
      this.getAllProducts();
    });
    this.getAllProducts();
  }

  async getAllProducts(): Promise<void> {
    try {
      this.products = await this.productService.getAllProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }
}
