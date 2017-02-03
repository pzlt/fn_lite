const ExternalUtil = require('../utils/external-api-util');
const jf = require('jsonfile');


/****GET Handler functions*****/
/**
 * Handles the GET request to view
 * @param {Object} request Hapi request
 * @param {Object} reply Hapi reply
**/
function searchHandler(request, reply) {
  //get list of api

 jf.readFile('../../assets/ext_api_list.json', function(err, obj) {
   // obj contains JSON data
   let API_list = JSON.parse(obj);
 });

/// get parameters from the request handler for the values from the UI

 // make calls to all api in async call
 // return all trhe api results

 //this is temporary. Will need a function to create the URI with the API details
  const API1 = 'https://immense-headland-94059.herokuapp.com';
  const api1_params = {
          'dep' : '2001-12-31',
          'from': 'XYZ',
          'to'  : 'NYC'
        }
  return ExternalUtil.search(API1, 'flights', api1_params);
};


/**
 * Handles the POST request to view
 * @param {Object} request Hapi request
 * @param {Object} reply Hapi reply
**/
function bookHandler(request, reply) {
  // get parameteres on the flight details from the request
  // get the api_id from the request
  // get the API details from the memory
 // return all trhe api results
  const API1 = 'https://immense-headland-94059.herokuapp.com';
  const api1_params = {
          'dep' : '2001-12-31',
          'from': 'XYZ',
          'to'  : 'NYC'
        }
  return ExternalUtil.book(API1, 'book', api1_params);
};

/****GET config objects*****/
module.exports.searchConfig = {
	// pre: , adding any validation here
	handler: searchHandler,
};

module.exports.bookConfig = {
	// pre: , adding any validation here
	handler: bookHandler,
};
