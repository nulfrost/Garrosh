const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("heyo")
}

module.exports.help = {
    name: "roster"
}

//this command will handle the guild raid team roster