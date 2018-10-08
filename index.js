const Discord = require("discord.js");
const client = new Discord.Client();
const request = require('request');

var prefix = "/";

    var hoje = new Date();
            var dd = hoje.getDate();
            var mm = hoje.getMonth()+1;
            var hh = hoje.getHours()-3;
            var min = hoje.getMinutes();
            var ss = hoje.getSeconds();
            var yyyy = hoje.getFullYear();
            if(dd<10){
                dd = '0'+dd;
            }
            if (mm<10) {
                mm = '0'+mm;
            }
            if (hh<10){
        if(hh<01){
            hh = 3+hh;
        }
                hh = '0'+hh;
            }
            if (min<10){
                min = '0'+min;
            }
            var hoje = dd+ '/' +mm+ '/' +yyyy + ' �s ' + hh + ':' + min;
        var hojee = dd+ '/' +mm+ '/' +yyyy;

client.on("ready", () => {
    
     client.channels.get('497807989399617536').send(':white_check_mark: ' + hoje).then(msg => {
        msg.delete(60000)
    })
      
     
    const activities = ['https://gamersboard.com.br/', 'https://gamersboard.com.br/']
    let counter = 0
    setInterval(function() {
        client.user.setGame(activities[counter], "https://twitch.tv/mygenex")
        counter+= 1
        counter %= activities.length
    }, 10000)
});

