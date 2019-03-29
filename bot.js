const Discord = require('discord.js');
const client = new Discord.Client();
const prefixac = "";
client.on('message', message => {
 let rebel = message.content.split(` `).slice(1).join(' ');
if(message.author.id !== "460976885036220426") return ;
if (message.content.startsWith(prefixac + 'setp')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setp Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel,{ type: 'PLAYING' });
message.channel.send("**تـــ تغيير الحالة ــم**");} 
if (message.content.startsWith(prefixac + 'setl')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setl Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'LISTENING' });
message.channel.send("**تـــ تغيير الحالة ــم**");}
if (message.content.startsWith(prefixac + 'sets')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}sets Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'STREAMING', url:'https://twitch.tv/osamagmt' });
message.channel.send("**تـــ تغيير الحالة ــم**");}     
if (message.content.startsWith(prefixac + 'setw')) {
if(!rebel) return message.channel.send(`**ex ? ${prefixac}setw Hi**`).then(m => m.delete(3000));
client.user.setActivity(rebel, { type: 'WATCHING' });
message.channel.send("**تـــ تغيير الحالة ــم**");}
if (message.content.startsWith(prefixac + 'r')) {
message.delete();
if(!rebel) return message.channel.send(`**ex ? ${prefixac}embed Hi everyone**`).then(m => m.delete(3000));
const embed = new Discord.RichEmbed()
.setColor("RANDOM").setDescription(rebel);
message.channel.send(embed)}
});

client.on('message' message => {
	if (message.author.id = '460976885036220426') {
		const args = message.content.slice(prefix.length).trim().split(' ')
		if(message.content.startsWith(`${prefixac}avatar`)) {
			client.user.setAvatar(args[1]).then(async () => {
				await message.reply(client.user.displayAvatarURL)
			})
			}
	}
});


client.login(process.env.BOT_TOKEN);
