import { Component } from '@angular/core';
import { ConvertService } from '../shared/services/convert.service';
import { DataBaseService } from '../shared/services/data-base.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  constructor(public dataBase: DataBaseService, private convertService: ConvertService) { }
}


