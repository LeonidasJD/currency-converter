import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConvertService } from '../converter/convert.service';
import { DataBaseService } from '../data-base.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( public router:Router, public route:ActivatedRoute, public convertService:ConvertService){}

  show:boolean = true;


  letsStart(){
    this.show = false;
    this.convertService.onSendShowState.next(this.show);
    this.router.navigate(['/main-menu']);





  }
}
