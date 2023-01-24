import { Component } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { ConvertService } from './convert.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  constructor(private dataBase:DataBaseService,private convertService:ConvertService){}

  ngOnInit(){
    this.dataBase.fetchCurrencyData().subscribe((responseData =>{console.log(responseData);this.convertService.owerwrightAray(responseData);}))
  }
}
