const {} = require("discord.js");
function execute(interaction) {
    USER_ID = interaction.user.id
    interaction.client.collectors ["USER_ID"].on("end", collected => {
        interaction.reply("Stopped listening")
    })
}

module.exports = {
    execute,
    name: "end"

}

