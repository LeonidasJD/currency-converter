import { Component } from '@angular/core';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dataBaseService:DataBaseService){}

  showApp(){
    this.dataBaseService.showApp.next(true);
  }
}
