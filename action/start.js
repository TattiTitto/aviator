const { Markup, session } = require('telegraf')
const { bot } = require('../core/bot')

const allBoard = [
    ["✈️ Keyingi koeffitsientni aniqlash 🔒", "🤖 Botni qayta ishga tushurish 🔄"],
    ["Bot yaratuvchisi haqida 👤", "✈️ AVIATOR oʻyini haqida maʼlumot ⭐️"],
    ["🛠 Bot xato ishlayaptimi"]
]

bot.start(ctx => start(ctx))
bot.hears("🤖 Botni qayta ishga tushurish 🔄", ctx => start(ctx))
bot.hears("🔙 Ortga", ctx => {
    if(ctx.session.choiseGame == "Aviator")choiseGame(ctx, "Aviator")
    if(ctx.session.choiseGame == "Lucky JET")choiseGame(ctx, "Lucky JET")
})

bot.hears("Bot yaratuvchisi haqida 👤", ctx => {
    ctx.reply(`💬💬💬

    Assalom-u alaykum! Hozirgi kunda juda ko'p insonlar bukmeker companiyalarda o'z pullarini havoga sovurmoqdalar ❌
    
    Bunaqa insonlarni  ko'p ko'rdim , o'zim ham bir vaqtlar 1xbet, mostbet, Melbetlarda o'ynab biroz yutib oxirida  yutqazganman,kópchilik kabi 
    
    Shu sababdan 2 yil  vaqtimni dasturchilikni o'rganishga bag'ishladim , hozir esa shu soha bo'yicha mutaxasisman , Xususiy firmada 20 - 22 million oylik olib faoliyatimni yurityapman.🔰
    
    
    ♠️ Buni menga nima ahamiyati bor deyayotgandirsiz , unda diqqat bilan O'QING: kuni kecha 1Win platformasining dasturiy jihatdan uncha mukammal emasligini sezdim va tizimni buzib kirishga muvaffaq bo'ldim Va Aviator oʻyini uchun analitika qiladigan bot yaratdim. 🔄
    
    
    3 kunni ichida turli xil strategiyalar orqali 80 million summa chiqarib oldim Sberbank kartamga, yolg'iz o'zim foyda olsam ham bo'lmaydimi? Ha bo'ladi.
    
    🛑🛑🛑
    
    Lekin mening niyatim bu companiyani butkul bankrot qilish . Chunki men bunday hammani aldaydigan qimor companiyalardan nafratlanaman.
    Buning uchun menga siz yurtdoshlarning yordamingiz kerak! Bot bergan Aviator analitika orqali saytga kirib o'ynang va men bilan birga millionlab daromad qiling 🔥✅`)
})

bot.hears("✈️ AVIATOR oʻyini haqida maʼlumot ⭐️", ctx => {
    ctx.reply(`🚀 Sizga LUCKY JET ( AVIATOR ) o'yinining printsiplarini qisqacha tushuntirib beramiz:
    
    1️⃣ O'yin  x1 kofisentdandan boshlanadi va samolyot ko'tarilgach tobora ko'payib boradi.
    2️⃣ O'yin uchun summani tanlang va Pul Tikish tugmasini bosing.
    3️⃣Uz yutuqlarni qaytarib olish uchun Pul chiqarish  tugmachasini bosing (Necha kofisentda Pulni chiqarsangiz shuncha foyda ko'rasiz)
    4⃣ Koeffitsientlar to'liq shaffof va 100% adolatli.
    
    1windan roʻyhatdan oʻtish uchun bosing 👇👇👇
    https://1wytk.top/
    https://1wytk.top/
    https://1wytk.top/
    ----------------------------`)
})

bot.hears("🛠 Bot xato ishlayaptimi", ctx => {
    ctx.reply("Bot ishlashi boyicha muommo bolsa @Shohrux_Fayziyev ga yozing muommo hal qilinadi✅")
})

async function start(ctx) {
    ctx.session.choiseGame = null
    await ctx.reply("🛑 Salom, Bot orqali Aviator oʻyini qancha koeffitsient uchishini oldindan bilishingiz mumkin🤝.", Markup.removeKeyboard())
    ctx.reply("Qaysi oʻyin uchun keyingi koeffitsient kerak bolsa tanlang 👇👇👇", Markup.inlineKeyboard([
        [Markup.button.callback("AVIATOR 🚀", "aviator")],
        [Markup.button.callback("LUCKY JET ⚡️", "luckyjet")]
    ]).resize())
}

function choiseGame(ctx, gameName) {
    ctx.session.choiseGame = gameName
    ctx.reply(`➡️ Siz 1 WIN ${gameName} oʻyinini tanladingiz.\n${gameName}da keyingi 🚀 🔐 koeffitsientni aniqlashi uchun botga oxirgi uchgan koeffitsientni yozib yuboring 🔄 🛑`, Markup.keyboard(allBoard).resize())
}

module.exports = {
    allBoard,
    choiseGame,
    start
}