import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  users: { name: string; salary: number; birthday: Date }[] = [];

  newUser: { name: string; salary: number; birthday: Date } = {
    name: '',
    salary: 0,
    birthday: new Date(),
  };

  addUser() {
    if (this.newUser.name.trim() !== '' && this.newUser.birthday !== null && this.newUser.salary > 0) {
      this.users.push({
        name: this.newUser.name,
        salary: this.newUser.salary,
        birthday: this.newUser.birthday,
      });
      this.newUser.name = '';
      this.newUser.salary = 0;
      this.newUser.birthday = new Date();
    }
  }

  removeUser(user: { name: string; salary: number; birthday: Date }) {
    // Находим индекс пользователя в массиве users
    const index = this.users.findIndex((u) => u === user);

    // Проверяем, что пользователь найден
    if (index !== -1) {
      // Удаляем пользователя из массива
      this.users.splice(index, 1);
    }
  }

  editUser(user: { name: string; salary: number; birthday: Date }) {
    // Находим индекс пользователя в массиве users
    const index = this.users.findIndex((u) => u === user);

    // Проверяем, что пользователь найден
    if (index !== -1) {
      // Обновляем значения пользователя на новые значения
      this.users[index] = {name: this.newUser.name, salary: this.newUser.salary, birthday: this.newUser.birthday };
    }

    this.newUser.name = '';
    this.newUser.salary = 0;
    this.newUser.birthday = new Date();
  }
}
