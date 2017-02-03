
/**
 *
 * a Hapi plug-in module containing  web UI
 * @module app
 */

/*
 * local
 * require modules
 * local modules and files can have relative path as it's contained within the module.
 */
var inert = require('inert');

exports.register = (plugin, options, next) => {
  const routes = [
    {
      method: ['GET','POST'],
      path: '/',
      handler: function(request, reply){
        reply.file('index.html');
      }
    },
	];

  plugin.route(routes);

 next();
};

exports.register.attributes = {
    name: 'app'
};
