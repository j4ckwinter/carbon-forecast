import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbsComponent } from './internal/breadcrumbs/breadcrumbs.component';
import { ButtonComponent } from './internal/button/button.component';
import { HeaderComponent } from './internal/header/header.component';
import { TextInputComponent } from './internal/text-input/text-input.component';
import { NationalComponent } from './national/national.component';
import { RegionalComponent } from './regional/regional.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    ButtonComponent,
    HeaderComponent,
    HomeComponent,
    NationalComponent,
    RegionalComponent,
    TextInputComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
