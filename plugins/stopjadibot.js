let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'KALO MAU JADI BOT BAYAR!', m)
  else {
    await conn.reply(m.chat, 'PERPANJANG BAYAR 20K')', m)
    conn.close()
  }
}
handler.help = ['berhenti','stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

