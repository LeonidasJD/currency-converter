import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { ConverterComponent } from './converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
