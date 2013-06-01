var postsList = [
  {
    id: 'first_post',
    title: 'First post',
    date: new Date('Mon May 27 2013 23:15:26 GMT-0700 (PDT)'),
    tags: ['test']
  },
  {
    id: 'second_post',
    title: 'The second one',
    date: new Date('Fri May 24 2013 21:12:26 GMT-0700 (PDT)'),
    tags: ['test']
  }
];

posts = new Meteor.Collection('posts');

posts.remove({});

_.each(postsList, function (post) {
  posts.insert(post);
});
