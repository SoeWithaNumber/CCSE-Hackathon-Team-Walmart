const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
    const listEmbed = new EmbedBuilder()
        .setTitle("Discord Notes List")
        .setColor("Blue")
        .setDescription("Discrete math unit 4.1 notes\nspanish chapter 3 notes\nworld lit don quixote")
        .setFooter({ text: "Version 0.1.0-dev" })
    interaction.reply({ embeds: [listEmbed] })
}

module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("list")
        .setDescription("Discord notes List Command"),
    name: "list"

}