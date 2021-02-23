import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbsComponent } from './internal/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './internal/header/header.component';
import { NationalComponent } from './national/national.component';
import { RegionalComponent } from './regional/regional.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NationalComponent,
    RegionalComponent,
    BreadcrumbsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
