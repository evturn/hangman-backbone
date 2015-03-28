var UI = Backbone.View.extend({
	el: '#input',
	template: _.template($('#input-template').html()),
	events: {
    'click .sweet-alert'    : 'start',
    'keypress #input-field' : 'submit'
	},
	initialize: function() {
		this.start();
	},
  start: function() {
    game = new Game();
    var gameState = new GameState({model: game});
    var bodyPart = new BodyPart({img: 'images/man6.png'});
    var bodyPartView = new BodyPartView({model: bodyPart});
    $('#letters').empty();
    this.render();
  },
	render: function() {
		this.$el.html(this.template());
		return this;
	},
  submit: function(e) {
    if (e.which === 13) {
      var letter = String($('#input-field').val()).toLowerCase();
      console.log(letter);
      var used = game.get('used');
        if ($.inArray(letter, used) === -1) {
          used.push(letter);
          var tries = parseInt(game.get('tries') + 1);
          game.set({tries: tries});
        } else {
          sweetAlert("You already used '" + letter + "'");
        }
      $('#input-field').val('');
      this.compare(letter);
    }
  },
  compare: function(letter) {
    var state = game.get('state').split('');
    var word  = game.get('word');
      if (_.contains(word, letter) === true) {
        var idx = word.indexOf(letter);
        state[idx] = letter;
        while (idx !== -1) {
          var idx = word.indexOf(letter, idx + 1);
          console.log('hell yeah dude', idx);
          state[idx] = letter;
      }
        var state = state.join('');
        game.set({state: state});
        console.log(state);
      } else {
        console.log('nah dog');
        var letter = new Letter({letter: letter})
        var letterView = new LetterView({model: letter});
        this.incorrectGuess();
      }
    this.potentialWinner();
  },
  incorrectGuess: function() {
    attempts = game.get('threshold');
    currentThreshold = (attempts - 1);
    game.set({threshold: currentThreshold});
    console.log(currentThreshold);
    this.loseLimb();
      if (currentThreshold == 0) {
        sweetAlert('Yalls is finished! Answer was "' + currentWord + '"');
        this.startOver();
      }
  },
  potentialWinner: function() {
    checkPoint = game.get('state');
      if (_.contains(currentState, '_') == false) {
        sweetAlert('You did it!');
        this.startOver(); 
      }
  },
  loseLimb: function() {
    if (currentThreshold == 6){
  		new BodyPartView({model: bodyParts.models[5]});
  	} else if  (currentThreshold == 5){
  		new BodyPartView({model: bodyParts.models[4]});
  	} else if  (currentThreshold == 4){
  		new BodyPartView({model: bodyParts.models[3]});
  	} else if  (currentThreshold == 3){
  		new BodyPartView({model: bodyParts.models[2]});
  	}	else if  (currentThreshold == 2){
  		new BodyPartView({model: bodyParts.models[1]});
  	} else if  (currentThreshold == 1){
  		new BodyPartView({model: bodyParts.models[0]});
  	} else if  (currentThreshold == 0){
  		new BodyPartView({model: bodyParts.models[0]})
  	} else {

  	}
  },
});