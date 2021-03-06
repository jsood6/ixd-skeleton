 
/**
 * Module dependencies.
 */



var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var loginPage = require('./routes/loginPage');
var index = require('./routes/index');
var myProducts = require('./routes/myProducts');
var video = require('./routes/video'); 
var addProducts = require('./routes/addProducts');
var addLooks = require('./routes/addLooks');
var searchPicFile = require('./routes/searchPicFile');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
} 

app.get('/', loginPage.view);
app.get('/viewAlt', loginPage.viewAlt);
app.get('/index', index.view);
app.get('/myProducts', myProducts.view);
app.get('/video/:id', video.view);
app.get('/addProducts', addProducts.addProducts);
app.get('/addLooks', addLooks.addLooks);
app.get('/searchPicFile', searchPicFile.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
