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

app.get('/bodyparts', function(request, response) {
	response.status(200).json(hangmen);
});

words = ["carpet", "doghouse", "concrete", 
	"chocolate", "doughnut", "napikn"
];

hangmen = [{img: 'images/man1.png'}, {img: 'images/man2.png'}, {img: 'images/man3.png'}, {img: 'images/man4.png'}, {img: 'images/man5.png'}, {img: 'images/man6.png'}
];

app.listen(5000, function() {
	console.log('Listening on localhost:5000');
});