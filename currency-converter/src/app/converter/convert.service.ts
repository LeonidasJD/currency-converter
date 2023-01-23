import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Currency } from '../currency-model/currency-model';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }

  sendAmount = new Subject<number>();

  ngOnInit(){


  }

  currencies:Currency[] = [
    new Currency(
      'Euro',
      'EUR',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/231px-Flag_of_Europe.svg.png',

    ),
    new Currency(
      'Dinar',
      'RSD',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/239px-Flag_of_Serbia.svg.png',

    ),
    new Currency(
      ' Franc',
      'CHF',
      'https://www.svajcarska.com/wp-content/uploads/2018/04/Flag_of_Switzerland-300x300.png',

    ),
    new Currency(
      'US Dollar',
      'USD',
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png',

    ),
    new Currency(
      'Australian Dollar',
      'AUD',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/220px-Flag_of_Australia.svg.png',

    ),
    new Currency(
      'Canadian Dollar',
      'CAD',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/275px-Flag_of_Canada.svg.png',

    ),
    new Currency(
      ' Korna ',
      'CZK',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/255px-Flag_of_the_Czech_Republic.svg.png',

    ),
    new Currency(
      'Yen',
      'CNY',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png',

    ),
  ];


  getCurrencies(){
    return this.currencies;
  }


}
