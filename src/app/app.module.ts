import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AlertifyService } from './Services/alertify.service';
import { PaginationModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsentService } from './Services/consent.service';
import { ConsentsComponent } from './consents/consents.component';
import { FlexLayoutModule} from '@angular/flex-layout';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { GiveConsentComponent } from './give-consent/give-consent.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsentsComponent,
    GiveConsentComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    PaginationModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ConsentService, AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
