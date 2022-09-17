const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
    interaction.reply("Shared Discreet math unit 4.1 notes with english")
}

module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("share")
        .setDescription("Discord notes Help Command")
        .addUserOption(option=>
            option.setName("user")
            .setDescription("The user you want to share the note with")
            .setRequired(true)
        )
        .addStringOption(option=>
            option.setName("note")
            .setDescription("The note you want to share")
            .setRequired(true)
        ),
    name: "share"

}

