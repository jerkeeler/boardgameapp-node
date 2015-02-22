// Start up express and import routes
var express = require("express");
var server = express();
var routes = require("./routes")(server);

// Define where static files are located for availability by the public
server.use(express.static(__dirname+'/public'));

// Define the listening port and start the server
var port = 3000;
server.listen(port);
console.log("Server is now listening on port " + port);
