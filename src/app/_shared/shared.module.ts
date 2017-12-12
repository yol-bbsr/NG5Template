import { HttpClientModule } from '@angular/common/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { MaterialModule } from './material.module';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from './../_services/alert.service';
import { fakeBackendProvider } from '../_helpers/index';
import { ConfigService } from '../_services/config.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    HttpModule,
    HttpClientModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ fakeBackendProvider,
        MockBackend,
        BaseRequestOptions,
        ConfigService,
        UserService,
        AlertService,
        AuthenticationService ]
    };
  }
}
