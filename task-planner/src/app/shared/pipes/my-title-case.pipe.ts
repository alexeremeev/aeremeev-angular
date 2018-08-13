import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTitleCase',
  pure: true
})
export class MyTitleCasePipe implements PipeTransform {

  transform(value: string) {
    return !value ? '' : value.replace(
      /[a-zA-Z\u0400-\u04FF]+/g,
      (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase()
      )
    );
  }

}
