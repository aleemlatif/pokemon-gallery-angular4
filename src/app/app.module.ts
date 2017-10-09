import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpService } from './common/http.service';
import { SpinnerService } from './common/spinner.service';
import { CommonService } from './common/common.service';
import { WindowRef } from './common/window-ref.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';

import { APP_CONSTANTS_TOKEN, APP_CONSTANTS } from './constants/app.constants';
import { IAppConstants } from './constants/app.constants.interface';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { provide: APP_CONSTANTS_TOKEN, useValue: APP_CONSTANTS },
    HttpService,
    SpinnerService,
    CommonService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
