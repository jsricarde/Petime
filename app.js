var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cfenv = require("cfenv")
var appEnv = cfenv.getAppEnv();
var app = express();
var http = require('http').Server(app);

// all environments
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
 
// serve up static assets
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'bower_components')));

 
http.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
  console.log("server starting on " + appEnv.port);
});

module.exports = app;