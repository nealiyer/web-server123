var express = require ('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
var middleware = require('./middleware.js')


app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication,  function(req,res){

res.send('About Us!');
} );

var correctedpath = path.normalize(__dirname); 

app.use(express.static( correctedpath +'/public'));
app.listen(PORT, function(){
	console.log('Express Server Started on port '+ PORT + "!");
});

