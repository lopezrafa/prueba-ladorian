import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  country: any;
  continent: any;
  continents: any =  [];
  p: number = 1;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.getCountries();

  }

  // Obtenemos países y añadimos continentes para el selector
  getCountries(){
    this.dataService.getCountries().subscribe((data) => {
      this.countries = data;
      this.countries.forEach(element => {
        if(!this.continents.includes(element.continent)){
          this.continents.push(element.continent);
        }
      });

    })
  }

  // Buscador reactivo de país
  SearchByCountry(){
    if ( this.country == ''){
      this.ngOnInit();
    }else{
      this.countries = this.countries.filter((data) => {
        return data.country.toLocaleLowerCase().match(this.country.toLocaleLowerCase());
      })
    }

  }

  // Buscador por continente

  SearchByContinent(){

    

      this.countries = this.countries.filter((data) => {
        
        return data.continent.match(this.continent);
        
      })



  }

}
