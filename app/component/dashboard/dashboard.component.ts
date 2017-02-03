import { Component, OnInit } from '@angular/core';

import { Flight } from '../../data/flight';
import { FlightService } from '../../service/flight.service';


@Component({
  selector: 'my-dashboard',
  template: `
  <h3>Last Top Flight Results From</h3>
  <div class="grid grid-pad">
    <a *ngFor="let flight of flights"  [routerLink]="['/detail', flight.id]"  class="col-1-4">
      <div class="module flight">
        <h4>{{flight.from}}</h4>
      </div>
    </a>
  </div>
`,
  // './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.flightService.getFlights()
      .then(flights => this.flights = flights.slice(1, 5));
  }
}
