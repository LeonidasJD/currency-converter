import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Currency } from 'src/app/shared/models/currency-model';
import { ConvertService } from './convert.service';


@Injectable({
  providedIn: 'root'
})
export class DataBaseService {

  constructor(private http: HttpClient, private convertService: ConvertService) { }

  sendCurrencyData() {  //ako bude bilo potrebe koristice se ,za sada se ova metoda ne koristi

    let currencies = this.convertService.getCurrencies();

    return this.http.put('https://currencies-4f7e7-default-rtdb.europe-west1.firebasedatabase.app/currencies.json', currencies)
      .subscribe((responseData => { console.log(responseData) }));
  }

  fetchCurrencyData() {
    return this.http.get<Currency[]>('https://currencies-4f7e7-default-rtdb.europe-west1.firebasedatabase.app/currencies.json');
  }
}
