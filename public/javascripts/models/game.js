var Game = Backbone.Model.extend({
	defaults: {
		word: '',
		state: '',
		tries: 0,
		threshold: 6
	},
	urlRoot: '/words',
	initialize: function() {
		this.fetch({reset: true});
	},
});