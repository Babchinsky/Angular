import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() productInput: any;
  @Output() addOneToCartChild = new EventEmitter();
  @Output() removeOneFromCartChild = new EventEmitter();


  addOneToCart(productInput: any){
    this.addOneToCartChild.emit(productInput);
    
  }

  removeOneFromCart(productInput: any){
    this.removeOneFromCartChild.emit(productInput);
  }
  
}
