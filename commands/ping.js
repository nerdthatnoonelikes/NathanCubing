module.exports = {
    name: "ping",
    description: "test command",

    async run (client, message, args) {
        message.channel.send(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);
    }
}