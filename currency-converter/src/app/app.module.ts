import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { ConverterComponent } from './converter/converter.component';
import { ShowingCurrencyComponent } from './converter/showing-currency/showing-currency.component';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyItemComponent } from './currency-item/currency-item.component';


@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    ConverterComponent,
    ShowingCurrencyComponent,
    CurrencyListComponent,
    CurrencyItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
