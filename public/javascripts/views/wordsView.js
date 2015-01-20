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
    this.collection.each(function(model) {
    characters = model.get('name').length
    console.log(characters);
    this.transformWord();
    this.addOne(model);
    }.bind(this));
  },
  transformWord: function() { 
    String.prototype.repeat = function( blank ) {
    return new Array( blank + 1 ).join( this );
    }
  alert( "_".repeat( characters ) );
  }
});

console.log('WordsView');