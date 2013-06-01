Template.post.currentPost = function () {
	return posts.findOne({id: Session.get('currentPostId')});
};

Template.post.postBody = function () {
	return Template[Session.get('currentPostId')]();
};
