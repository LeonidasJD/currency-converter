import { Component } from '@angular/core';
import { Currency } from 'src/app/currency-model/currency-model';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent {

constructor(private convertService:ConvertService){}

currencies:Currency[] = [];

ngOnInit(){

  this.currencies = this.convertService.getCurrencies();
}

}
