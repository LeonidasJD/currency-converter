import { Component } from '@angular/core';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-showing-currency',
  templateUrl: './showing-currency.component.html',
  styleUrls: ['./showing-currency.component.css']
})
export class ShowingCurrencyComponent {
  constructor(private convertService: ConvertService){}

  amount:number;

 ngOnInit(){



 }

 onConvert(){
  this.convertService.sendAmount.next(this.amount);
 }
}
