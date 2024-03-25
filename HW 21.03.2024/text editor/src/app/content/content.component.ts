import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  text: string = '';
  isBoldActive: boolean = false;
  isItalicActive: boolean = false;
  isUnderlineActive: boolean = false;
  isCapitalizeActive: boolean = false;
  fontSize: number = 14; // Значение по умолчанию для размера шрифта
  fontFamily: string = 'Arial';
  fontColor: string = '#000000';

  toggleStyle(style: string): void {
    switch (style) {
      case 'bold':
        this.isBoldActive = !this.isBoldActive;
        break;
      case 'italic':
        this.isItalicActive = !this.isItalicActive;
        break;
      case 'underline':
        this.isUnderlineActive = !this.isUnderlineActive;
        break;
      case 'capitalize':
        this.isCapitalizeActive = !this.isCapitalizeActive;
        break;
      default:
        break;
    }
  }
}
