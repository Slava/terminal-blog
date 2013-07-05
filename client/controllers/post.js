Template.post.currentPost = function () {
	return posts.findOne({id: Session.get('currentPostId')});
};

Template.post.postBody = function () {
	return Template[Session.get('currentPostId')]();
};

Template.post.prettyDate = function (date) {
	return [date.getDate(), date.getMonth() + 1].join('/');
};

Template.post.rendered = function () {
  $("code").addClass("language-javascript");
  Prism.highlightAll();
};

