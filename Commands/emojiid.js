const Discord = module.require("discord.js");

module.exports = {
    name: "emojiid",
    description: "Get ID of emojis",
    run: async (client, message, args) => {
        const emoji = message.guild.emojis.cache.find(r => r.name === args.slice(1).join(" "));
        if (!emoji) {
        return message.channel.send("Please type the name of an emoji");
        }
        message.channel.send(`${emoji.id}`)
}
}
