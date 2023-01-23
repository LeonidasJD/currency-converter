import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { ConverterComponent } from './converter/converter.component';
import { ShowingCurrencyComponent } from './converter/showing-currency/showing-currency.component';
import { CurrencyListComponent } from './converter/currency-list/currency-list.component';
import { CurrencyItemComponent } from './converter/currency-list/currency-item/currency-item.component';
import { FormsModule } from '@angular/forms';


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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
