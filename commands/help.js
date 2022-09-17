const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
    const helpEmbed = new EmbedBuilder()
        .setTitle("Welcome to Discord Notes!")
        .setColor("Blue")
        .setDescription("Commands:\nhelp\ntags\nlist\nnotes start")
        .setFooter({ text: "Version 0.1.0-dev" })
    interaction.reply({ embeds: [helpEmbed] })
}

module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Discord notes Help Command"),
    name: "help"

}

