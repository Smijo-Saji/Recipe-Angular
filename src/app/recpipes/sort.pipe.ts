import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(items: any[], mealType: string): any[] {
    if (!items) {
      return [];
    }
    if (!mealType || mealType === 'Sort By Meal-Type') {
      return items;
    }
    return items.filter((item) => item.mealType.includes(mealType));
  }
}
