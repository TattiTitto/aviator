const { Markup } = require('telegraf')
const { bot } = require('../core/bot')
const { choiseGame } = require('./start')

bot.on("callback_query", ctx => {
    if(ctx.callbackQuery.data == "aviator")choiseGame(ctx, "Aviator")
    if(ctx.callbackQuery.data == "luckyjet")choiseGame(ctx, "Lucky JET")
    ctx.answerCbQuery()
})