const path = require("path");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
require("dotenv").config();
const fs = require('node:fs');

const commands = [];
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

// Place your client and guild ids here
const clientId = process.env.DISCORD_CLIENT_ID;
const guildId = '1020197393876127755';

for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();