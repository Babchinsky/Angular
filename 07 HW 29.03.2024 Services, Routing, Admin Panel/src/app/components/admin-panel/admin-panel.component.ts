import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../../services/products.service'; // Исправлено на ProductsService
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  myForm!: FormGroup;
  products: Product[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required]],
      price: ['', Validators.required],
      discount: ['', Validators.required],
    });

    this.productService.updateProducts$.subscribe(() => {
      this.getAllProducts();
    });
    this.getAllProducts();
  }

  addProduct() {
    if (this.myForm.valid) {
      this.http
        .post<any>('http://localhost:3000/products', this.myForm.value)
        .subscribe(
          (response) => {
            console.log('Product added successfully:', response);
            this.productService.triggerUpdate(); // Вызов метода для обновления продуктов
            this.myForm.reset(); // Очистка значений формы
          },
          (error) => {
            console.error('Error adding product:', error);
          }
        );
    }
  }

  async getAllProducts(): Promise<void> {
    try {
      this.products = await this.productService.getAllProducts();
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  trackProduct(index: number, product: Product): number {
    return product.id; // Возвращаем уникальный идентификатор продукта
  }

  handleEditButtonClick(id: number) {
    this.productService.editProduct(id, this.myForm.value);
  }
}
