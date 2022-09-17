const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
function execute(interaction) {
}

module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("notes")
        .setDescription("Discord notes Notes Command")
        .addSubcommand(subcommand => subcommand
            .setName("add")
            .setDescription("Discord notes begin recording notes")
            )
        .addSubcommand(subcommand => subcommand
            .setName("end")
            .setDescription("Discord notes end recording notes")),
    name: "notes"

}