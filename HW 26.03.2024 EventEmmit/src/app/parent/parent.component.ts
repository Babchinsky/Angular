import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  productsInStock = [
    { name: 'Сок', price: 10, quantity: 23 },
    { name: 'Чай', price: 2.5, quantity: 5 },
    { name: 'Кофе', price: 5, quantity: 14 },
  ];
  productsInCart: { name: string; price: number; quantity: number }[] = [];
  selectedProduct: any;

  addOneToCartParent(product: any) {
    const productIndexInCart = this.productsInCart.findIndex(
      (pr) => pr.name === product.name
    );

    const productIndexInStock = this.productsInStock.findIndex(
      (pr) => pr.name === product.name
    );

    if (this.productsInStock[productIndexInStock].quantity > 0) {
      // Если продукт есть в корзине
      if (productIndexInCart !== -1) {
        this.productsInCart[productIndexInCart].quantity++;
      } else {
        this.productsInCart.push({
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }

      this.productsInStock[productIndexInStock].quantity--;
    }
  }

  removeOneFromCartParent(product: any) {
    const productIndexInCart = this.productsInCart.findIndex(
      (pr) => pr.name === product.name
    );

    const productIndexInStock = this.productsInStock.findIndex(
      (pr) => pr.name === product.name
    );

    if (this.productsInCart[productIndexInCart].quantity > 0) {
      // Если продукт есть в корзине и его количество больше 0
      if (productIndexInCart !== -1) {
        if (this.productsInCart[productIndexInCart].quantity > 1) {
          this.productsInCart[productIndexInCart].quantity--;
        } else {
          this.productsInCart.splice(productIndexInCart, 1); // 1 - это кол-во элементов, которые надо удалить
        }
      }
      this.productsInStock[productIndexInStock].quantity++;
    }
  }

  getTotalPrice() {
    // Используем reduce() для вычисления суммы цен продуктов в корзине
    let totalPrice: number = this.productsInCart.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.price * currentValue.quantity; // Умножаем цену продукта на его количество
      },
      0
    );
    return totalPrice;
  }
}
