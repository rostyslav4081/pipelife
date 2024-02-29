import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {HomeComponent} from './home/home.component';
import { DocumentComponent } from './document/document.component';
import { FormComponent } from './form/form.component';
import { LastComponent } from './last/last.component';
import { NaladkaComponent } from './naladka/naladka.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { SignatureComponent } from './signature/signature.component';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DocumentComponent,
    FormComponent,
    LastComponent,
    NaladkaComponent,
    QrcodeComponent,
    SignatureComponent,
    StartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
