const { Collection, SlashCommandBuilder } = require("discord.js");
const { exec } = require("node:child_process");
const {readdirSync} = require("node:fs")
function execute(interaction) {
    const subcommands = new Collection()
    let subcommandNames = readdirSync("./commands/subcommands/notes").filter((file) => file.endsWith(".js"))
    subcommandNames.forEach((file)=>{
        const command = require(`./subcommands/notes/${file}`)
        subcommands.set(command.name, command)
    })

    switch(interaction.options.getSubcommand()){
        case "start":
            subcommands.get("start").execute(interaction)
            break
        case "end":
            subcommands.get("end").execute(interaction)
    }
}
module.exports = {
    execute,
    data: new SlashCommandBuilder()
        .setName("notes")
        .setDescription("Discord notes Notes Command")
        .addSubcommand(subcommand => subcommand
            .setName("start")
            .setDescription("Discord notes begin recording notes")
            )
        .addSubcommand(subcommand => subcommand
            .setName("end")
            .setDescription("Discord notes end recording notes")),
    name: "notes"

}