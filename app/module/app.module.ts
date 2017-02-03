import { NgModule, ElementRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from '../route/app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../service/in-memory-data.service';

import { AppComponent }         from '../component/app/app.component';
import { DashboardComponent }   from '../component/dashboard/dashboard.component';
import { FlightsComponent }      from '../component/flights/flights.component';
import { FlightSearchComponent }  from '../component/flight-search/flight-search.component';
import { FlightService }          from '../service/flight.service';

import { FlightsAction }          from '../actions/flights.action';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    FlightsComponent,
    FlightSearchComponent
  ],
  providers: [ FlightService,
    FlightsAction
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
