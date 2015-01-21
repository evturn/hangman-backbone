var LetterView = Backbone.View.extend({
	tagName: li,
	className: 'letter',
	template: _.template($('#letter-bank-template').html()),
	initialize: function() {
		this.listenTo(this.model, 'add', this.render);
	},
	render: function() {
		this.$el.html(this.template());
		return this;
	}
});