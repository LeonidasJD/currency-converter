import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject, subscribeOn, Subscription } from 'rxjs';
import { Currency } from '../currency-model/currency-model';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private http:HttpClient) { }

  sendResult = new Subject<number>();
  sendNewArray = new Subject<Currency[]>();
  onSendShowState = new BehaviorSubject<any>(null);








  ngOnInit(){


  }

  currencies:Currency[] = [
    new Currency(
      'Euro',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/231px-Flag_of_Europe.svg.png',
      'EUR',
      0
    ),
    new Currency(
      'Franc',
      'https://www.svajcarska.com/wp-content/uploads/2018/04/Flag_of_Switzerland-300x300.png',
      'CHF',
      1
    ),
    new Currency(
      'Dollar',
      'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
      'USD',
      2
    ),
    new Currency(
      'Dollar',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/1920px-Flag_of_Canada.svg.png',
      'CAD',
      3
    ),
    new Currency(
      ' Yen',
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1920px-Flag_of_the_People%27s_Republic_of_China.svg.png",
      'CNY',
      4
    ),
    new Currency(
      'Ruble',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png',
      'RUB',
      5
    ),

  ];

  getCurrencies(){
    return this.currencies;
  }

 getCurrency(id:number){
  return this.currencies[id];
 }

owerwrightAray(newArray:Currency[]){
this.currencies = newArray;
this.sendNewArray.next(newArray);

}



shortName:string

conversionCurrency(shortName:string,amount:number){ //prihvatamo vrednosti koje smo dobili kada smo kliknuli na odredjenu valutu

let resultRsd:number


if(shortName === 'EUR'){  // vrsimo racunanje
resultRsd = amount * 117.37;
 this.sendResult.next(+resultRsd); //saljemo izracunatu vrednost

}else if(shortName === 'CHF'){
resultRsd= amount * 117.23
this.sendResult.next(+resultRsd);

}else if(shortName === 'USD'){
  resultRsd = amount * 108.01
  this.sendResult.next(+resultRsd)

}else if(shortName === 'CAD'){
  resultRsd = amount * 81.01
  this.sendResult.next(+resultRsd)

}else if(shortName === 'CNY'){
  resultRsd = amount * 15.99
  this.sendResult.next(+resultRsd)

}else if(shortName === 'RUB'){
  resultRsd = amount * 1.53
  this.sendResult.next(+resultRsd)
}
}





}
