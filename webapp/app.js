/*
 * app.js - Express server with middleware
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
app.configure( function () {
    app.use( express.bodyParser() );
    app.use( express.methodOverride() );
});
app.configure( 'development', function () {
    app.use( express.logger() );
    app.use( express.errorHandler({
        dumpExceptions : true,
        showStack : true
    }) );
});
app.configure( 'production', function () {
    app.use( express.errorHandler() );
});
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