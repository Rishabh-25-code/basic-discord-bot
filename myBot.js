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
    if (msg.content === ':who are you') {
        msg.reply('I am a simple discord bot made by Rishabh');
    }
    if (msg.content === ':kya kar sakte ho bhai') {
        msg.reply('tum naam bolo mai us bande ke baare me bta sakta hun');
    }
    if (msg.content === ':raj') {
        msg.reply('chutiya');
    }
    if (msg.content === ':sudhanshu') {
        msg.reply("sabse bada stalker / krat...'s love");
    }
    if (msg.content === ':firdaus') {
        msg.reply('billu/tillu/chikki');
    }
    if (msg.content === ':harsh') {
        msg.reply('tharki/antarmukhi');
    }
    if (msg.content === ':rishabh') {
        msg.reply('papa');
    }
    if (msg.content === ':pratik') {
        msg.reply('error 404 not found');
    }
    if (msg.content === 'I love this server' || 'This server is awesome' || 'Nice server' || 'I love this bot') {
        msg.react('❤️')
    }
});
client.login(process.env.botToken)