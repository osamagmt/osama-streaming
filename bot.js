const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "";
const developers = ["460976885036220426" , ""];
client.on('ready', () => {
    console.log(`Logged as ${client.user.tag}`)
})

client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(``)
  } else
  if (message.content.startsWith(adminprefix1 + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
  }
});

client.login(process.env.BOT_TOKEN);

const Discord1 = require('discord.js');
const client1 = new Discord1.Client();
 
 

const adminprefix1 = "";
const developers = ["546301246273880083" , "563646438408716298"];
client1.on('ready', () => {
    console.log(`Logged as ${client1.user.tag}`)
})

client1.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix1 + 'ply')) {
    client1.user.setGame(argresult);
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix1 + 'wt')) {
  client1.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(``)
  } else 
  if (message.content.startsWith(adminprefix1 + 'ls')) {
  client1.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(``)
  } else
  if (message.content.startsWith(adminprefix1 + 'st')) {
    client1.user.setGame(argresult, "https://www.twitch.tv/osama_gmt");
      message.channel.send(``)
  }
});

client1.login("NTYzNjQ2NDM4NDA4NzE2Mjk4.XMnCdg.xn67b6wg4z-V0pRP37P5GB5IPQ4");
