import {BehaviorSubject, Observable} from 'rxjs/Rx';
import {IAction} from '../actions/actions';
import {AppState} from './app-state';
import {calculateFlightState} from '../reducers/flight.reducer';

function wrapIntoBehaviorSubject( init: any, obs: any ) {
    const res = new BehaviorSubject(init);
    obs.subscribe((s: any) => res.next(s));
    return res;
}

export function appStateFactory(initialState: AppState,
    actions: Observable<IAction>): Observable<AppState> {

    let appStateObservable = actions.scan( (state: AppState, action: any) => {

        console.log(new Date());
        console.log('Processing action: ');
        console.log(action);

        let newState: AppState = {
          // uiState: calculateUiState(state.uiState, action),
          flightState: calculateFlightState(state.flightState, action)
        };

        // console.log('New App State: ');
         console.log(newState);
         console.log('\n');

        return newState;

    } , initialState)
    .share();

    return wrapIntoBehaviorSubject(initialState, appStateObservable);
}
