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
    greetings: '',
    height: 40
  });
});