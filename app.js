var express = require('express');
var path = require('path');
var connect = require('connect');
var serveStatic = require('serve-static');
var host = (process.env.VCAP_APP_HOST || 'localhost');
var cfenv = require("cfenv")
var appEnv = cfenv.getAppEnv();
var app = express();
console.log(appEnv);
connect().use(serveStatic(__dirname)).listen(appEnv.port,host);
console.log("Server runing in port: "+appEnv.port+" with host: "+host);
/*app.set('app', path.join(__dirname, 'app'));
*/   
/*console.log(__dirname);
app.use(express.static(__dirname + '/app')); 
/*app.configure(function() {  
    // Localización de los ficheros estÃ¡ticos
    app.use(express.static(__dirname + '/app'));
    // Muestra un log de todos los request en la consola        
    app.use(express.logger('dev')); 
    // Permite cambiar el HTML con el método POST                   
    app.use(express.bodyParser());
    // Simula DELETE y PUT                      
    app.use(express.methodOverride());                  
});*/
/*app.get('*', function(req, res) {  
    res.sendFile('./app/index.html');                
});*/

/*var http = require('http').Server(app);
app.listen(appEnv.port, '0.0.0.0', function() {
	// print a message when the server starts listening
  console.log("server starting on " + appEnv.port);
});

module.exports = app;*/