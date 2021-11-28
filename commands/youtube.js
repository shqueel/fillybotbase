module.exports = {
    name: 'youtube',
    description: 'test cmd',
    execute(client, message, args) {
        if(message.member.roles.cache.has('913592569882099722')){
            message.channel.send('there is none');
        } else {
            message.channel.send('you do not have permission to use this command');
            message.member.roles.add('913592569882099722');
        }

    }
}