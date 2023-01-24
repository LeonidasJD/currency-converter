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

  constructor(private databaseService: DataBaseService){}

  appActive:any = false;

  ngOnInit(){
    this.databaseService.showApp.subscribe((responseApp => {this.appActive = responseApp}));
  }


}
