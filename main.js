/* startup reqs and variables */
//#region 
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '=';

const fs = require('fs');
const { Server } = require('http');

client.commands = new Discord.Collection();
//#endregion

/* grab command files */
//#region 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//#endregion

/* when new player joins */
//#region 
client.on('guildMemberAdd', guildMember =>{
    guildMember.guild.channels.cache.get('913572464901128265').send(`Welcome <@${guildMember.user.id}> to the server!`);
    console.log(`User ID: ${guildMember.user.id} has joined the Server. (${guildMember.joinedAt})`)
})
//#endregion


/* post online */
//#region 
client.once('ready', () => {
    console.log('Fillybot is online!');
})
//#endregion


/* this the cmd checker */
//#region 
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    client.commands.get(command).execute(message, args, Discord);
})
//#endregion


//#region (super secret token) 
client.login('OTEzNTcxODg3MjQ4OTc3OTUy.YaAcHw.FHORScXuloE80eSkCTa6R4HCqcA')
//#endregion