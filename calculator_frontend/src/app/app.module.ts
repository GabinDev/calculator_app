import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material/material.module';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { BottomSheetComponent } from './components/header-component/header-component.component';
import { CalculatorComponentComponent } from './components/calculator-component/calculator-component.component';
import { HistoryComponentComponent } from './components/history-component/history-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DialogResult } from './components/calculator-component/dialog-result';
import { ItemHistory } from './components/history-component/item-history';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    HomePageComponent,
    HeaderComponentComponent,
    BottomSheetComponent,
    CalculatorComponentComponent,
    HistoryComponentComponent,
    DialogResult,
    ItemHistory
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
