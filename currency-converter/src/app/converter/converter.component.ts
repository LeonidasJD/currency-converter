import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataBaseService } from '../shared/services/data-base.service';
import { ConvertService } from '../shared/services/convert.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {

  constructor(private dataBase: DataBaseService, private router: Router,) { }

  ngOnInit() {}

  onClose() {
    this.router.navigate(['home']);
  }
}
