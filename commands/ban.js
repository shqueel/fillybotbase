module.exports = {
    name: 'ban',
    description: 'what do you think?',
    execute(client, message, args) {
        if(message.member.permissions.has("BAN_MEMBERS")) {
            const member = message.mentions.users.first();
            if (member){
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.ban();
                message.reply("User has been banned.");
                console.log("Banned "+memberTarget+ " by user "+message.author);
            }else {
                message.reply("you couldnt ban that member")
            }
        } else {
            message.reply("You do not have the correct permissions to use this command.");
        }
    }
}