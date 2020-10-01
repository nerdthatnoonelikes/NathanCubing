const {MessageEmbed} = require("discord.js")
const fetch = require('node-fetch')

module.exports = {
    name: "koala",
    description: "get a koala pic",

    async run(client, message, args) {
        const msg = await message.channel.send("Fetching a koala picture...")
        fetch("https://some-random-api.ml/img/koala")
        .then((res) => res.json())
        .then((body) => {
            console.log(body)
            let embed = new MessageEmbed()
            .setTitle(`Koala for ${message.author.username}`)
            .setImage(body.link)
            .setTimestamp(Date.now())
            .setColor("RANDOM")
            msg.edit(embed)
        })
    }
}