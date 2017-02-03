## Core Stack

- **Node.js** - [http://nodejs.org/](http://nodejs.org/)
- **Hapi** - [http://hapijs.com/](http://hapijs.com/)

## Plugins

- list the of all the plugins used
- **app** - this is the client side code in ng2, this will have all the UI And the calls to the server api
- **api** - this is the server side api, this will get the calls from the UI and will do extended search to all the external
api's listed.
- **glue** - composer for hapi server

## Project Structure

- still need to update
- refactor the code and write it out

## Project Goal

- develop a light weight flight search UI that calls our API which in turns does a search on the listed APIs with each of it's own configuration and api data format
- the external API calls are done in asych and should populate the UI as the results come.
- add the results to the list that is clickable.
- When the search result is selected and select Book, the post call is made to the api on the server.
- that API call will make a booking request to the external api
