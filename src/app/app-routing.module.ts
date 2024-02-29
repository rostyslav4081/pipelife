import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {StartComponent} from "./start/start.component";
import {QrcodeComponent} from "./qrcode/qrcode.component";
import {NaladkaComponent} from "./naladka/naladka.component";
import {FormComponent} from "./form/form.component";
import {DocumentComponent} from "./document/document.component";
import {SignatureComponent} from "./signature/signature.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'start', component: StartComponent},
      {path: 'qrcode', component: QrcodeComponent},
      {path: 'naladka', component: NaladkaComponent},
      {path: 'form', component: FormComponent},
      {path: 'document', component: DocumentComponent},
      {path: 'signature', component: SignatureComponent},
      {path: 'last', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
