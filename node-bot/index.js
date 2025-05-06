
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on('ready', () => {
  console.log(`Bot ist online als ${client.user.tag}`);
});

client.login(process.env.TOKEN);
