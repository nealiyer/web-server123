var express = require ('express');
var path = require('path');
var app = express();

var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();

	},
	logger: function(req, res, next){
		
		console.log('Request: ' + new Date().toString()+ ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

app.use(middleware.logger);
// app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication,  function(req,res){

res.send('About Us!');
} );

var correctedpath = path.normalize(__dirname); 

app.use(express.static( correctedpath +'/public'));
app.listen(3000, function(){
	console.log('Express Server Started!');
});