client.on('message', (message) => {
    
    let msg = message.content.toUpperCase();
    let sender = message.author;
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    
    if(message.channel.type === 'dm') return;
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if(msg.startsWith(prefix + 'SUGERIR')){

        message.delete();

        let sugerindo = args.slice(0).join(" ");

        const erd = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('?? Sugest�o')
            .setDescription("*Fa�a sugest�es para a GamersBoard.*\n\n:bulb: **| /sugerir ``<sugest�o>``**")

        if(!sugerindo) return message.channel.send(erd).then(msg => {
            msg.delete(20000);
            msg.react('??');
        });

        const embed = new Discord.RichEmbed()
            .setThumbnail('https://cdn.discordapp.com/icons/173639611648573441/cf8763951089898365e532f80b82076d.png?size=2048')
            .setTitle(':hammer: Sugest�o')
            .setColor('RANDOM')
            .setDescription('Para enviar uma sugest�o utilize o comando /sugerir (sugest�o).')
            .addField('?? | Sugest�o:', sugerindo )
            .addField('<:rotating_light:452700782001913867> | Autor:', message.author, true)
        client.channels.get('497807894515810315').send(embed).then(msg => {
            msg.react('??');
            msg.react('??');
        });

        message.reply(' Sua sugest�o foi enviada com sucesso, � de extrema importancia que voc� mande sugest�es para a GamersBoard, muito obrigado').then(msg => {
            msg.delete(10000);
        });
    }

   if(msg.startsWith(prefix + 'AVISO')){
        
        message.delete();
            if(!message.member.roles.find("name", 'Teste')) return message.channel.sendMessage(":x: | Voc� n�o possui permiss�o").then(msg => {
            msg.delete(10000)
        })
              let args1 = message.content.slice(prefix.length + 5).split(";");
            let embed = new Discord.RichEmbed()
                .setFooter(hoje)
                .setTitle(`:loudspeaker: Gamers Board - An�ncio `)
                .setDescription(args1[0])
                .setThumbnail('')
                .addField('Atenciosamente,', message.author)
            .setColor('f26363')
            .setFooter(message.author.username, message.author.avatarURL)
	         message.channel.send(embed);
    
    if(msg.startsWith(prefix + 'DENUNCIAR')){

        message.delete();

        let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let motivo = args.slice(1).join(" ").split('-');

        const erd = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('?? Den�ncias')
            .setDescription("*Den�nciar membros.*\n\n:bulb: **| /denunciar ``<@membro>`` ``<motivo>`` - ``<prova>``**")

        if(!user) return message.channel.send(erd).then(msg => {
            msg.delete(20000);
            msg.react('??');
        });

        if(!motivo) return message.channel.send(erd).then(msg => {
            msg.delete(20000);
            msg.react('??');
        });

        if(!motivo[1]) return message.channel.send(erd).then(msg => {
            msg.delete(20000);
            msg.react('??');
        });

        const reportado = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('?? Den�ncia')
            .setDescription('Nova den�ncia criada.')
            .addField('<:e_mail:457899299213279243> | Acusado:', user, true)
            .addField('<:flag_pm:457899299376726016> | Autor:', message.author, true)
            .addField('?? | Canal:', message.channel, true)
            .addField('?? | Motivo:', motivo[0], true)
            .addField('?? | Prova:', motivo[1], true)
            .setThumbnail(client.user.avatarURL)
        client.channels.get('497807909405851659').send(reportado).then(msg => {
            msg.react('?');
            msg.react('?');
        });

        message.reply('?? | Sua den�ncia foi enviada com sucesso, agradecemos pela sua den�ncia!').then(msg => {
            msg.delete(10000);
        });

    }

    if(msg.startsWith(prefix + 'AJUDA') || msg.startsWith(prefix + 'TICKET')){

        message.delete();
        let motivo = args.slice(0).join(" ");

        const mto = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setTitle('?? | Ticket')
            .setDescription("*Use-o para tirar suas d�vidas.*\n\n:information_desk_person: | **/ajuda** ``<sua d�vida>``\n\n? | **Alternativas:** \n/ticket")
            .setColor('RANDOM')
            .setFooter('Ajuda', client.user.avatarURL)

        if(!motivo) return message.channel.send(mto).then(msg => {
            msg.delete(20000)
        })

        const ert = new Discord.RichEmbed()
            .setTitle(':warning: Opaah... Erros encontrados !')
            .addField(':no_entry_sign: | Erro encontrado:', "Grupo ``Teste`` n�o foi encontrado porfavor crie-o /")
            .setColor('f4eb42')
            .setTimestamp()
            .setFooter('Erro: Ticket', client.user.avatarURL)

        if(!message.guild.roles.exists("name", "Teste")) return client.channels.get('474352141985775628').send(ert);

        if(message.guild.channels.exists("name", "ticket-" + message.author.username)) return message.reply(':x: | Voc� j� possui um ticket aberto...  ').then(msg => {
            msg.delete(10000);
        })
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {

            let role = message.guild.roles.find("name", "Teste");
            let role2 = message.guild.roles.find("name", "@everyone");

            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });

            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });

            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });

            message.reply(`??| Seu ticket foi criado com sucesso ! Por favor aguarde at� alguem atende-lo, obrigado.\n\n?? | Acesse seu ticket: <#${c.id}>`).then(msg => {
                msg.react('??');
                msg.delete(20000);
            });

            const embed = new Discord.RichEmbed()
                .setColor('f45c42')
                .setTimestamp()
                .setAuthor(message.author.tag, message.author.avatarURL)
                .addField('? | Status:', 'Aberto')
                .addField('?? | Informa��o adicional:', motivo)
                .addField(':loudspeaker: | Aten��o:', 'Quando sua d�vida for resolvida por favor adicione sua rea��o, como: :x: ou :white_check_mark:')
            c.send(embed).then(msg => {
                msg.react('?');
                msg.react('?');
            });

        });
    }

    if(msg.startsWith(prefix + 'FECHAR')){

        message.delete();

        if(!message.channel.name.startsWith(`ticket-`)) return message.reply(':x: | Esse comando n�o pode ser usado aqui... :frowning:').then(msg => {
            msg.delete(10000);
        });

        const embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.avatarURL)
            .setDescription("*Voc� realmente deseja fechar esse ticket ?*\n?? | **Fechar:**\nCaso queira fechar basta utilizar o comando: ``confirmar``\n?? | Voc� possui 10 segundos para fechar, ou ser� cancelado ! \n\n :thumbsup:\n")
            .setFooter(message.channel.name, client.user.avatarURL)
            .setTimestamp()
            .setColor('RANDOM')
        message.channel.send(embed)
        .then((m) => {
          message.channel.awaitMessages(response => response.content === '/confirmar', {
            max: 1,
            time: 10000,
            errors: ['time'],
          })
          .then((collected) => {
              message.channel.delete();
            })
            .catch(() => {
              m.delete();
              message.channel.send('?? | Cancelando... 10 segundos se passaram e n�o recebi uma resposta !').then(m2 => {
              }, 3000);
            });
        });
    }

});


  client.login(process.env.token);; 
