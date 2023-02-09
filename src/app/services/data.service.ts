import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';
import { filter } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  baseURL: string = 'https://websites.ladorianids.com/resources/prueba/list-countries.json';

  getCountries(){
    return this.http.get<Country[]>(this.baseURL);
  }

}
