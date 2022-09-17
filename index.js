const {Client,Collection,GatewayIntentBits, BitField}=require("discord.js");
const {readdirSync}=require("node:fs");
require("dotenv").config();

const bot = new Client({
    intents: [GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages]
});

//welcome to the world :)
const token = process.env.DISCORD_BOT_TOKEN;
bot.login(token);

//pulling commands
bot.commands = new Collection();
const commandFiles = readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (let i = 0; i < commandFiles.length; i++) {
    const command = require("./commands/"+commandFiles[i]);
    bot.commands.set(command.name,command);
};

//when bot is ready
bot.on("ready",()=>{
    console.log("Paw patrol is on a roll")
});

bot.on("interactionCreate", (interaction)=>{
    if (!interaction.isChatInputCommand()) return;
    switch(interaction.commandName){
        case "help": bot.commands.get("help").execute(interaction);break;
        case "notes": bot.commands.get("notes").execute(interaction);break;
        case "tags": bot.commands.get("tags").execute(interaction);break;
        case "list": bot.commands.get("list").execute(interaction);break;
    }
    
})