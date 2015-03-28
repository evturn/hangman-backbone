var GameState = Backbone.View.extend({
	el: '#game-state',
  template: _.template($('#game-state-template').html()),
  livesTemplate: _.template($('#lives-template').html()),
	initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    this.$el.empty();
    this.lives();
    this.$el.append(this.template(this.model.toJSON()));
    return this;
  },
  lives: function() {
    $('#lives').html(this.livesTemplate(this.model.toJSON()));
    return this;
  },
});
