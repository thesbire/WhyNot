const Discord = require('discord.js');
const config = require('./config.json');
const guild = ('695119331109109791');
const client = new Discord.Client();
client.on('message', msg => {
    if (msg.content === ':ping') {
        msg.channel.send('PoNg!');
    };

    if (msg.content === ':start') {
        msg.guild.roles.fetch('696073072880517180')
        .then(role => {
            msg.member.roles.add(role);
        });
    };

});
client.login('Nana');
