const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
    const helpEmbed = new EmbedBuilder()
        .setTitle("Welcome to Discord Notes! \n Below are the list of commands \n available for use!")
        .setColor("Blue")
        .setDescription("List \n Share \n Tag \n NoteStart \n NoteEnd")
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


