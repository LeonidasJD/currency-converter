import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { ShowingCurrencyComponent } from './converter/showing-currency/showing-currency.component';
import { CurrencyListComponent } from './converter/currency-list/currency-list.component';
import { CurrencyItemComponent } from './converter/currency-list/currency-item/currency-item.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataBaseService } from './data-base.service';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { MenuComponent } from './menu/menu/menu.component';
import { GuardService } from './guard.service';
import { FooterComponent } from './footer/footer.component';
import { IncreaseHeightDirective } from './increase-height.directive';
import { TranslateModule,TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MenuModule } from './menu/menu/menu.modul';
import { HomeModule } from './home/home.module';
import { LazyComponent } from './menu/menu/lazy/lazy.component';




export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}







const appRoutes: Routes = [

{path: '', redirectTo:'/main-menu', pathMatch:'full'},
{path: 'main-menu', component:MenuComponent,canActivate:[GuardService],
  children:[
    {path:':id',component:ShowingCurrencyComponent},
]},
{path: 'home', component:HomeComponent}




]

@NgModule({
  declarations: [
    AppComponent,
    //DescriptionComponent,
    //ConverterComponent,
    //ShowingCurrencyComponent,
    //CurrencyListComponent,
    //CurrencyItemComponent,
    //HomeComponent,
   // MenuComponent,
    FooterComponent,
    //LazyComponent,
    //IncreaseHeightDirective,









  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    HomeModule,
    RouterModule.forRoot(appRoutes),
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory ,
        deps:[HttpClient]
      }
    })



  ],
  providers: [DataBaseService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
