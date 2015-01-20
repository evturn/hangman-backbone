var WordsView = Backbone.View.extend({
	el: '#word',
	initialize: function() {
    this.listenTo(this.collection, 'reset', this.addAll);
  },
  addOne: function(model) {
    var view = new WordView({model: model});
    this.$el.append(view.el);
  },
  addAll: function() {
    this.$el.empty();
    // make function pulling random model
    // then function pulling name and length
    this.collection.each(function(model) {
    theWord = model.get('name');
    characters = model.get('name').length;
    console.log(characters);
    console.log(theWord);
    this.transformHidden();
    //
    this.addOne(model);
    }.bind(this));
  },
  transformHidden: function() { 
    String.prototype.repeat = function(characters) {
    return new Array(characters + 1).join(this);
    }
  hiddenWord = ("_".repeat(characters));
  console.log(hiddenWord);
  this.setHidden();
  },
  setHidden: function() {
    state = new State({name: hiddenWord});
    console.log('state', state.get('name'));
  }
});