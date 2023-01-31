import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { ConverterComponent } from "src/app/converter/converter.component";
import { CurrencyItemComponent } from "src/app/converter/currency-list/currency-item/currency-item.component";
import { CurrencyListComponent } from "src/app/converter/currency-list/currency-list.component";
import { ShowingCurrencyComponent } from "src/app/converter/showing-currency/showing-currency.component";
import { DescriptionComponent } from "src/app/description/description.component";
import { IncreaseHeightDirective } from "src/app/increase-height.directive";
import { MenuComponent } from "./menu.component";

@NgModule({
  declarations:[
    MenuComponent,
    DescriptionComponent,
    ConverterComponent,
    ShowingCurrencyComponent,
    CurrencyListComponent,
    CurrencyItemComponent,
    IncreaseHeightDirective,


  ],

  imports:[
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule
  ],

  exports:[
    MenuComponent,
    DescriptionComponent,
    ConverterComponent,
    ShowingCurrencyComponent,
    CurrencyListComponent,
    CurrencyItemComponent,
    IncreaseHeightDirective,


  ]
})

export class MenuModule{


}
