export interface IAction {
  type: string;
  payload?: any;
};

export const INIT_FLIGHTS = 'App/INIT_FLIGHTS';
export const SET_FLIGHTS = 'App/SET_FLIGHTS';
export const SELECT_FLIGHT = 'App/SELECT_FLIGHT';
export const UNSELECT_FLIGHT = 'App/UNSELECT_FLIGHT';
