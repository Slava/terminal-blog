posts = new Meteor.Collection('posts');

Template.home.posts = function () {
	return posts.find({}, { sort: { date: -1 } });
};
