var postsList = [
  {
    id: 'srm-571',
    title:'SRM 571',
    date: new Date(2013,1,19),
    tags: ['TC']
  },
  {
    id: 'tco-2013-2a',
    title:'TCO 2013 2A',
    date: new Date(2013,2,31),
    tags: ['TC']
  },
  {
    id: 'tco-2013-qual-1a',
    title:'TCO 2013 Qual 1A',
    date: new Date(2013,1,23),
    tags: ['TC']
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
    tags: ['js', 'fibers']
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
    tags: ['yc', 'js', 'fun']
  },
  {
    id: 'automata-revelation',
    title: 'Pushdown Automata Revelation',
    date: new Date(2013,5,7),
    tags: ['CS', 'automata']
  },
  {
    id: 'dont-go-back-to-school',
    title:'Dont go back to school',
    date: new Date(2013,5,25),
    tags: ['book', 'school']
  },
  {
    id: 'js-hoisting',
    title: 'JS hoisting',
    date: new Date(2013,6,26),
    tags: ['javascript']
  }
];

Posts = new Meteor.Collection('posts');

Posts.remove({});

_.each(postsList, function (post) {
  Posts.insert(post);
});

