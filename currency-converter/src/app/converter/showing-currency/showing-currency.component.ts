import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Currency } from 'src/app/currency-model/currency-model';
import { DataBaseService } from 'src/app/data-base.service';
import { ConvertService } from '../convert.service';

@Component({
  selector: 'app-showing-currency',
  templateUrl: './showing-currency.component.html',
  styleUrls: ['./showing-currency.component.css']
})
export class ShowingCurrencyComponent {
  constructor(private convertService: ConvertService, private route:ActivatedRoute,private dataBase:DataBaseService){}

  amount:number;
  id:number;
  currency:Currency;
  currencyShortName:string;

  resultRSD:number;




 ngOnInit(){

this.route.params.subscribe((params =>{this.id = params['id']; this.currency = this.convertService.getCurrency(this.id)}));




}



onConvert(){


  this.convertService.sendAmount.next(this.amount);
 }


}


