const {} = require("discord.js");
function execute(interaction) {
    USER_ID = interaction.user.id
    interaction.client.collectors ["USER_ID"].collector.stop()
    }


module.exports = {
    execute,
    name: "end"

}

