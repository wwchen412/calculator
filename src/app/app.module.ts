import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorModule } from './calculator/calculator.module';
import { ExportNumService } from './calculator/export-num.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculatorModule
  ],
  providers: [ExportNumService],
  bootstrap: [AppComponent]
})

export class AppModule { }
