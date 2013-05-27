var commands = {};

_.each(['?', 'help', 'man', 'wtf'], function (command) {
  commands[command] = function () {
    Meteor.Router.to('/help');
  };
});

_.each(['home'], function (command) {
  commands[command] = function () {
    Meteor.Router.to('/');
  };
});

Meteor.setTimeout(function () {
  // Create global terminal object
  terminal = $('#shell').terminal(commands, {
    prompt: '> ',
    name: 'shell',
    greetings: 'connected to devblog.me',
    height: 65,
    tabcompletion: true
  });
}, 100);

typeAndExecute = function (command) {
  if (!terminal)
    return;

  // Simulate typing and entering
  terminal.exec(command, false);
};

$(document).on('click', '[data-terminal]', function (e) {
  typeAndExecute($(this).attr('data-terminal'));
});
