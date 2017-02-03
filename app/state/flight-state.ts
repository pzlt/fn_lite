import {List} from 'immutable';
import {FNFlight} from '../models/fnflight';


/**
* Flight State
*
* @param {List<FNFlight>}  list of the Flights
* @param {string} selectedFlgiht: id of selected Flight
*/
export class FlightState {

    constructor(public FNFlights: List<FNFlight>,
                public selectedFlightId: string) {}
}

export const initialFlightState = new FlightState(undefined, '');
