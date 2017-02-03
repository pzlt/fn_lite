import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from '../component/dashboard/dashboard.component';
import { FlightsComponent }      from '../component/flights/flights.component';
import { FlightSearchComponent }  from '../component/flight-search/flight-search.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'flight-search',  component: FlightSearchComponent },
  { path: 'flights',     component: FlightsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
