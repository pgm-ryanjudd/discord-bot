const { MessageEmbed } = require('discord.js');
const search = require('yt-search');
const embed = require('./embed');

module.exports = {
    name: 'search',
    description: 'Used to show a list of youtube videos',
    execute(message, args){
        search(args.join(' '), function(err, result) {
            if (err) return message.channel.send('Something went wrong');
            let videos = result.videos.slice(0, 10);
            let response = '';

            for(let i in videos) {
                response += `**[${parseInt(i)+1}]:** ${videos[i].title} \r\n`;
            }

            response += `Choose a number between 1 and ${videos.length}`;
            //message.channel.send(response);

            const embed = new MessageEmbed()
            .setColor('#FF0000')
            .setTitle('List of Youtube videos')
            .setDescription(response)
            message.channel.send(embed);

            // message collector
            // if user gives number it cannot be empty and has to be shorter and longer then specified
            // const filter = music => !isNaN(music.content) && music.content < videos.length && music.content >0;

            // const collection = message.channel.createMessageCollector(filter);

            // collection.videos = videos;

            // // play command
            // collection.once('collect', function(music) {
            //     const commandFile = require('./play.js');

            //     commandFile.run
            // });


        });
    }
}