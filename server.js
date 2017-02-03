'use strict';

const Glue = require('glue');
const manifest = require('./config/manifest');
const inert = require('inert');
const ssf_routes = require('./config/server_staticfiles_routes')
const options = {
    relativeTo: process.cwd() //+ '/' //' lib/modules'
};

Glue.compose(manifest, options, (err, server) => {
  if (err) {
    console.log('server.register err:', err);
  }
  server.route(ssf_routes);

  server.start(() => {
    server.log('info', 'Server running at: ' + server.info.uri);
    console.log('Hapi  Server is listening on ' + server.info.uri.toLowerCase());
  });
});
