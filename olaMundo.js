var restify = require('restify');
var builder = require('botbuilder');

var server = restify.createServer();

server.listen(process.env.port || process.env.port || 3978, function() {
    console.log('%s Aplicação está executando na porta %s', server.name, server.url);

});


var connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
});

server.post('/api/messages', connector.listen());

var bot = new builder.UniversalBot(connector, function(session) {
    session.send('Você disse: %s', session.message.text);
});