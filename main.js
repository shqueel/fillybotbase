/* startup reqs and variables */
//#region 
const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');
const { Server } = require('http');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})




//#region (super secret token) 
client.login(process.env.DJS_TOKEN)
//#endregion