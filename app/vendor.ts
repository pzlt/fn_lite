// For vendors for example jQuery, Lodash, angular2-jwt
// just import them here unless you plan on
// chunking vendors files for async loading.
// You would need to import the async loaded vendors
// at the entry point of the async loaded file.
// Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// css
// TODO require bootstrap here. Was having problem with webpack css-loader.

// sass
// require('./sass/snackbar.scss');
// require('./sass/angular-material.scss');


// Polyfills
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

// Typescript emit helpers polyfill

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

// Angular 2 Material 2
// import '@angular2-material/button';
// import '@angular2-material/card';
// import '@angular2-material/checkbox';
// import '@angular2-material/sidenav';
// import '@angular2-material/input';
// import '@angular2-material/list';
// import '@angular2-material/radio';
// import '@angular2-material/progress-bar';
// import '@angular2-material/progress-circle';
// import '@angular2-material/toolbar';
// look in src/platform/angular2-material2 and src/platform/providers

if (process.env.ENV === 'production') {
    // Production
} else {
  // Development

}
