let handler = async m => m.reply(`
╭─「 *Donasi • MR.ISALL* 」
│ • *GOPAY* : [0896-3026-7618]
│ • *TRI* : [0896-3026-7618]
│ • *SAWERIA* : [https://saweria.co/fwgaming]
│ 「 Chat OWNER 」
│ > Ingin DONASI? Wa.me/6289630267618
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
