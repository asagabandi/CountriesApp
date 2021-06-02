import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/HomePage/home-page.component';
import { DetailPageComponent } from './Components/DetailPage/detail-page.component';
import { CountryComponent } from './Components/Country/country.component';
import { GlobalNavComponent } from './Components/GlobalNav/global-nav.component';
import { RegionDropdownComponent } from './Components/RegionDropdown/region-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailPageComponent,
    CountryComponent,
    GlobalNavComponent,
    RegionDropdownComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }