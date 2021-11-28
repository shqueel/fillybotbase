module.exports = {
    name: 'supersecretrole',
    description: 'the super secret role',
    execute(message, args) {
        message.member.roles.add('913595094198796328');
        message.channel.send("Parmesan granted!")
    }
}