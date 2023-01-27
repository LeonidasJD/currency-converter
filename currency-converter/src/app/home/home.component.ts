
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core/public_api';

import { ConvertService } from '../converter/convert.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor( public router:Router, public route:ActivatedRoute, public convertService:ConvertService){}

  show:string = 'active';

ngOnInit(){



}

  letsStart(){
    this.show = 'inactive';
    this.convertService.onSendShowState.next(this.show);
    this.router.navigate(['/main-menu']);
  }



}
