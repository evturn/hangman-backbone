var WordView = Backbone.View.extend({
	el: '#word',
	template: _.template($('#word-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		sentWord = this.model.toJSON();
		this.$el.html(this.template(sentWord));
	}
});