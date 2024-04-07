import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product | undefined;

  @Output() editButtonClick = new EventEmitter<number>();

  constructor(private productsService: ProductsService) {}

  editProduct(id: number) {
    // Реализуйте действия для редактирования продукта, например, открытие формы редактирования
    console.log('Editing product:', id);
    this.editButtonClick.emit(id);
  }

  deleteProduct(id: number) {
    // Реализуйте действия для удаления продукта
    this.productsService.deleteProduct(id);
  }
}
