import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './pages/table/table.component';
import {TableService} from "../services/table.service";
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {ButtonModule} from "primeng/button";
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {NzGridModule} from "ng-zorro-antd/grid";
import { FormComponent } from './pages/form/form.component';
import {ThousandSeparatorPipe} from "./pipes/thousand-separator.pipe";
import { DateInputComponent } from './ layout/date-input/date-input.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    ThousandSeparatorPipe,
    DateInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzTableModule,
    NzGridModule,
    ReactiveFormsModule,
  ],
  providers: [TableService, { provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
