const {} = require("discord.js");
function execute(interaction) {
    interaction.reply("Finished recording notes!")
}

module.exports = {
    execute,
    name: "end"

}

