import { NgModule } from '@angular/core';
import { SharedModule } from './_shared/shared.module';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SiteModule } from './site/site.module';
import { MatIconRegistry, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/alert.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/index';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    SiteModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
