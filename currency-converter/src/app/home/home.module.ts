import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations:[
    HomeComponent
  ],

  imports:[RouterModule,TranslateModule],

  exports:[
    HomeComponent
  ]
})

export class HomeModule{

  

}
