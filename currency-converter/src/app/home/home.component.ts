
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ConvertService } from '../shared/services/convert.service';
import { TranslateService } from '@ngx-translate/core';
import { transition } from '@angular/animations';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  show: string = 'active';

  constructor(public router: Router, public route: ActivatedRoute, public convertService: ConvertService, public translate: TranslateService) {

    translate.addLangs(['en', 'sr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|sr/) ? browserLang : 'en');
  }
  

  ngOnInit() { }

  changeLanguage(language: string) {
    this.translate.use(language)
  }

  letsStart() {
    this.show = 'inactive';
    this.convertService.onSendShowState.next(this.show);
    this.router.navigate(['/main-menu']);
  }
}
