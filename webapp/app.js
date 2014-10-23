/*
 * app.js - Simple express server
 */



// ------------ BEGIN MODULE SCOPE VARIABLES --------------
'use strict';
var
    http = require( 'http' ),
    express = require( 'express' ),
    app = express(),
    server = http.createServer( app );
// ------------- END MODULE SCOPE VARIABLES ---------------
// ------------- BEGIN SERVER CONFIGURATION ---------------
app.get( '/', function ( request, response ) {
    response.send( 'Hello Express' );
});
// -------------- END SERVER CONFIGURATION ----------------
// ----------------- BEGIN START SERVER -------------------
server.listen( 3000 );
console.log(
    'Express server listening on port %d in %s mode',
    server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------