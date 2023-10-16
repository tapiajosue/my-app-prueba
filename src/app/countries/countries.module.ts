import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CountriesRoutingModule } from './countries-routing.module';
import {
  ByCapitalPageComponent,
} from './pages/by-capital-page/by-capital-page.component';
import {
  ByCountryPageComponent,
} from './pages/by-country-page/by-country-page.component';
import {
  ByregionPageComponent,
} from './pages/byregion-page/byregion-page.component';
import {
  CountryPageComponent,
} from './pages/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';

@NgModule({
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByregionPageComponent,
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    SharedModule
  ],
  exports: [
    ByCapitalPageComponent
  ]
})
export class CountriesModule { }
