import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConvertService } from './shared/services/convert.service';
import { DataBaseService } from './shared/services/data-base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-converter';
  show: string = 'active';

  constructor(private convertService: ConvertService, private router: Router) { }

  ngOnInit() {
    this.convertService.onSendShowState.subscribe((value => { this.show = value }));
    this.router.navigate(['/home']);
  }
}
