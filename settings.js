const chalk = require("chalk")
const fs = require("fs")

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['918348225320'] //ur owner number
global.ownernomer = "918348225320" //ur owner number2
global.ownername = "🦄Dream Guy Deepak" //ur owner name
global.ytname = "YT: Deepak" //ur yt chanel name
global.socialm = "GitHub: DGDEEPAK" //ur github or insta name
global.location = "India, West Bengal, Darjeeling" //ur location

//new
global.botname = "Zenitsu-Bot"
global.ownernumber = '918348225320'
global.ownername = '🦄Dream Guy Deepak'
global.ownerNumber = ["918348225320@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@dreamguydeepak"
global.websitex = "https://youtube.com/@dreamguydeepak"
global.wagc = "https://chat.whatsapp.com/KguOo9XsRTW2iESYuHzVX1"
global.themeemoji = '🫂'
global.wm = "DeepaK Bot Inc."
global.botscript = 'https://github.com/DGDEEPAK/Zenitsu-Bot3' //script link
global.packname = "Zenitsu-Bot"
global.author = "🦄Dream Guy Deepak"
global.creator = "918348225320@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0

//media target
global.thum = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur logo pic
global.err4r = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur error pic
global.thumb = fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: '𝐒𝐮𝐜𝐜𝐞𝐬𝐬!',
    admin: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐚𝐝𝐦𝐢𝐧𝐬 𝐨𝐧𝐥𝐲!',
    botAdmin: '𝐁𝐨𝐭 𝐌𝐮𝐬𝐭 𝐁𝐞 𝐀𝐝𝐦𝐢𝐧 𝐅𝐢𝐫𝐬𝐭!',
    premime: '𝐏𝐫𝐞𝐦𝐢𝐮𝐦 𝐒𝐩𝐞𝐜𝐢𝐚𝐥 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐈𝐟 𝐘𝐨𝐮 𝐖𝐚𝐧𝐭 𝐭𝐨 𝐑𝐞𝐠𝐢𝐬𝐭𝐞𝐫 𝐓𝐲𝐩𝐞 𝐑𝐞𝐧𝐭',
    owner: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 🦄𝐃𝐫𝐞𝐚𝐦 𝐆𝐮𝐲 𝐃𝐞𝐞𝐩𝐚𝐤 𝐨𝐧𝐥𝐲',
    group: '𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐔𝐬𝐞𝐝 𝐎𝐧𝐥𝐲 𝐅𝐨𝐫 𝐆𝐫𝐨𝐮𝐩𝐬!',
    private: '𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬 𝐔𝐬𝐞𝐝 𝐎𝐧𝐥𝐲 𝐅𝐨𝐫 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭!',
    bot: '𝐓𝐡𝐢𝐬 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐜𝐨𝐮𝐥𝐝 𝐛𝐞 𝐮𝐬𝐞𝐝 𝐛𝐲 𝐙𝐞𝐧𝐢𝐭𝐬𝐮-𝐁𝐨𝐭 𝐨𝐧𝐥𝐲!',
    wait: '𝐖𝐚𝐢𝐭...',
    linkm: '𝐖𝐡𝐞𝐫𝐞 𝐢𝐬 𝐭𝐡𝐞 𝐥𝐢𝐧𝐤?',
    endLimit: '𝐘𝐨𝐮𝐫 𝐃𝐚𝐢𝐥𝐲 𝐋𝐢𝐦𝐢𝐭 𝐇𝐚𝐬 𝐄𝐱𝐩𝐢𝐫𝐞𝐝, 𝐓𝐡𝐞 𝐋𝐢𝐦𝐢𝐭 𝐖𝐢𝐥𝐥 𝐁𝐞 𝐑𝐞𝐬𝐞𝐭 𝐄𝐯𝐞𝐫𝐲 𝟏𝟐 𝐇𝐨𝐮𝐫𝐬',
    nsfw: '𝐓𝐡𝐞 𝐧𝐬𝐟𝐰 𝐟𝐞𝐚𝐭𝐮𝐫𝐞 𝐡𝐚𝐬 𝐧𝐨𝐭 𝐛𝐞𝐞𝐧 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞𝐝, 𝐩𝐥𝐞𝐚𝐬𝐞 𝐜𝐨𝐧𝐭𝐚𝐜𝐭 𝐭𝐡𝐞 𝐚𝐝𝐦𝐢𝐧 𝐭𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞(𝐓𝐲𝐩𝐞 𝐍𝐬𝐟𝐰 𝐨𝐧)𝐭𝐨 𝐚𝐜𝐭𝐢𝐯𝐚𝐭𝐞',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})