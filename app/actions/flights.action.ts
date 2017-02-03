import {Injectable, Inject} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {List} from 'immutable';

import { Flight }                   from '../data/flight';
import {FNFlight} from '../models/fnflight';

import {dispatcher, state} from '../utils/di-tokens';
import {AppState} from '../state/app-state';
import {FlightService} from '../service/flight.service';
import {FlightSearchService} from '../service/flight-search.service';
import {
    INIT_FLIGHTS,
    // SET_DETAIL_FLIGHT,
    SET_FLIGHTS,
    SELECT_FLIGHT,
    UNSELECT_FLIGHT} from './actions';

@Injectable()
export class FlightsAction {
    constructor(
        private _flightService: FlightService,
        private _flightSearchService: FlightSearchService,
        @Inject(dispatcher) private _dispatcher: any,
        @Inject(state) private _appState: BehaviorSubject<AppState>) {}


    // initFlights(pageSettings) {
    //     setTimeout(() => {
    //         this._dispatcher.next({
    //           type: INIT_FLIGHTS,
    //           payload: pageSettings
    //         });
    //     });
    // }

    hasFlightsBeenFetched(): boolean {
      const flights = this._appState.getValue().flightState.FNFlights;
      return typeof flights !== 'undefined' && flights.size > 0;
    }

    searchFlights(flight: Flight) {
        if (this.hasFlightsBeenFetched()) {
            return Observable.of(false);
        }

        // this._flightSearchService
        //     .search(flight)
        //     // .map((fnflights: Array<any>) => List<FNFlight>fnflight
        //     //     // List<FNFlight>(FNFlight
        //     //     //     .map(this.flightToFNFlightsFactory.bind(this))
        //     //     // console.log(fnflights)
        //     //     // )
        //     // )
        //     .subscribe(
        //       (fnflights: List<FNFlight>) => {
        //         this.setFnFlights(fnflights);
        //       },
        //       err => {
        //           console.log('Error fetching orders', err);
        //       }
        //     );
    }

    setFlights(FNFlights: List<FNFlight>) {
        this._dispatcher.next({
            type: SET_FLIGHTS,
            payload: {FNFlights: FNFlights}
        });
    }

    setSelectedFlight(FNFlights: FNFlight) {
        this._dispatcher.next({
            type: SELECT_FLIGHT,
            payload: {FNFlights: FNFlights}
        });
    }

    unselectFlight() {
        this._dispatcher.next({
          type: UNSELECT_FLIGHT,
          payload: {}
        });
    }

    // get selectedFlight(): FNFlight {
    //     const selectedFlightId =
    //         this._appState.getValue().flightState.selectedFlightId;
    //     return this._appState.getValue().flightState.FNFlights
    //         .filter((FNFlight) => FNFlight.id === selectedFlightId)
    //         .first();
    // }


    // flightToFNFlightsFactory(flight, pledgesArr: Array<any>): FNFlight {
    // }

}
