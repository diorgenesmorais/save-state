import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './modules/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './modules/core-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppReducers } from './core/store/app.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    RouterModule,
    CoreRoutingModule,
    StoreModule.forRoot(AppReducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
