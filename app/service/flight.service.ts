import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Flight } from '../data/flight';

@Injectable()
export class FlightService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private flightAPIUrl = 'api/flights';  // URL to web api

  constructor(private http: Http) { }

  getFlights(): Promise<Flight[]> {
    return this.http.get(this.flightAPIUrl)
               .toPromise()
               .then(response => response.json().data as Flight[])
               .catch(this.handleError);
  }

  getFlight(id: number): Promise<Flight> {
    const url = `${this.flightAPIUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Flight)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.flightAPIUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
