var express 	 = require('express'),
		path 			 = require('path'),
		logger 		 = require('morgan'),
		bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});

app.get('/words', function(request, response) {
	var randomWord = words[Math.floor(Math.random() * words.length)];
	var characters = randomWord.length;
	String.prototype.repeat = function(characters) {
      return new Array(characters + 1).join(this);
      }
  var hiddenWord = ("_".repeat(characters));
  game = {word: randomWord, state: hiddenWord};
	response.status(200).json(game);
});

words = ["carpet", "doghouse", "concrete", 
	"chocolate", "doughnut", "napikn"
];

hangmen = ["images/man1.png", "images/man2.png", "images/man3.png", "images/man4.png", "images/man5.png", "images/man6.png", ]

app.listen(5000, function() {
	console.log('Listening on localhost:5000');
});