import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './@theme/theme.module';
import { LandingModule } from './landing/landing.module';
import { NbThemeModule } from '@nebular/theme';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NbThemeModule.forRoot({ name: 'default' }),
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    PagesModule,
    ThemeModule.forRoot(),
    AuthModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
