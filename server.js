var express 	 = require('express'),
		path 			 = require('path'),
		logger 		 = require('morgan'),
		bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});

app.get('/words', function(require, response) {
	response.status(200).json(words);
});


words = [{name: "carpet"},
	{name: "wall"},
	{name: "ceiling"},
	{name: "floor"},
	{name: "chair"}
];

app.listen(5000, function() {
	console.log('Listening on localhost:5000');
});