import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByGroup',
})
export class FilterByGroupPipe implements PipeTransform {
  transform(audiences: any[], groups: any[], selectedGroup: string): any[] {
    if (!audiences || !groups || selectedGroup === 'all') {
      return audiences; // Возвращаем исходный список, если аудитории отсутствуют, группы не переданы или выбрана опция "все группы"
    }

    const group = groups.find((group) => group.name === selectedGroup);
    if (!group) {
      return []; // Возвращаем пустой список, если группа не найдена
    }

    return audiences.filter((audience) => {
      // Фильтруем аудитории, оставляем только те, где вместимость не превышает количество студентов в выбранной группе
      return audience.capacity >= group.studentCount;
    });
  }
}
