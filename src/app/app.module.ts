import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NationalComponent } from './national/national.component';
import { RegionalComponent } from './regional/regional.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegionalComponent,
    NationalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
