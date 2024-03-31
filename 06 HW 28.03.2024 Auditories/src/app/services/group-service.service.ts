import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  private groups: { name: string; studentCount: number; faculty: string }[] = [
    { name: 'Группа 201', studentCount: 50, faculty: 'Инженерный факультет' },
    { name: 'Группа 202', studentCount: 85, faculty: 'Инженерный факультет' },
    {
      name: 'Группа 203',
      studentCount: 90,
      faculty: 'Факультет информационных технологий',
    },
    {
      name: 'Группа 204',
      studentCount: 105,
      faculty: 'Факультет информационных технологий',
    },
    {
      name: 'Группа 205',
      studentCount: 70,
      faculty: 'Факультет экономики и бизнеса',
    },
  ];

  constructor() {}

  getGroups() {
    return this.groups;
  }
}
