let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
══════════════════════════
║╠═════〘 INFO BOT 〙════════
║╠➥ Dibuat dengan bahasa javascript via NodeJs
║╠➥ Rec: FAISAL WAPI
║╠➥ Script: @faisall_wapi
║╠➥ Github Bot: https://github.com/isallbot/bot-v3
║╠➥ Instagram: @faisall_wapi
║╠➥ YouTube: ISALL GANS 
║╠➥ Tiktok: @gans.nih
║╠═════〘 DONASI 〙══════════
║╠═〘 DONASI 〙 ═
║╠➥ *GOPAY* : 0896-3026-7618
║╠➥ *TRI* : 0896-3026-7618
║╠➥ *SAWERIA* : https://saweria.co/fwgaming
║║
║╠➥Request? Wa.me/6289630267618
║║
║╠════〘 BOT ISALL V3 〙═══════
═══════════════════════════
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

