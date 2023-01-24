import { Component } from '@angular/core';
import { ConvertService } from './converter/convert.service';
import { DataBaseService } from './data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';

  constructor(private convertService:ConvertService){}

show:boolean = true;

  ngOnInit(){
    this.convertService.onSendShowState.subscribe((value => {this.show = value}));

  }


}
