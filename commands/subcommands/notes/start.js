const {} = require("discord.js");
async function execute(interaction) {
    interaction.reply("Start typing your notes!")
}

module.exports = {
    execute,
    name: "start"

}

