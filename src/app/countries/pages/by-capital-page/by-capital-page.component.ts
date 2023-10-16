import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { countriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesService: countriesService ) {}

  searchByCapital(term: string): void{
    this.countriesService.searchCapital( term )
    .subscribe( countries => {
      this.countries = countries;

    })
  }
}
