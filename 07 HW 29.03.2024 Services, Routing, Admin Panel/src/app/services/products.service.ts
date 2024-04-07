import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'http://localhost:3000/products';

  private updateProducts = new BehaviorSubject<boolean>(false);
  updateProducts$ = this.updateProducts.asObservable();

  constructor() {}

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async editProduct(id: number, updatedProduct: Product): Promise<void> {
    await fetch(`${this.url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    });
    this.triggerUpdate();
  }

  async deleteProduct(id: number): Promise<void> {
    try {
      await fetch(`${this.url}/${id}`, {
        method: 'DELETE',
      });
      this.triggerUpdate(); // Уведомляем компоненты о необходимости обновления
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }

  triggerUpdate() {
    this.updateProducts.next(true);
  }
}
