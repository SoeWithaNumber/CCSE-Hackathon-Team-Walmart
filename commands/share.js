const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
    interaction.reply("Shared Discreed math unti 4.1 notes with english")
}

module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("share")
        .setDescription("Discord notes Help Command"),
    name: "share"

}

