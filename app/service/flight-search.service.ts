import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Flight }           from '../data/flight';
@Injectable()
export class FlightSearchService {

  constructor(private http: Http) {}

  search(term: Flight): Observable<Flight[]> {
    return this.http
               .get(`api/flights?from=${term.from}&to=${term.to}&date=${term.date}`)
               .map(response => response.json().data as Flight[]);
  }

}
