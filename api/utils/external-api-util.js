const Rx = require('rxjs/Rx');
  /**
  * makes the api call to search
  *
  * @param {String} action The doWork action to perform
  * @param {Object} [params] Map of strings or objects
  * @return {Observable} Response
  */
exports.search = function search(url, action, params) {
    return APIrequest('GET',url + '/api/' + action, params);
}


/**
* makes the api call to search
*
* @param {String} action The doWork action to perform
* @param {Object} [params] Map of strings or objects
* @return {Observable} Response
*/
exports.book = function book(url, action, params) {
  return APIrequest('POST',url + '/api/' + action, params);
}

///////////////////////////////////////////////////////////
/**
 * A module function not exposed for public use.
 *
 * This method is intended for encoding *key* or *value*
 * parts of query component. We need a custom
 * method because encodeURIComponent is too aggressive
 * and encodes stuff that doesn't have to be
 * encoded per http://tools.ietf.org/html/rfc3986:
 *    query       = *( pchar / '/' / '?' )
 *    pchar         = unreserved / pct-encoded / sub-delims / ':' / '@'
 *    unreserved    = ALPHA / DIGIT / '-' / '.' / '_' / '~'
 *    pct-encoded   = '%' HEXDIG HEXDIG
 *    sub-delims    = '!' / '$' / '&' / ''' / '(' / ')'
 *                     / '*' / '+' / ',' / ';' / '='
 */
function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).
         replace(/%40/gi, '@').
         replace(/%3A/gi, ':').
         replace(/%24/g, '$').
         replace(/%2C/gi, ',').
         replace(/%20/g, (pctEncodeSpaces ? '%20' : '+'));
}

  /**
  * Converts parameter object into an http request string
  *
  * @param {Object} [params] Map of strings or objects
  * @return {String} Generated string
  */
function convertParams(params) {
    const parts = [];

    for (let prop in params) {
      if (params.hasOwnProperty( prop )) {
        if (Array.isArray(params[prop])) {
          for (let detail in params[prop]) {
            parts.push(encodeUriQuery(prop, true) +
              '=' + encodeUriQuery(params[prop][detail], true));
          }
        } else {
          parts.push(encodeUriQuery(prop, true) + '=' +
           encodeUriQuery(params[prop], true));
        }
      }
    }
    return parts.join('&');
}

  /**
  * POST command
  *
  * @param {String} The url
  * @param {Object} [params] Map of strings or objects
  * @param {Object} [config] Optional configuration object describing the request
  * @return {observable}
  */
function APIrequest(actionMethod, url, params) {
    // TODO this is all untested
    let options = {};

    params = params || {};
    params = convertParams(params);

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json'
    };

    options.method =  actionMethod; //this is where it's going to be action POST/GET
    options.headers = headers;
    options.body = params;
    options.credentials = 'same-origin';
    options.url = url;


      // function callback(error, response, body) {
      //   if (!error && response.statusCode == 200) {
      //     var info = JSON.parse(body);
      //     console.log(info.stargazers_count + " Stars");
      //     console.log(info.forks_count + " Forks");
      //     console.log(response);
      //   }
      // }
      //
      // Request(options, callback);

    return Rx.Observable
        .fromPromise(makeRequest(url, options)
        .then((result) => {
          // console.log(result);
          // handle response
          return result.response;

        })
       .catch(function(error) {
         console.log('error', error);
         // TODO: have to update the errors
         throw error;
       })
      );

      nodeRest.client.get(url + '?' + params, function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
    });
    return response;

  }

function makeRequest(url, opts) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(opts.method, url);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {

        const body = 'response' in xhr ? xhr.response : xhr.responseText;
        const url = 'responseURL' in xhr ? xhr.responseURL : '';

        // Response headers parsing, should be moved out
        var headers = {};
        var headersArray = (xhr.getAllResponseHeaders() || '').trim().split('\n');
        headersArray.forEach(function(header) {
          var split = header.trim().split(':');
          var key = split.shift().trim();
          var value = split.join(':').trim();
          headers[key] = value;
        })

        var response = {
          type:       'default',
          status:     xhr.status,
          ok:         xhr.status >= 200 && this.status < 300,
          statusText: xhr.statusText,
          headers:    headers,
          url:        url,
          response:   body
        }

        resolve(response);

      } else {
        reject({
          status: xhr.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: xhr.status,
        statusText: xhr.statusText
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach(function (key) {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }
    var params = opts.body;
    // We'll need to stringify if we've been given an object
    // If we have a string, this is skipped.
    if (params && typeof params === 'object') {
      params = Object.keys(params).map(function (key) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
      }).join('&');
    }

    // TODO add opts.credentials handling

    xhr.send(params);
  });
}
