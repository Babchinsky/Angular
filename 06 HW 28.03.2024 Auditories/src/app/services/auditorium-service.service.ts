import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuditoriumService {
  private audiences: { name: string; capacity: number; faculty: string }[] = [
    { name: 'Аудитория 101', capacity: 75, faculty: 'Инженерный факультет' },
    {
      name: 'Аудитория 102',
      capacity: 55,
      faculty: 'Факультет информационных технологий',
    },
    {
      name: 'Аудитория 103',
      capacity: 90,
      faculty: 'Факультет экономики и бизнеса',
    },
    {
      name: 'Аудитория 104',
      capacity: 110,
      faculty: 'Факультет искусств и дизайна',
    },
    { name: 'Аудитория 105', capacity: 40, faculty: 'Медицинский факультет' },
    {
      name: 'Аудитория 106',
      capacity: 100,
      faculty: 'Факультет естественных наук',
    },
    { name: 'Аудитория 107', capacity: 130, faculty: 'Юридический факультет' },
    {
      name: 'Аудитория 108',
      capacity: 85,
      faculty: 'Факультет социальных наук',
    },
    { name: 'Аудитория 109', capacity: 120, faculty: 'Факультет лингвистики' },
    {
      name: 'Аудитория 110',
      capacity: 70,
      faculty: 'Факультет спорта и фитнеса',
    },
  ];

  constructor() {}

  getAudiences() {
    return this.audiences;
  }
}
