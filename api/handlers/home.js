
/****GET Handler functions*****/
/**
 * Handles the GET request to view
 * @param {Object} request Hapi request
 * @param {Object} reply Hapi reply
**/
function helloHandler(request, reply) {
			return reply({result: 'hello'});
};


/****GET config objects*****/
module.exports.helloConfig = {
	// pre: , adding any validation here
	handler: helloHandler,
};
