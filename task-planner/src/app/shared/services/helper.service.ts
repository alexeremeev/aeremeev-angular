import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public beautifyDate(date: string, srcFormat = 'YYYY-MM-DD HH:mm', destFormat = 'DD MMMM YY HH:mm'): string {
    let inputDate = moment(date);
    return inputDate.locale("Ru").format(destFormat);
  }
}
