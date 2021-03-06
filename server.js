var express 	 = require('express'),
		path 			 = require('path'),
		logger 		 = require('morgan'),
		bodyParser = require('body-parser');
		faker 		 = require('faker');

var app = express();
app.use(express.static('public'));

app.get('/', function(require, response) {
	response.render('index.html');
});

app.get('/words', function(request, response) {
	grabWords();
	var randomWord = words[Math.floor(Math.random() * words.length)];;
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

words = [];

grabWords = function() {
		for(i = 50; i >= 0; i--) {
			words.push(faker.hacker.noun());
			words.push(faker.hacker.verb());
			words.push(faker.hacker.ingverb());
		};
};

hangmen = [{img: 'images/man1.png'}, {img: 'images/man2.png'}, {img: 'images/man3.png'}, {img: 'images/man4.png'}, {img: 'images/man5.png'}, {img: 'images/man6.png'}
];

var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log('Listening on localhost:3000');
});