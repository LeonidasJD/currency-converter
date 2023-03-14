import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Currency } from 'src/app/shared/models/currency-model';
import { ConvertService } from '../../../shared/services/convert.service';

@Component({
  selector: 'app-currency-item',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css']
})
export class CurrencyItemComponent {

  @Input() currency: Currency;
  @Input() id: number;
  result: number
  fromCurency: string;

  constructor(private convertService: ConvertService) { }

  ngOnInit() {

    this.convertService.sendResult.subscribe((value => { this.result = value }))
  }
}










