const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
}

module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("write")
        .setDescription("Discord notes Write Command"),
    name: "write"

}