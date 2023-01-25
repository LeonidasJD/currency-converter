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
      'EUR'
    ),
    new Currency(
      'Dinar',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/239px-Flag_of_Serbia.svg.png',
      'RSD'
    ),
    new Currency(
      'Franc',
      'https://www.svajcarska.com/wp-content/uploads/2018/04/Flag_of_Switzerland-300x300.png',
      'CHF'
    )
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

conversionCurrency(shortName:string,amount:number){
console.log('To je' + shortName);

let resultRsd:number



if(shortName === 'EUR'){
 resultRsd = amount * 117
 this.sendResult.next(resultRsd);

}else if(shortName === 'CHF'){
resultRsd= amount * 116
this.sendResult.next(resultRsd);

}else if(shortName === 'RSD'){
  resultRsd = amount * 1
  this.sendResult.next(resultRsd)


}
}





}
