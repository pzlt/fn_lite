const Home = require('./handlers/home');
const APIError = require('./handlers/api-error');
const Flights = require('./handlers/flight-search');
const inert = require('inert');
//const Router = require('./routes/api-routes');

exports.register = (plugin, options, next) => {

  const routes = [
    // {
    //   method: ['GET','POST'],
    //   path: '/{param*}',
    //   handler: function(request, reply){
    //     reply.file('client/index.html');
    //   }
    // },
		{ method: 'GET',
			path: '/',
			config: Home.helloConfig
		},
    { method: 'GET',
      path: '/flights',
      config: Flights.searchConfig
    },
    { method: 'POST',
      path: '/book',
      config: Flights.bookConfig
  },
		{ method: 'GET',
			path: '/{path*}',
			config: APIError.notFound
		}
	];

  plugin.route(routes);

 next();
};

exports.register.attributes = {
  name: 'api',
  version: '0.0.1'
};
