import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() selectedPet: any;

  currentYear = new Date().getFullYear();

  ageOfSelectedPet: number = 0; // значение по умолчанию

  constructor() {}

  ngOnInit() {
    // Вычисляем возраст выбранного питомца в методе ngOnInit
    if (this.selectedPet) {
      this.ageOfSelectedPet = this.currentYear - this.selectedPet.birthYear;
    }
  }
}
