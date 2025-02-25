import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  //data need to be transformed, data need to transform
  transform(DataArray: any[], searchString: string): any {
    const result: any = [];

    if (!searchString) {
      return DataArray;
    } else {
      DataArray.forEach((item: any) => {
        if (
          (item.name + item.cuisine)
            .trim()
            .toLowerCase()
            .includes(searchString.trim().toLowerCase())
        ) {
          result.push(item);
        }
      });
      return result;
    }
  }
}
