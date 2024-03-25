import { Component } from '@angular/core';
import { iphones } from '../iphones';

interface IPhone {
  src: string;
  color: string;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  iphones: IPhone[] = iphones;
  currentPhoneIndex: number = 0;

  changePhone(index: number): void {
    this.currentPhoneIndex = index;
  }
}
