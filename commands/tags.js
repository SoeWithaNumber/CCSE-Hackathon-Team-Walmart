const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
    
    interaction.reply("Discreet Math Unit 4.1 tagged with Test 1 and Mathematics")
}

module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("tags")
        .setDescription("Discord notes Tags Command")
        .addStringOption(option=>
            option.setName("note")
            .setDescription("The note whose tags you want to edit")
            .setRequired(true)
        )
        .addStringOption(option =>
            option.setName("tags")
            .setDescription("The tags you want to add")
            .setRequired(true)
        ),
    name: "tags"

}