import {List} from 'immutable';

import {FlightState,
        initialFlightState} from '../state/flight-state';
import {FNFlight} from '../models/fnflight';
import {
    INIT_FLIGHTS,
    SET_FLIGHTS,
    SELECT_FLIGHT,
    UNSELECT_FLIGHT} from '../actions/actions';

export function calculateFlightState(state: FlightState, action: any): FlightState {

    if (!state || typeof state === 'undefined') {
        return Object.assign({}, initialFlightState);
    }

    switch (action.type) {

        case SET_FLIGHTS:
            return Object.assign({}, state,
                {flights: List<FNFlight>(action.payload.flights)});

        case SELECT_FLIGHT:
            return Object.assign(
                {},
                state,
                  {
                      selectedFlightId: action.payload.flights.id,
                  }
              );
        case UNSELECT_FLIGHT:
        case INIT_FLIGHTS:
              return Object.assign(
                {},
                state,
                {
                    selectedFlightId: ''
                  }
                );

        default:
            return state;

    }

}
