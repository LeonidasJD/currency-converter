import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Currency } from '../currency-model/currency-model';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor(private http:HttpClient) { }

  sendAmount = new Subject<number>();
  onSendShortName = new Subject<string>();
  sendNewArray = new Subject<Currency[]>();

  ngOnInit(){


  }

  currencies:Currency[] = [];



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
}
