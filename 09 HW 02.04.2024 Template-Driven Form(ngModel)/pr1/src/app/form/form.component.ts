import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  onSubmit(form: NgForm){
    if (form.valid) {
      // Обработка отправки данных формы
      console.log(form.value);
      alert('Регистрация успешна');
    } else {
      // Показать сообщение об ошибке или выполнить другие действия
      console.log(
        'Форма недействительна. Пожалуйста, заполните обязательные поля.'
      );
      alert('Регистрация неуспешна');
    }
  }
}
