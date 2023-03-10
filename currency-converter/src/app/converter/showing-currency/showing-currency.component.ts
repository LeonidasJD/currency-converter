import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Currency } from 'src/app/shared/models/currency-model';
import { DataBaseService } from 'src/app/shared/services/data-base.service';
import { ConvertService } from '../../shared/services/convert.service';

@Component({
  selector: 'app-showing-currency',
  templateUrl: './showing-currency.component.html',
  styleUrls: ['./showing-currency.component.css']
})
export class ShowingCurrencyComponent {

  amount: number;
  id: number;
  currency: Currency;
  shortName: string;
  result: number;

  constructor(private convertService: ConvertService, private route: ActivatedRoute, private dataBase: DataBaseService) { }

  ngOnInit() {
    this.route.params.subscribe((params => {
      this.id = params['id'];
      this.currency = this.convertService.getCurrency(this.id);
      this.shortName = this.currency.shortName
      console.log(this.shortName);   //kada kliknemo na link gde su valute ispisujemo tu valutu iz niza u ovoj komponenti
    }));
  }

  onConvert() {
    // this.convertService.sendAmount.next(this.amount);
    this.convertService.conversionCurrency(this.shortName, this.amount); //vrsimo konverziju valuta
    this.convertService.sendResult.subscribe((value => { this.result = +value.toFixed(2); })) //prihvatamo izracunutu vrednost iz convert service
  }
}


