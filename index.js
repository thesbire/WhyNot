const Discord = require('discord.js');
const config = require('./config.json');
const guild = ('695119331109109791');
const client = new Discord.Client();
client.on('message', msg => {
    if (msg.content === ':ping') {
        msg.channel.send('PoNg!');
    };
    client.on('message', msg => {
        if (msg.content === ':start'){
          var role= message.guild.roles.id('696073072880517180')
          msg.author.add.Role(role)
        }})});
client.login('Njk1MzM3ODg1ODU5MDUzNzQx.XojENA.1WavMU9jjbHmvRDnGy0bcCkAK80');