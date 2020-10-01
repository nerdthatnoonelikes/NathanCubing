const {MessageEmbed} = require("discord.js")
const fetch = require('node-fetch')

module.exports = {
    name: "blurpify",
    description: "blurpify someone",

    async run(client, message, args) {
        let person = message.mentions.users.first() || message.author

        
        const msg = await message.channel.send("Blurpifying...(this may take a while)")
        fetch(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${person.displayAvatarURL({size: 1024, dynamic: true})}`)
        .then((res) => res.json())
        .then((body) => {
            console.log(body)
            let embed = new MessageEmbed()
            .setTitle(`${person.username} got blurpified`)
            .setImage(body.message)
            .setColor("RANDOM")
            msg.edit(embed)
        })
    }
}