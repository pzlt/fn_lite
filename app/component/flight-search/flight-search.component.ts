import 'rxjs/add/operator/switchMap';

import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { FormBuilder, Validators  } from '@angular/forms';

import { Flight }                   from '../../data/flight';

import { FlightsAction }   from '../../actions/flights.action';

@Component({
  selector: 'my-flight-search',
  template: `
  <nav>
  <form [formGroup]="flightSearchForm" (ngSubmit)="search($event)">
    <h2>Enter your flight details:</h2>
    <div>
      <label>Travel From: </label><br />
       <input formControlName="departure" type="string" placeholder="Departure City"/>
    </div>
    <div>
      <label>Destination: </label><br />
       <input formControlName="destination" type="string" placeholder="Destination City"/>
     </div>
     <div>
       <label>Travel date: </label><br />
        <input formControlName="date" type="date" placeholder="Departure Date"/>
      </div>
    <!-- <button (click)="seaRch()">Search</button> -->
    <button type="submit">Search</button>
  </form>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: [ './flight-search.component.css' ]
})
export class FlightSearchComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    private _flightsAction: FlightsAction,
    private _route: ActivatedRoute,
    private _location: Location,
    private _flight: Flight
  ) {}

  public flightSearchForm = this.fb.group({
    destination: ['destination', Validators.required],
    departure: ['departure', Validators.required],
    date: ['date', Validators.required]
  });

  ngOnInit(): void {
    // this.route.params
    //   .switchMap((params: Params) => this.flightService.getFlight())
    //   .subscribe(flight => this.flight = flight);
  }

  search(): void {
    // this.FlightSearchService.search(this.flight)
    //   .then(() => this.goBack());
    console.log(event);
    console.log(this.flightSearchForm.value);

    this._flight.from = this.flightSearchForm.value.departure;
    this._flight.to  = this.flightSearchForm.value.destination;
    this._flight.date = this.flightSearchForm.value.date;

    this._flightsAction.searchFlights(this._flight);
  }

  goBack(): void {
    this._location.back();
  }
}
