import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HttpService} from './common/services/http.service';
import {SpinnerService} from './common/services/spinner.service';
import {CommonService} from './common/services/common.service';
import {PagerService} from './common/services/pager.service';
import {WindowRef} from './common/services/window-ref.service';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {ErrorComponent} from './error/error.component';

import {PaginationComponent} from './pagination/pagination.component';

import {APP_CONSTANTS_TOKEN, APP_CONSTANTS} from './constants/app.constants';
import {IAppConstants} from './constants/app.constants.interface';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [{provide: APP_CONSTANTS_TOKEN, useValue: APP_CONSTANTS},
    HttpService,
    SpinnerService,
    CommonService,
    WindowRef,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
