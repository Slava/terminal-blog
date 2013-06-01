var commands = {};

_.each(['?', 'help', 'man', 'wtf'], function (command) {
  commands[command] = function () {
    this.echo('showing help...');
    Meteor.Router.to('/help');
  };
});

_.each(['home'], function (command) {
  commands[command] = function () {
    this.echo('going home...');
    Meteor.Router.to('/');
  };
});

_.each(['show', 'cat'], function (command) {
  commands[command] = function (postId) {
    if (!postId) postId = 'helloworld';
    this.echo('showing contents of ' + postId + '...');
    this.echo('rendering ' + posts.findOne({ id: postId }).title);
    Meteor.Router.to('/p/' + postId);
  };
});

// Create global terminal object
var termTimeOut = 50;
var termCreate = function () {
  if (!$('#shell').length) {
    termTimeOut *= 2;
    Meteor.setTimeout(termCreate, termTimeOut);
    return;
  }

  terminal = $('#shell').terminal(commands, {
    prompt: '> ',
    name: 'shell',
    greetings: 'connected to devblog.me',
    height: 65,
    tabcompletion: true
  });
};

termCreate();

typeAndExecute = function (command) {
  if (!terminal)
    return;

  // Simulate typing and entering
  terminal.resume();
  terminal.exec(command, false);
};

$(document).on('click', '[data-terminal]', function (e) {
  typeAndExecute($(this).attr('data-terminal'));
  e.preventDefault();
});
