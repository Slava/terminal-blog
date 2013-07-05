var postsList = [
  {
    id: 'srm-571',
    title:'SRM 571',
    date: new Date(2013,1,19),
    tags: []
  },
  {
    id: 'tco-2013-2a',
    title:'TCO 2013 2A',
    date: new Date(2013,2,31),
    tags: []
  },
  {
    id: 'tco-2013-qual-1a',
    title:'TCO 2013 Qual 1A',
    date: new Date(2013,1,23),
    tags: []
  },
  {
    id: 'when-single-paged-apps-suck',
    title:'When single paged apps suck',
    date: new Date(2013,4,02),
    tags: []
  },
  {
    id: 'python-development-environment',
    title:'Python development environment',
    date: new Date(2013,0,16),
    tags: []
  },
  {
    id: 'good-grid-view-for-cocoa-app',
    title:'Good grid view for Cocoa app',
    date: new Date(2013,2,19),
    tags: []
  },
  {
    id: 'fibers',
    title:'Fibers',
    date: new Date(2013,4,24),
    tags: []
  },
  {
    id: 'applescript',
    title:'Applescript',
    date: new Date(2013,0,31),
    tags: []
  },
  {
    id: 'less-known-y-combinator',
    title:'Less known Y combinator',
    date: new Date(2013,2,30),
    tags: []
  },
  {
    id: 'dont-go-back-to-school',
    title:'Dont go back to school',
    date: new Date(2013,5,25),
    tags: []
  } 
];

posts = new Meteor.Collection('posts');

posts.remove({});

_.each(postsList, function (post) {
  posts.insert(post);
});
