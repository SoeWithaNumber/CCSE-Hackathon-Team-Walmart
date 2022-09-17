const { EmbedBuilder } = require("discord.js");
function execute(interaction) {
    const noteEmbed = new EmbedBuilder()
    .setTitle("Discrete math unit 4.1 notes")
    .setDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis feugiat sem, ut pellentesque tellus semper a. Nam nec dignissim nisi. Sed non tincidunt odio. Mauris pretium ultricies felis vel dignissim. Maecenas sollicitudin sodales tellus. Integer eu nibh arcu. Nullam blandit neque enim, eu suscipit orci ornare id. Pellentesque egestas dolor metus, et auctor quam fringilla id. Maecenas aliquet efficitur fringilla. Nunc euismod elementum ligula quis maximus. Nullam ac quam vel ipsum tristique condimentum. Donec vehicula convallis tellus, eu maximus quam venenatis eu. Nunc id pulvinar velit.")
    .setFields(
        {name: "Tags", value: "Test 1, Mathmatics"}
    )

    interaction.reply({embeds: [noteEmbed]})
}

module.exports = {
    execute,
    name: "get"

}

