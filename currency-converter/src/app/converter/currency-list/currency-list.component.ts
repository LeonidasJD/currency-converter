import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Currency } from 'src/app/shared/models/currency-model';
import { DataBaseService } from 'src/app//shared/services/data-base.service';
import { ConvertService } from '../../shared/services/convert.service';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css']
})
export class CurrencyListComponent {

  currencies: Currency[] = [];
  resultRsd: number;
  resultEur: number;

  constructor(private convertService: ConvertService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.convertService.sendNewArray.subscribe((newArray =>  this.currencies = newArray));
    this.currencies = this.convertService.getCurrencies();
  }

  reload() {
    this.router.navigate([''], { relativeTo: this.route });
  }
}
