Meteor.Router.add({
  '/': 'home',
  '/help': 'help',
  '/p/:id': { to: 'post', and: function (id) {
    Session.set('currentPostId', id);
  }}
});
