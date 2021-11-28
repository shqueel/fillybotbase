module.exports = {
    name: 'clear',
    description: 'Clears an amount of messages.',
    async execute(client, message, args) {
        if(message.member.permissions.has("ADMINISTRATOR")){
            if(!args[0]) return message.reply("please enter the amount of messages you want to clear");
            if(isNaN(args[0])) return message.reply("please enter a number");
    
            if(args[0] > 100) return message.reply("Maximum clear messages (100 max)");
            if(args[0] <= 0) return message.reply("You must delete more than one message.");
    
            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
                console.log("clear command run, deleted " +args[0]+ " messages.")
            })} else {
                message.reply("You do not have the correct permissions to use this command.");
            }
    }
}