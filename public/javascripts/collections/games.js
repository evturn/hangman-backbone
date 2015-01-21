var Games = Backbone.Collection.extend({
	model: Game,
	url: '/words'
});