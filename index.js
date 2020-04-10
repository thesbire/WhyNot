const Discord = require('discord.js');
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
            msg.member.roles.remove('695121967216459776');//e1p3
        });
    };
    if (msg.content === ':e1p3') {
        msg.guild.roles.fetch('695121967216459776')//e1p3
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695121925340528721');//e1p2
            msg.member.roles.remove('695122011185217596');//e1p7
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
            msg.member.roles.remove('695122014389665792');//e1p9
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
            msg.member.roles.remove('695121967216459776');//e1p3
        });
    };
    if (msg.content === ':e1p8') {
        msg.guild.roles.fetch('695122012426731542')//e1p8
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122011185217596');//e1p7
            msg.member.roles.remove('695122014389665792');//e1p9
        });
    };
    if (msg.content === ':e1p9') {
        msg.guild.roles.fetch('695122014389665792')//e1p9
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122012426731542');//e1p8
            msg.member.roles.remove('695122008194941019');//e1p5
        });
    };
    if (msg.content === ':e1p10') {
        msg.guild.roles.fetch('695122015279120405')//e1p10
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122012426731542');//e1p8
        });
    };
 
 
 


    if (msg.content === ':e2p1') {
        msg.guild.roles.fetch('695122162390007849')//e2p1
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122009381929010');//e1p6
        });
    };
    if (msg.content === ':e2p2') {
        msg.guild.roles.fetch('695122204219932742')//e2p2
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122162390007849');//e2p1

        });
    };
    if (msg.content === ':e2p3') {
        msg.guild.roles.fetch('695122205679419442')//e2p3
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122204219932742');//e2p2
        });
    };
    if (msg.content === ':e2p4') {
        msg.guild.roles.fetch('695122207570919424')//e2p4
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122205679419442');//e2p3
            msg.member.roles.remove('695122208615301172');//e2p5
        });
    };
    if (msg.content === ':e2p5') {
        msg.guild.roles.fetch('695122208615301172')//e1p5
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122210356068363');//e2p6
        });
    };
    if (msg.content === ':e2p6') {
        msg.guild.roles.fetch('695122210356068363')//e2p6
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122212209950750');//e1p7
        });
    };
    if (msg.content === ':e2p7') {
        msg.guild.roles.fetch('695122212209950750')//e2p7
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122015279120405');//e1p10
        });
    };
    if (msg.content === ':e2p8') {
        msg.guild.roles.fetch('695122213833146382')//e2p8
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122207570919424');//e2p4
        });
    };
    if (msg.content === ':e2p9') {
        msg.guild.roles.fetch('695122215645216769')//e2p9
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122213833146382');//e2p8
        });
    };
    if (msg.content === ':e2p10') {
        msg.guild.roles.fetch('695122217251373066')//e2p10
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122213833146382');//e2p8
        });
    };
 


 
 
    if (msg.content === ':e3p1') {
        msg.guild.roles.fetch('695122423904862219')//e3p1
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122217251373066');//e2p10

        });
    };
    if (msg.content === ':e3p2') {
        msg.guild.roles.fetch('695122425213616138')//e3p2
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122423904862219');//e3p1
        });
    };
    if (msg.content === ':e3p3') {
        msg.guild.roles.fetch('695122426521976842')//e3p3
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122425213616138');//e3p2
            msg.member.roles.remove('695122428409675856');//e3p4
        });
    };
    if (msg.content === ':e3p4') {
        msg.guild.roles.fetch('695122428409675856')//e3p4
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122426521976842');//e3p3
            msg.member.roles.remove('695122429885939773');//e3p5
        });
    };
    if (msg.content === ':e3p5') {
        msg.guild.roles.fetch('695122429885939773')//e3p5
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('');//e3p4
        });
    };
    if (msg.content === ':e3p6') {
        msg.guild.roles.fetch('695122431291031582')//e3p6
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122429885939773');//e3p5
        });
    };
    if (msg.content === ':e3p7') {
        msg.guild.roles.fetch('695122432939261982')//e3p7
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122425213616138');//e3p2
        });
    };
    if (msg.content === ':e3p8') {
        msg.guild.roles.fetch('695122434982150194')//e3p8
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122432939261982');//e3p7
            msg.member.roles.remove('695122436680581170');//e3p9
        });
    };
    if (msg.content === ':e3p9') {
        msg.guild.roles.fetch('695122436680581170')//e3p9
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122434982150194');//e3p8
            msg.member.roles.remove('695122438379274370');//e3p10
        });
    };
    if (msg.content === ':e3p10') {
        msg.guild.roles.fetch('695122438379274370')//e3p10
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122436680581170');//e3p9
            msg.member.roles.remove('695122431291031582');//e3p6
        });
    };
  
  
  
  

    if (msg.content === ':e4p1') {
        msg.guild.roles.fetch('695338811563180093')//e4p1
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122438379274370');//e3p10
        });
    };
    if (msg.content === ':e4p2') {
        msg.guild.roles.fetch('695339025199792159')//e4p2
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695338811563180093');//e4p1
            msg.member.roles.remove('695339346009522289');//e4p5

        });
    };
    if (msg.content === ':e4p3') {
        msg.guild.roles.fetch('695339183421521921')//e4p3
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339288358813716');//e4p4
            msg.member.roles.remove('695339346009522289');//e4p5
            msg.member.roles.remove('695339349654634536');//e4p6
        });
    };
    if (msg.content === ':e4p4') {
        msg.guild.roles.fetch('695339288358813716')//e4p4
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339183421521921');//e4p3
            msg.member.roles.remove('695339346009522289');//e4p5
        });
    };
    if (msg.content === ':e4p5') {
        msg.guild.roles.fetch('695339346009522289')//e4p5
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339183421521921');//e4p3
            msg.member.roles.remove('695339288358813716');//e4p4
            msg.member.roles.remove('695339349654634536');//e4p6
            msg.member.roles.remove('695339349654634517');//e4p7
            msg.member.roles.remove('695339349885059144');//e4p8
        });
    };
    if (msg.content === ':e4p6') {
        msg.guild.roles.fetch('695339349654634536')//e4p6
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339183421521921');//e4p3
            msg.member.roles.remove('695339288358813716');//e4p4
            msg.member.roles.remove('695339346009522289');//e4p5
            msg.member.roles.remove('695339349654634517');//e4p7
            msg.member.roles.remove('695339349885059144');//e4p8
        });
    };
    if (msg.content === ':e4p7') {
        msg.guild.roles.fetch('695339349654634517')//e4p7
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339346009522289');//e4p5
            msg.member.roles.remove('695339349654634536');//e4p6
            msg.member.roles.remove('695339349885059144');//e4p8
        });
    };
    if (msg.content === ':e4p8') {
        msg.guild.roles.fetch('695339349885059144')//e4p8
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339346009522289');//e4p5
            msg.member.roles.remove('695339349654634536');//e4p6
            msg.member.roles.remove('695339349654634517');//e4p7
        });
    };
    if (msg.content === ':e4p9') {
        msg.guild.roles.fetch('695339350967320656')//e4p9
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339349654634536');//e4p6
        });
    };

  
  
  
  
    if (msg.content === ':e5p1') {
        msg.guild.roles.fetch('695338874691649744')//e5p1
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339350967320656');//e4p9
        });
    };
    if (msg.content === ':e5p2') {
        msg.guild.roles.fetch('695339355325202572')//e5p2
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695338874691649744');//e5p1

        });
    };
    if (msg.content === ':e5p3') {
        msg.guild.roles.fetch('695339792736452640')//e5p3
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339355325202572');//e5p2
        });
    };
    if (msg.content === ':e5p4') {
        msg.guild.roles.fetch('695339794061852683')//e5p4
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339792736452640');//e5p3
        });
    };
    if (msg.content === ':e5p5') {
        msg.guild.roles.fetch('695339795504955512')//e5p5
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339794061852683');//e5p4
        });
    };
    if (msg.content === ':e5p6') {
        msg.guild.roles.fetch('695339797459370005')//e5p6
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339795504955512');//e5p5
        });
    };
    if (msg.content === ':e5p7') {
        msg.guild.roles.fetch('695339799288086538')//e5p7
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339794061852683');//e5p4
        });
    };
    if (msg.content === ':e5p8') {
        msg.guild.roles.fetch('695339800982716426')//e5p8
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339799288086538');//e5p7
        });
    };
    if (msg.content === ':e5p9') {
        msg.guild.roles.fetch('695339802706575542')//e5p9
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339800982716426');//e5p8
        });
    };
    if (msg.content === ':e5p10') {
        msg.guild.roles.fetch('695339804472377386')//e5p10
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695339802706575542');//e5p9
        });
    };
    if (msg.content === ':lose') {
        msg.guild.roles.fetch('697860866993029170')//e5p10
        .then(role =>{
            msg.member.roles.add(role);
            msg.member.roles.remove('695122215645216769');//e2p9
            msg.member.roles.remove('695339804472377386');//e5p10
        });
    };
});





client.login('Nana');
