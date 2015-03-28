var LetterView = Backbone.View.extend({
	el: '#letters',
	template: _.template($('#letter-template').html()),
	initialize: function() {
		this.render();
	},
	render: function() {
		this.$el.append(this.template(this.model.toJSON()));
		return this;
	}
});