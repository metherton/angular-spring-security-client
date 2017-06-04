import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions, RequestOptions, Headers } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppLogoutComponent } from './app-logout/app-logout.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdAutocompleteModule, MdInputModule, MdCardModule} from '@angular/material';
import 'hammerjs';

export class MyOptions extends BaseRequestOptions {
  headers:Headers=new Headers({
    'X-Requested-With': 'XMLHttpRequest',
    'Authorization': 'Basic dXNlcjpwYXNzd29yZA==',
    'X-Auth-Token': '22ea59a5-00eb-4cfc-a40d-f02f69225aa6'
  });
}

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppLoginComponent,
    AppLogoutComponent,
    AppNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdAutocompleteModule, MdInputModule, MdCardModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
