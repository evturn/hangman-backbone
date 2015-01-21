var BodyParts = Backbone.Collection.extend({
	model: BodyPart,
	url: '/bodyparts',
	initialize: function() {
		this.fetch({reset: true});
	}
});