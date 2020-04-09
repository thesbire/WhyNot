const Discord = require('discord.js');
const config = require('./config.json');
const guild = ('695119331109109791');
const client = new Discord.Client();
client.on('message', msg => {
    if (msg.content === ':ping') {
        msg.channel.send('PoNg!');
    };

    if (msg.content === ':start') {
        msg.guild.roles.fetch('696073072880517180')//hub
        .then(role => {
            msg.member.roles.add(role);
        });
    };
    if (msg.content === ':e1p1') {
        msg.guild.roles.fetch('695121898073489409')//e1p1
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('696073072880517180');//hub
            msg.member.roles.remove('695121925340528721');//2
            msg.member.roles.remove('695121985146978358');//4
        });
    };
    if (msg.content === ':e1p2') {
        msg.guild.roles.fetch('695121925340528721')//e1p2
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695121898073489409');//e1p1
            msg.member.roles.remove('695121967216459776');//3
        });
    };
    if (msg.content === ':e1p3') {
        msg.guild.roles.fetch('695121967216459776')//e1p3
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695121925340528721');//e1p2
            msg.member.roles.remove('695122011185217596');//7
        });
    };
    if (msg.content === ':e1p4') {
        msg.guild.roles.fetch('695121985146978358')//e1p4
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695121898073489409');//e1p1
        });
    };
    if (msg.content === ':e1p5') {
        msg.guild.roles.fetch('695122008194941019')//e1p5
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695121985146978358');//e1p4
            msg.member.roles.remove('695122014389665792');//9
        });
    };
    if (msg.content === ':e1p6') {
        msg.guild.roles.fetch('695122009381929010')//e1p6
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122008194941019');//e1p5
        });
    };
    if (msg.content === ':e1p7') {
        msg.guild.roles.fetch('695122011185217596')//e1p7
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122009381929010');//e1p6
        });
    };
    if (msg.content === ':e1p8') {
        msg.guild.roles.fetch('695122012426731542')//e1p8
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122011185217596');//e1p7
            msg.member.roles.remove('695122014389665792');//9
        });
    };
    if (msg.content === ':e1p9') {
        msg.guild.roles.fetch('695122014389665792')//e1p9
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122012426731542');//e1p8
            msg.member.roles.remove('695122008194941019');//5
        });
    };
    if (msg.content === ':e1p10') {
        msg.guild.roles.fetch('695122015279120405')//e1p10
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122012426731542');//e1p8
        });
    };

});
client.login('Nana');
