import { Component } from '@angular/core';

import { Country } from '../../interfaces/country';
import { countriesService } from '../../services/countries.service';

@Component({
  selector: 'app-byregion-page',
  templateUrl: './byregion-page.component.html',
  styles: [
  ]
})
export class ByregionPageComponent {
  public countries: Country[]=[];
  constructor( private countriesService: countriesService ) {}

  searchByRegion(region: string): void{
    this.countriesService.searchRegion( region )
    .subscribe( countries=> {
      this.countries = countries;

    })
  }
}
