Posts = new Meteor.Collection('posts');

Template.home.posts = function () {
	return Posts.find({}, { sort: { date: -1 } });
};
