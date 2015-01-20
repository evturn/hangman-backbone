var WordView = Backbone.View.extend({
	className: "col-xs-3 col-xs-offset-4",
	template: _.template($('#word-template').html()),
	initialize: function() {
		this.render();
	},
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});