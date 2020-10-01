const {MessageEmbed} = require("discord.js")
const fetch = require('node-fetch')

module.exports = {
    name: "dog",
    description: "get a dog pic",

    async run(client, message, args) {
        const msg = await message.channel.send("Fetching a dog picture...")
        fetch("https://some-random-api.ml/img/dog")
        .then((res) => res.json())
        .then((body) => {
            console.log(body)
            let embed = new MessageEmbed()
            .setTitle(`Dog for ${message.author.username}`)
            .setImage(body.link)
            .setTimestamp(Date.now())
            .setColor("RANDOM")
            msg.edit(embed)
        })
    }
}