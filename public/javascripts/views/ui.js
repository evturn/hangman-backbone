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
    game.set({used: []});
    bodyParts = new BodyParts();
    bodyParts.fetch();
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
          console.log('hell yeah dude');
          state[idx] = letter;
        }
          var state = state.join('');
          game.set({state: state});
          console.log(state);
          this.potentialWinner();
      } else {
        console.log('nah dog');
        var letter = new Letter({letter: letter})
        var letterView = new LetterView({model: letter});
        this.incorrect();
      }
  },
  incorrect: function() {
    var threshold = (game.get('threshold') -1);
    game.set({threshold: threshold});
      if (threshold === 0) {
        sweetAlert('Yalls is finished! Answer was "' + game.get('word').toUpperCase() + '"');
        this.start();
      } else {
        this.loseLimb(threshold);
      }
  },
  potentialWinner: function() {
    var state = game.get('state');
      if (_.contains(state, '_') === false) {
        sweetAlert(game.get('word').toUpperCase() + '!\n' + 'You did it!');
        this.start(); 
      }
  },
  loseLimb: function(threshold) {
    var i = (threshold - 1);
    console.log(i)
  	var bodyPartView = new BodyPartView({model: bodyParts.models[i]});
  },
});