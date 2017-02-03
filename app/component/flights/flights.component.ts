import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Flight }                   from '../../data/flight';
import { FlightService }            from '../../service/flight.service';
@Component({
  selector: 'my-flights',
  // templateUrl: './flights.component.html',
  template: `
  <h2>Flight Search Results:</h2>
  `,
  styleUrls: [ './flights.component.css' ]
})

export class FlightsComponent implements OnInit {
  flights: Flight[];
  selectedFlight: Flight;
  constructor(
    private flightService: FlightService,
    private router: Router) { }

  getFlights(): void {
    this.flightService
        .getFlights()
        .then(flights => this.flights = flights);
  }

  add(element: Flight): void {
    // name = name.trim();
    // if (!name) { return; }
    // this.flightService.create(element)
    //   .then(element => {
    //     this.flights.push(element);
    //     this.selectedFlight = null;
    //   });
  }

  delete(element: Flight): void {
    this.flightService
        .delete(element.id)
        .then(() => {
          this.flights = this.flights.filter(h => h !== element);
          if (this.selectedFlight === element) { this.selectedFlight = null; }
        });
  }
  ngOnInit(): void {
    this.getFlights();
  }

  onSelect(flight: Flight): void {
    this.selectedFlight = flight;
  }

  gotoDetail(): void {
    this.router.navigate(['/flight-detail', this.selectedFlight.id]);
  }
}
