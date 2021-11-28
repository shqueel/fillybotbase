module.exports = {
    name: 'ping',
    description: 'anyone for a game of ping pong?',
    execute(message, args) {
        message.channel.send('pong!');
    }
}