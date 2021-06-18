require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log("The bot is good to go!!")
});
client.on("message", msg => {
    if (msg.content === 'Hii') {
        msg.reply('Hello, how are you ?');
    }
    if (msg.content === ':modme') {
        msg.member.roles.add('855387460330323998');
    }
   
    if (msg.content === 'I love this server' || 'This server is awesome' || 'Nice server' || 'I love this bot') {
        msg.react('❤️')
    }
});
client.login(process.env.botToken)
