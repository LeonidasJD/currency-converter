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

amount1:number;

  ngOnInit(){

    this.convertService.sendAmount.subscribe((amount  => {this.amount1 = amount * 117}));

  }
}
