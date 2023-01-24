import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { ConverterComponent } from './converter/converter.component';
import { ShowingCurrencyComponent } from './converter/showing-currency/showing-currency.component';
import { CurrencyListComponent } from './converter/currency-list/currency-list.component';
import { CurrencyItemComponent } from './converter/currency-list/currency-item/currency-item.component';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataBaseService } from './data-base.service';
import { HomeComponent } from './home/home.component';



const appRoutes: Routes = [

    {path: ':id', component: ShowingCurrencyComponent},



]

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    ConverterComponent,
    ShowingCurrencyComponent,
    CurrencyListComponent,
    CurrencyItemComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)


  ],
  providers: [DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
