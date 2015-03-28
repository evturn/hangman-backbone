var GameView = Backbone.View.extend({
	el: '#game-state',
  template: _.template($('#game-state-template').html()),
	initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    this.$el.empty();
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },
});
