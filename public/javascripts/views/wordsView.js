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
      this.addOne(model);
    }.bind(this));
  }
});

console.log('WordsView');