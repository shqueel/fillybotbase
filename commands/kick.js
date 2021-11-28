module.exports = {
    name: 'kick',
    description: 'what do you think?',
    execute(message, args) {
        if(message.member.permissions.has("KICK_MEMBERS")) {
            const member = message.mentions.users.first();
            if (member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.kick();
                message.reply("User has been kicked.");
                console.log("Kicked "+memberTarget)
            }else {
                message.reply("you couldnt kick that member")
            }
        } else {
            message.reply("You do not have the correct permissions to use this command.");
        }
    }
}