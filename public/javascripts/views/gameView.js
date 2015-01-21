var GameView = Backbone.View.extend({
	el: '#game',
  template: _.template($('#game-template').html()),
	initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    this.$el.empty();
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },
});
