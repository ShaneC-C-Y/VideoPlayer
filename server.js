var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
  	Task = require('./api/models/todoListModel'),
  	bodyParser = require('body-parser'),
  	path = require('path'),
  	http = require('http'),
  	debug = require('debug')('toolListApi:server');

  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./api/routes/todoListRoutes');
routes(app);


// listen directly on express.app
// app.listen(port);

// listen through http.server
var server = http.createServer(app);
server.listen(port);
server.on('listening', onListening);

// console.log('todo list RESTful API server started on: ' + port);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
