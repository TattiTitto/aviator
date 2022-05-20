const { Markup, Scenes: { WizardScene, Stage} } = require('telegraf')
const { bot } = require('../core/bot')
const { allBoard, start } = require('./start')
const XLSX = require('xlsx')

const kf = new WizardScene(
    "kf",
    async (ctx) => {
        ctx.wizard.next()
        return ctx.reply("Koeffitsient kiriting.", Markup.keyboard(["🔙 Ortga"]).resize())
    },
    async (ctx) => {
        if(ctx.message.text == "🔙 Ortga"){
            bot.hears("🔙 Ortga", ctx => {
                if(ctx.session.choiseGame == "Aviator")choiseGame(ctx, "Aviator")
                if(ctx.session.choiseGame == "Lucky JET")choiseGame(ctx, "Lucky JET")
            })
        }

        ctx.scene.leave()

        var workbook = XLSX.readFile('Avto_Otvet.xlsx')
        var sheet_name_list = workbook.SheetNames
        var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
        
        var otvet = xlData.find(x => x.kf == parseFloat(ctx.message.text)) || false
        console.log(otvet)
        if(otvet) return ctx.replyWithHTML(`<b>KEYINGI KOEFFITSIENT 👉 ${otvet.otvet_kf} ✅</b>`, Markup.keyboard(allBoard).resize())
        return ctx.replyWithHTML(`<b>KEYINGI KOEFFITSIENT 👉 ${(parseFloat(ctx.message.text) * 1.5).toFixed(2)} ✅</b>`, Markup.keyboard(allBoard).resize())
    },
)

const stage = new Stage([kf])

bot.use(stage.middleware())
bot.hears("✈️ Keyingi koeffitsientni aniqlash 🔒", ctx => {
    console.log(ctx.session.choiseGame)
    if(ctx.session.choiseGame) ctx.scene.enter("kf")
    else {
        ctx.reply("Avval o'yinni tanlang!")
        start(ctx)
    }
})