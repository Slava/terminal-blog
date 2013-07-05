var postsList = [
  {
  id:'cocoa-learning',
  title:'Cocoa learning',
  date: new Date(15,01,2013),
  tags: []
  },
  {
    id:'srm-571',
    title:'SRM 571',
    date: new Date(19,02,2013),
    tags: []
  },
  {
    id:'tco-2013-2a',
    title:'TCO 2013 2A',
    date: new Date(31,03,2013),
    tags: []
  },
  {
    id:'javascript-basics',
    title:'Javascript basics',
    date: new Date(15,01,2013),
    tags: []
  },
  {
    id:'tco-2013-qual-1a',
    title:'TCO 2013 Qual 1A',
    date: new Date(23,02,2013),
    tags: []
  },
  {
    id:'when-single-paged-apps-suck',
    title:'When single paged apps suck',
    date: new Date(02,05,2013),
    tags: []
  },
  {
    id:'python-development-environment',
    title:'Python development environment',
    date: new Date(16,01,2013),
    tags: []
  },
  {
    id:'good-grid-view-for-cocoa-app',
    title:'Good grid view for Cocoa app',
    date: new Date(19,03,2013),
    tags: []
  },
  {
    id:'fibers',
    title:'Fibers',
    date: new Date(24,05,2013),
    tags: []
  },
  {
    id:'applescript',
    title:'Applescript',
    date: new Date(31,01,2013),
    tags: []
  },
  {
    id:'less-known-y-combinator',
    title:'Less known Y combinator',
    date: new Date(30,03,2013),
    tags: []
  },
  {
    id:'dont-go-back-to-school',
    title:'Dont go back to school',
    date: new Date(25,06,2013),
    tags: []
  }
];

posts = new Meteor.Collection('posts');

posts.remove({});

_.each(postsList, function (post) {
  posts.insert(post);
});
