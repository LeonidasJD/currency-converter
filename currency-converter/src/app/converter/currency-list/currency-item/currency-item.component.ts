import { Component, Input } from '@angular/core';
import { Currency } from 'src/app/currency-model/currency-model';
import { ConvertService } from '../../convert.service';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css']
})
export class CurrencyItemComponent {
  constructor(private convertService:ConvertService){}


@Input() currency:Currency;
@Input() id:number;

amount1:number;

fromCurency:string;

convertedAmount:number

  ngOnInit(){

    this.convertService.sendAmount.subscribe((amount => this.amount1 = amount));
    this.convertService.onSendShortName.subscribe((shortName => this.fromCurency = shortName));
  }





}
