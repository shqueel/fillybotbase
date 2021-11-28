module.exports = {
    name: "Help",
    description: "View commands",
    execute(client, message, args) {
        message.reply(`The current commands available are:
        
        **=help** - Displays the help menu,
        **=ping** - ping pong anyone?

        --- ADMIN COMMANDS ---
        **=clear** - Clears an amount of messages (e.g. =clear 20),
        **=kick** - Kicks selected user (e.g. =kick @JohnDoe),
        **=ban** - Bans selected user.
        `);
    }
}