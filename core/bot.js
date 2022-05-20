const { Telegraf, session } = require('telegraf')
const dotenv = require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN)
bot.use(session())
bot.use((ctx, next) => { if (!ctx.session) { ctx.session = {}; }; next()});
bot.launch()

module.exports={
    bot
}