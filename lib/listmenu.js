const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙊𝙬𝙣𝙚𝙧 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.self 🅞
┣❏✗.public 🅞
┣❏✗.join 🅞
┣❏✗.bctext 🅞
┣❏✗.bcimage 🅞
┣❏✗.bcvideo 🅞
┣❏✗.creategc 🅞
┣❏✗.setexif 🅞
┣❏✗.shutdown 🅞
┣❏✗.autostickergc 🅞
┣❏✗.setppbot 🅞
┣❏✗.addprem 🅞
┣❏✗.delprem 🅞
┣❏✗.addowner 🅞
┣❏✗.delowner 🅞
┣❏✗.addvn 🅞
┣❏✗.delvn 🅞
┣❏✗.addsticker 🅞
┣❏✗.delsticker 🅞
┣❏✗.addimage 🅞
┣❏✗.delimage 🅞
┣❏✗.addvideo 🅞
┣❏✗.delvideo 🅞
┣❏✗.block add 🅞
┣❏✗.unblock del 🅞
┣❏✗.leavegc 🅞
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.tiktokvideo 🅕
┣❏✗.tiktokaudio 🅕
┣❏✗.ytsearch 🅕
┣❏✗.mediafire 🅕
┣❏✗.play 🅕
┣❏✗.ytmp3 🅕
┣❏✗.ytmp4 🅕
┣❏✗.google 🅕
┣❏✗.spotify 🅕
┣❏✗.gitclone 🅕
┣❏✗.happymod 🅕
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.antilink 🅖
┣❏✗.antiwame 🅖
┣❏✗.grouplink 🅖
┣❏✗.ephemeral 🅖
┣❏✗.delete 🅖
┣❏✗.setppgroup 🅖
┣❏✗.setname 🅖
┣❏✗.setdesc 🅖
┣❏✗.add 🅖
┣❏✗.kick 🅖
┣❏✗.promote 🅖
┣❏✗.demote 🅖
┣❏✗.hidetag 🅖
┣❏✗.tagall 🅖
┣❏✗.editinfo 🅖
┣❏✗.opentime 🅖
┣❏✗.closetime 🅖
┣❏✗.resetlink 🅖
┣❏✗.autostickerpc 🅖
┣❏✗.antilinkgc 🅖
┣❏✗.antiwame 🅖
┣❏✗.antilinkall 🅖
┣❏✗.antilinktiktok 🅖
┣❏✗.antilinkfb 🅖
┣❏✗.antilinktwitter 🅖
┣❏✗.antilinkig 🅖
┣❏✗.antlinktg 🅖
┣❏✗.antilinkytvid 🅖
┣❏✗.antilinkytch 🅖
┣❏✗.antivirus 🅖
┣❏✗.antitoxic 🅖
┣❏✗.nsfw 🅖
┣❏✗.react 🅖
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙍𝙖𝙣𝙙𝙤𝙢 𝙑𝙞𝙙𝙚𝙤ꫂ❍
┣❏✗.tiktokgirl 🅟
┣❏✗.tiktoknukthy 🅟
┣❏✗.tiktokkayes 🅟
┣❏✗.tiktokpanrika 🅟
┣❏✗.tiktoknotnot 🅟
┣❏✗.tiktokghea 🅟
┣❏✗.tiktoksantuy 🅟
┣❏✗.tiktokbocil 🅟
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙎𝙩𝙖𝙡𝙠𝙚𝙧ꫂ❍
┣❏✗.igstalk 🅟
┣❏✗.ffstalk 🅟
┣❏✗.mlstalk 🅟
┣❏✗.npmstalk 🅟
┣❏✗.ghstalk 🅟
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙊𝙩𝙝𝙚𝙧 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.ping 🅕
┣❏✗.menu 🅕
┣❏✗.listpem 🅕
┣❏✗.liststicker 🅕
┣❏✗.listimage 🅕
┣❏✗.listvideo 🅕
┣❏✗.listvn 🅕
┣❏✗.listbadword 🅕
┣❏✗.listpc 🅕
┣❏✗.listgc 🅕
┣❏✗.owner 🅕
┣❏✗.rentbot 🅟
┣❏✗.listrentbot 🅟
┣❏✗.donate 🅕
┣❏✗.friend 🅕
┣❏✗.obfuscate 🅕
┣❏✗.styletext 🅕
┣❏✗.fliptext 🅕
┣❏✗.tts 🅕
┣❏✗.say 🅕
┣❏✗.togif 🅕
┣❏✗.toqr 🅕
┣❏✗.bass 🅕
┣❏✗.blown 🅕
┣❏✗.deep 🅕
┣❏✗.earrape 🅕
┣❏✗.fast 🅕
┣❏✗.fat 🅕
┣❏✗.nightcore 🅕
┣❏✗.reverse 🅕
┣❏✗.robot 🅕
┣❏✗.slow 🅕
┣❏✗.smooth 🅕
┣❏✗.squirrel 🅕
┣❏✗.tinyurl 🅕
┣❏✗.tinyurl 🅕
┣❏✗.tourl 🅕
┣❏✗.tovn 🅕
┣❏✗.toaudio 🅕
┣❏✗.tomp3 🅕
┣❏✗.tomp4🅕
┣❏✗.toimg 🅕
┣❏✗.toonce 🅕
┣❏✗.sticker 🅕
┣❏✗.take 🅕
┣❏✗.emoji 🅕
┣❏✗.volume 🅕
┣❏✗.ebinary 🅕
┣❏✗.dbinary 🅕
┣❏✗.ssweb 🅕
┣❏✗.quoted 🅕
┣❏✗.runtime 🅕
┣❏✗.sound1 - sound161 🅕
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙁𝙪𝙣 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.define 🅕
┣❏✗.truth 🅕
┣❏✗.dare 🅕
┣❏✗.couple 🅕
┣❏✗.soulmate 🅕
┣❏✗.stupidcheck 🅕
┣❏✗.handsomecheck 🅕
┣❏✗.uncleancheck 🅕
┣❏✗.hotcheck 🅕
┣❏✗.smartcheck 🅕
┣❏✗.greatcheck 🅕
┣❏✗.evilcheck 🅕
┣❏✗.dogcheck 🅕
┣❏✗.coolcheck 🅕
┣❏✗.waifucheck 🅕
┣❏✗.awesomecheck 🅕
┣❏✗.gaycheck 🅕
┣❏✗.cutecheck 🅕
┣❏✗.lesbiancheck 🅕
┣❏✗.hornycheck 🅕
┣❏✗.prettycheck 🅕
┣❏✗.lovelycheck 🅕
┣❏✗.uglycheck 🅕
┣❏✗.hot 🅕
┣❏✗.sexy 🅕
┣❏✗.kind 🅕
┣❏✗.idiot 🅕
┣❏✗.handsome 🅕
┣❏✗.beautiful 🅕
┣❏✗.cute 🅕
┣❏✗.pretty 🅕
┣❏✗.lesbian 🅕
┣❏✗.noob 🅕
┣❏✗.bastard 🅕
┣❏✗.foolish 🅕
┣❏✗.nerd 🅕
┣❏✗.asshole 🅕
┣❏✗.gay 🅕
┣❏✗.smart 🅕
┣❏✗.stubble 🅕
┣❏✗.doggo 🅕
┣❏✗.horny 🅕
┣❏✗.cunt 🅕
┣❏✗.wibu 🅕
┣❏✗.noobra 🅕
┣❏✗.nibba 🅕
┣❏✗.nibbi 🅕
┣❏✗.comrade 🅕
┣❏✗.mumu 🅕
┣❏✗.rascal 🅕
┣❏✗.scumbag 🅕 
┣❏✗.nuts 🅕
┣❏✗.fagot 🅕
┣❏✗.scoundrel 🅕
┣❏✗.ditch 🅕
┣❏✗.dope 🅕
┣❏✗.gucci 🅕
┣❏✗.lit 🅕
┣❏✗.dumbass 🅕
┣❏✗.crackhead 🅕
┣❏✗.mf 🅕
┣❏✗.motherfucker 🅕
┣❏✗.sucker 🅕
┣❏✗.fuckboy 🅕
┣❏✗.playboy 🅕
┣❏✗.fuckgirl 🅕
┣❏✗.playgirl 🅕
┣❏✗.quotes 🅕
┣❏✗.can 🅕
┣❏✗.is 🅕
┣❏✗.when 🅕
┣❏✗.where 🅕
┣❏✗.what 🅕
┣❏✗.how 🅕
┣❏✗.rate 🅕
┣❏✗.cry 🅟
┣❏✗.kill 🅟
┣❏✗.hug 🅟
┣❏✗.pat 🅟
┣❏✗.lick 🅟 
┣❏✗.kiss 🅟
┣❏✗.bite 🅟
┣❏✗.yeet 🅟
┣❏✗.bully 🅟
┣❏✗.bonk 🅟
┣❏✗.wink 🅟
┣❏✗.poke 🅟
┣❏✗.nom 🅟
┣❏✗.slap 🅟
┣❏✗.smile 🅟 
┣❏✗.wave 🅟
┣❏✗.awoo 🅟
┣❏✗.blush 🅟
┣❏✗.smug 🅟
┣❏✗.glomp 🅟 
┣❏✗.happy 🅟
┣❏✗.dance 🅟
┣❏✗.cringe 🅟
┣❏✗.cuddle 🅟
┣❏✗.highfive 🅟 
┣❏✗.shinobu 🅟
┣❏✗.handhold 🅟
┣❏✗.horny 🅕
┣❏✗.checkme 🅕
┣❏✗.confess 🅕
┣❏✗.leave 🅕
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙍𝙖𝙣𝙙𝙤𝙢 𝙋𝙝𝙤𝙩𝙤ꫂ❍
┣❏✗.aesthetic 🅟
┣❏✗.coffee 🅟
┣❏✗.wikimedia 🅟
┣❏✗.wallpaper 🅟
┣❏✗.art 🅟
┣❏✗.bts 🅟
┣❏✗.woof 🅕
┣❏✗.meow 🅕
┣❏✗.lizard 🅕
┣❏✗.cosplay 🅟
┣❏✗.hacker 🅟
┣❏✗.cyber 🅟
┣❏✗.gamewallpaper 🅟
┣❏✗.islamic 🅟
┣❏✗.jennie 🅟
┣❏✗.jiso 🅟
┣❏✗.satanic 🅟
┣❏✗.justina 🅟
┣❏✗.cartoon 🅟
┣❏✗.pentol 🅟
┣❏✗.cat 🅕
┣❏✗.kpop 🅕
┣❏✗.exo 🅟
┣❏✗.lisa 🅟
┣❏✗.space 🅟
┣❏✗.car 🅟
┣❏✗.technology 🅟
┣❏✗.bike 🅟
┣❏✗.shortquote 🅟
┣❏✗.antiwork 🅕
┣❏✗.hacking 🅕
┣❏✗.boneka 🅕
┣❏✗.rose 🅕
┣❏✗.ryujin 🅕
┣❏✗.ulzzangboy 🅕
┣❏✗.ulzzanggirl 🅕
┣❏✗.wallml 🅕
┣❏✗.wallphone 🅕
┣❏✗.mountain 🅟
┣❏✗.goose 🅕
┣❏✗.profilepic 🅕
┣❏✗.couplepic 🅕
┣❏✗.programming 🅟
┣❏✗.pubg 🅕
┣❏✗.blackpink 🅕
┣❏✗.randomboy 🅕  
┣❏✗.randomgirl 🅕
┣❏✗.hijab 🅕  
┣❏✗.chinese 🅕
┣❏✗.indo 🅕
┣❏✗.japanese 🅕
┣❏✗.korean 🅕
┣❏✗.malay 🅕
┣❏✗.thai 🅕
┣❏✗.vietnamese 🅕
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝘼𝙣𝙞𝙢𝙚ꫂ❍
┣❏✗.akira 🅟
┣❏✗.akiyama 🅟
┣❏✗.ana 🅟
┣❏✗.asuna 🅟
┣❏✗.ayuzawa 🅟
┣❏✗.boruto 🅟
┣❏✗.chiho 🅟
┣❏✗.chitoge 🅟
┣❏✗.cosplayloli 🅟
┣❏✗.cosplaysagiri 🅟
┣❏✗.deidara 🅟
┣❏✗.doraemon 🅟
┣❏✗.elaina 🅟
┣❏✗.emilia 🅟
┣❏✗.erza 🅟
┣❏✗.gremory 🅟
┣❏✗.hestia 🅟
┣❏✗.hinata 🅟
┣❏✗.husbu 🅟
┣❏✗.inori 🅟
┣❏✗.isuzu 🅟
┣❏✗.itachi 🅟
┣❏✗.itori 🅟
┣❏✗.kaga 🅟
┣❏✗.kagura 🅟
┣❏✗.kakasih 🅟
┣❏✗.kaori 🅟
┣❏✗.keneki 🅟
┣❏✗.kotori 🅟
┣❏✗.kurumi 🅟
┣❏✗.loli 🅟
┣❏✗.madara 🅟
┣❏✗.megumin 🅟
┣❏✗.mikasa 🅟
┣❏✗.mikey 🅟
┣❏✗.miku 🅟
┣❏✗.minato 🅟
┣❏✗.naruto 🅟
┣❏✗.neko 🅟
┣❏✗.neko2 🅟
┣❏✗.nekonime 🅟
┣❏✗.nezuko 🅟
┣❏✗.onepiece 🅟
┣❏✗.pokemon 🅟
┣❏✗.randomnime 🅟
┣❏✗.randomnime2 🅟
┣❏✗.rize 🅟
┣❏✗.sagiri 🅟
┣❏✗.sakura 🅟
┣❏✗.sasuke 🅟
┣❏✗.shina 🅟
┣❏✗.shinka 🅟
┣❏✗.shinomiya 🅟
┣❏✗.shizuka 🅟
┣❏✗.shota 🅟
┣❏✗.tejina 🅟
┣❏✗.toukachan 🅟
┣❏✗.tsunade 🅟
┣❏✗.waifu 🅟
┣❏✗.animewall 🅟
┣❏✗.yotsuba 🅟
┣❏✗.yuki 🅟
┣❏✗.yulibocil 🅟
┣❏✗.yumeko 🅟
┣❏✗.8ball 🅕
┣❏✗.tickle 🅕
┣❏✗.gecg 🅕
┣❏✗.feed 🅕
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝘼𝙣𝙞𝙢𝙚 𝙉𝙎𝙁𝙒ꫂ❍
┣❏✗.hentai 🅕
┣❏✗.gifhentai 🅕
┣❏✗.gifblowjob 🅕
┣❏✗.hentaivid 🅕
┣❏✗.hneko 🅕
┣❏✗.nwaifu 🅕
┣❏✗.animespank 🅕
┣❏✗.trap 🅕
┣❏✗.gasm 🅕
┣❏✗.ahegao 🅕
┣❏✗.ass 🅕
┣❏✗.bdsm 🅕
┣❏✗.blowjob 🅕
┣❏✗.cuckold 🅕
┣❏✗.cum 🅕
┣❏✗.milf 🅕
┣❏✗.eba 🅕
┣❏✗.ero 🅕
┣❏✗.femdom 🅕
┣❏✗.foot 🅕
┣❏✗.gangbang 🅕
┣❏✗.glasses 🅕
┣❏✗.jahy 🅕
┣❏✗.masturbation 🅕
┣❏✗.manga 🅕
┣❏✗.neko-hentai 🅕
┣❏✗.neko-hentai2 🅕
┣❏✗.nsfwloli 🅕
┣❏✗.orgy 🅕
┣❏✗.panties 🅕 
┣❏✗.pussy 🅕
┣❏✗.tentacles 🅕
┣❏✗.thights 🅕
┣❏✗.yuri 🅕
┣❏✗.zettai 🅕
┗━━━━━━━━━━━━━━━━━❀

╔══ꪶ𝙎𝙤𝙪𝙣𝙙 𝙈𝙚𝙣𝙪ꫂ═══❀
║❒✗.sound1 🅕
║❒✗.sound2 🅕
║❒✗.sound3 🅕
║❒✗.sound4 🅕
║❒✗.sound5 🅕
║❒✗.sound6 🅕
║❒✗.sound7 🅕
║❒✗.sound8 🅕
║❒✗.sound9 🅕
║❒✗.sound10 🅕
║❒✗.sound11 🅕
║❒✗.sound12 🅕
║❒✗.sound13 🅕
║❒✗.sound14 🅕
║❒✗.sound15 🅕
║❒✗.sound16 🅕
║❒✗.sound17 🅕
║❒✗.sound18 🅕
║❒✗.sound19 🅕
║❒✗.sound20 🅕
║❒✗.sound21 🅕
║❒✗.sound22 🅕
║❒✗.sound23 🅕
║❒✗.sound24 🅕
║❒✗.sound25 🅕
║❒✗.sound26 🅕
║❒✗.sound27 🅕
║❒✗.sound28 🅕
║❒✗.sound29 🅕
║❒✗.sound30 🅕
║❒✗.sound31 🅕
║❒✗.sound32 🅕
║❒✗.sound33 🅕
║❒✗.sound34 🅕
║❒✗.sound35 🅕
║❒✗.sound36 🅕
║❒✗.sound37 🅕
║❒✗.sound38 🅕
║❒✗.sound39 🅕
║❒✗.sound40 🅕
║❒✗.sound41 🅕
║❒✗.sound42 🅕
║❒✗.sound43 🅕
║❒✗.sound44 🅕
║❒✗.sound45 🅕
║❒✗.sound46 🅕
║❒✗.sound47 🅕
║❒✗.sound48 🅕
║❒✗.sound49 🅕
║❒✗.sound50 🅕
║❒✗.sound51 🅕
║❒✗.sound52 🅕
║❒✗.sound53 🅕
║❒✗.sound54 🅕
║❒✗.sound55 🅕
║❒✗.sound56 🅕
║❒✗.sound57 🅕
║❒✗.sound58 🅕
║❒✗.sound59 🅕
║❒✗.sound60 🅕
║❒✗.sound61 🅕
║❒✗.sound62 🅕
║❒✗.sound63 🅕
║❒✗.sound64 🅕
║❒✗.sound65 🅕
║❒✗.sound66 🅕
║❒✗.sound67 🅕
║❒✗.sound68 🅕
║❒✗.sound69 🅕
║❒✗.sound70 🅕
║❒✗.sound71 🅕
║❒✗.sound72 🅕
║❒✗.sound73 🅕
║❒✗.sound74 🅕
║❒✗.sound75 🅕
║❒✗.sound76 🅕
║❒✗.sound77 🅕
║❒✗.sound78 🅕
║❒✗.sound79 🅕
║❒✗.sound80 🅕
║❒✗.sound81 🅕
║❒✗.sound82 🅕
║❒✗.sound83 🅕
║❒✗.sound84 🅕
║❒✗.sound85 🅕
║❒✗.sound86 🅕
║❒✗.sound87 🅕
║❒✗.sound88 🅕
║❒✗.sound89 🅕
║❒✗.sound90 🅕
║❒✗.sound91 🅕
║❒✗.sound92 🅕
║❒✗.sound93 🅕
║❒✗.sound94 🅕
║❒✗.sound95 🅕
║❒✗.sound96 🅕
║❒✗.sound97 🅕
║❒✗.sound98 🅕
║❒✗.sound99 🅕
║❒✗.sound100 🅕
║❒✗.sound101 🅕
║❒✗.sound102 🅕
║❒✗.sound103 🅕
║❒✗.sound104 🅕
║❒✗.sound105 🅕
║❒✗.sound106 🅕
║❒✗.sound107 🅕
║❒✗.sound108 🅕
║❒✗.sound109 🅕
║❒✗.sound110 🅕
║❒✗.sound111 🅕
║❒✗.sound112 🅕
║❒✗.sound113 🅕
║❒✗.sound114 🅕
║❒✗.sound115 🅕
║❒✗.sound116 🅕
║❒✗.sound117 🅕
║❒✗.sound118 🅕
║❒✗.sound119 🅕
║❒✗.sound120 🅕
║❒✗.sound121 🅕
║❒✗.sound122 🅕
║❒✗.sound123 🅕
║❒✗.sound124 🅕
║❒✗.sound125 🅕
║❒✗.sound126 🅕
║❒✗.sound127 🅕
║❒✗.sound128 🅕
║❒✗.sound129 🅕
║❒✗.sound130 🅕
║❒✗.sound131 🅕
║❒✗.sound132 🅕
║❒✗.sound133 🅕
║❒✗.sound134 🅕
║❒✗.sound135 🅕
║❒✗.sound136 🅕
║❒✗.sound137 🅕
║❒✗.sound138 🅕
║❒✗.sound139 🅕
║❒✗.sound140 🅕
║❒✗.sound141 🅕
║❒✗.sound142 🅕
║❒✗.sound143 🅕
║❒✗.sound144 🅕
║❒✗.sound145 🅕
║❒✗.sound146 🅕
║❒✗.sound147 🅕
║❒✗.sound148 🅕
║❒✗.sound149 🅕
║❒✗.sound150 🅕
║❒✗.sound151 🅕
║❒✗.sound152 🅕
║❒✗.sound153 🅕
║❒✗.sound154 🅕
║❒✗.sound155 🅕
║❒✗.sound156 🅕
║❒✗.sound157 🅕
║❒✗.sound158 🅕
║❒✗.sound159 🅕
║❒✗.sound160 🅕
║❒✗.sound161 🅕
╚═════════════════❀

┏❍ꪶ𝙏𝙚𝙭𝙩𝙥𝙧𝙤 𝙈𝙖𝙠𝙚𝙧ꫂ❍
┣❏✗.candy 🅟 
┣❏✗.christmas 🅟 
┣❏✗.3dchristmas 🅟 
┣❏✗.sparklechristmas 🅟
┣❏✗.deepsea 🅟 
┣❏✗.scifi 🅟 
┣❏✗.rainbow 🅟 
┣❏✗.waterpipe 🅟 
┣❏✗.spooky 🅟 
┣❏✗.pencil 🅟 
┣❏✗.circuit 🅟 
┣❏✗.discovery 🅟 
┣❏✗.metalic 🅟 
┣❏✗.fiction 🅟 
┣❏✗.demon 🅟 
┣❏✗.transformer 🅟 
┣❏✗.berry 🅟 
┣❏✗.thunder 🅟 
┣❏✗.magma 🅟 
┣❏✗.3dstone 🅟 
┣❏✗.neonlight 🅟 
┣❏✗.glitch 🅟 
┣❏✗.harrypotter 🅟 
┣❏✗.brokenglass 🅟 
┣❏✗.papercut 🅟 
┣❏✗.watercolor 🅟 
┣❏✗.multicolor 🅟 
┣❏✗.neondevil 🅟 
┣❏✗.underwater 🅟 
┣❏✗.graffitibike 🅟
┣❏✗.snow 🅟 
┣❏✗.cloud 🅟 
┣❏✗.honey 🅟 
┣❏✗.ice 🅟 
┣❏✗.fruitjuice 🅟 
┣❏✗.biscuit 🅟 
┣❏✗.wood 🅟 
┣❏✗.chocolate 🅟 
┣❏✗.strawberry 🅟 
┣❏✗.matrix 🅟 
┣❏✗.blood 🅟 
┣❏✗.dropwater 🅟 
┣❏✗.toxic 🅟 
┣❏✗.lava 🅟 
┣❏✗.rock 🅟 
┣❏✗.bloodglas 🅟 
┣❏✗.hallowen 🅟 
┣❏✗.darkgold 🅟 
┣❏✗.joker 🅟 
┣❏✗.wicker 🅟
┣❏✗.firework 🅟 
┣❏✗.skeleton 🅟 
┣❏✗.blackpink 🅟 
┣❏✗.sand 🅟 
┣❏✗.glue 🅟 
┣❏✗.1917 🅟 
┣❏✗.leaves 🅟
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙋𝙝𝙤𝙩𝙤𝙊𝙭𝙮 𝙈𝙖𝙠𝙚𝙧ꫂ❍
┣❏✗.shadow 🅟 
┣❏✗.write 🅟 
┣❏✗.romantic 🅟 
┣❏✗.burnpaper 🅟
┣❏✗.smoke 🅟 
┣❏✗.narutobanner 🅟 
┣❏✗.love 🅟 
┣❏✗.undergrass 🅟
┣❏✗.doublelove 🅟 
┣❏✗.coffecup 🅟
┣❏✗.underwaterocean 🅟
┣❏✗.smokyneon 🅟
┣❏✗.starstext 🅟
┣❏✗.rainboweffect 🅟
┣❏✗.balloontext 🅟
┣❏✗.metalliceffect 🅟
┣❏✗.embroiderytext 🅟
┣❏✗.flamingtext 🅟
┣❏✗.stonetext 🅟
┣❏✗.writeart 🅟
┣❏✗.summertext 🅟
┣❏✗.wolfmetaltext 🅟
┣❏✗.nature3dtext 🅟
┣❏✗.rosestext 🅟
┣❏✗.naturetypography 🅟
┣❏✗.quotesunder 🅟
┣❏✗.shinetext 🅟
┗━━━━━━━━━━━━━━━━━❀

┏❍ꪶ𝙀𝙥𝙝𝙤𝙩𝙤360𝙈𝙖𝙠𝙚𝙧ꫂ❍
┣❏✗.glitchtext 🅟
┣❏✗.writetext 🅟
┣❏✗.advancedglow 🅟
┣❏✗.typographytext 🅟
┣❏✗.pixelglitch 🅟
┣❏✗.neonglitch 🅟
┣❏✗.flagtext 🅟
┣❏✗.flag3dtext 🅟
┣❏✗.deletingtext 🅟
┣❏✗.blackpinkstyle 🅟
┣❏✗.glowingtext 🅟
┣❏✗.underwatertext 🅟
┣❏✗.logomaker 🅟
┣❏✗.cartoonstyle 🅟
┣❏✗.papercutstyle 🅟
┣❏✗.watercolortext 🅟
┣❏✗.effectclouds 🅟
┣❏✗.blackpinklogo 🅟
┣❏✗.gradienttext 🅟
┣❏✗.summerbeach 🅟
┣❏✗.luxurygold 🅟
┣❏✗.multicoloredneon 🅟
┣❏✗.sandsummer 🅟
┣❏✗.galaxywallpaper 🅟
┣❏✗.1917style 🅟
┣❏✗.makingneon 🅟
┣❏✗.royaltext 🅟
┣❏✗.freecreate 🅟
┣❏✗.galaxystyle 🅟
┣❏✗.lighteffects 🅟
┗━━━━━━━━━━━━━━━━━❀
`}

global.animemenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝘼𝙣𝙞𝙢𝙚ꫂ❍
┣❏✗.akira 🅟
┣❏✗.akiyama 🅟
┣❏✗.ana 🅟
┣❏✗.asuna 🅟
┣❏✗.ayuzawa 🅟
┣❏✗.boruto 🅟
┣❏✗.chiho 🅟
┣❏✗.chitoge 🅟
┣❏✗.cosplayloli 🅟
┣❏✗.cosplaysagiri 🅟
┣❏✗.deidara 🅟
┣❏✗.doraemon 🅟
┣❏✗.elaina 🅟
┣❏✗.emilia 🅟
┣❏✗.erza 🅟
┣❏✗.gremory 🅟
┣❏✗.hestia 🅟
┣❏✗.hinata 🅟
┣❏✗.husbu 🅟
┣❏✗.inori 🅟
┣❏✗.isuzu 🅟
┣❏✗.itachi 🅟
┣❏✗.itori 🅟
┣❏✗.kaga 🅟
┣❏✗.kagura 🅟
┣❏✗.kakasih 🅟
┣❏✗.kaori 🅟
┣❏✗.keneki 🅟
┣❏✗.kotori 🅟
┣❏✗.kurumi 🅟
┣❏✗.loli 🅟
┣❏✗.madara 🅟
┣❏✗.megumin 🅟
┣❏✗.mikasa 🅟
┣❏✗.mikey 🅟
┣❏✗.miku 🅟
┣❏✗.minato 🅟
┣❏✗.naruto 🅟
┣❏✗.neko 🅟
┣❏✗.neko2 🅟
┣❏✗.nekonime 🅟
┣❏✗.nezuko 🅟
┣❏✗.onepiece 🅟
┣❏✗.pokemon 🅟
┣❏✗.randomnime 🅟
┣❏✗.randomnime2 🅟
┣❏✗.rize 🅟
┣❏✗.sagiri 🅟
┣❏✗.sakura 🅟
┣❏✗.sasuke 🅟
┣❏✗.shina 🅟
┣❏✗.shinka 🅟
┣❏✗.shinomiya 🅟
┣❏✗.shizuka 🅟
┣❏✗.shota 🅟
┣❏✗.tejina 🅟
┣❏✗.toukachan 🅟
┣❏✗.tsunade 🅟
┣❏✗.waifu 🅟
┣❏✗.animewall 🅟
┣❏✗.yotsuba 🅟
┣❏✗.yuki 🅟
┣❏✗.yulibocil 🅟
┣❏✗.yumeko 🅟
┣❏✗.8ball 🅕
┣❏✗.tickle 🅕
┣❏✗.gecg 🅕
┣❏✗.feed 🅕
┗━━━━━━━━━━━━━━━━━❀
`}

global.ownermenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙊𝙬𝙣𝙚𝙧 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.self 🅞
┣❏✗.public 🅞
┣❏✗.join 🅞
┣❏✗.bctext 🅞
┣❏✗.bcimage 🅞
┣❏✗.bcvideo 🅞
┣❏✗.creategc 🅞
┣❏✗.setexif 🅞
┣❏✗.shutdown 🅞
┣❏✗.autostickergc 🅞
┣❏✗.setppbot 🅞
┣❏✗.addprem 🅞
┣❏✗.delprem 🅞
┣❏✗.addowner 🅞
┣❏✗.delowner 🅞
┣❏✗.addvn 🅞
┣❏✗.delvn 🅞
┣❏✗.addsticker 🅞
┣❏✗.delsticker 🅞
┣❏✗.addimage 🅞
┣❏✗.delimage 🅞
┣❏✗.addvideo 🅞
┣❏✗.delvideo 🅞
┣❏✗.block add 🅞
┣❏✗.unblock del 🅞
┣❏✗.leavegc 🅞
┗━━━━━━━━━━━━━━━━━❀
`}

global.othermenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙊𝙩𝙝𝙚𝙧 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.ping 🅕
┣❏✗.menu 🅕
┣❏✗.listpem 🅕
┣❏✗.liststicker 🅕
┣❏✗.listimage 🅕
┣❏✗.listvideo 🅕
┣❏✗.listvn 🅕
┣❏✗.listbadword 🅕
┣❏✗.listpc 🅕
┣❏✗.listgc 🅕
┣❏✗.owner 🅕
┣❏✗.rentbot 🅟
┣❏✗.listrentbot 🅟
┣❏✗.donate 🅕
┣❏✗.friend 🅕
┣❏✗.obfuscate 🅕
┣❏✗.styletext 🅕
┣❏✗.fliptext 🅕
┣❏✗.tts 🅕
┣❏✗.say 🅕
┣❏✗.togif 🅕
┣❏✗.toqr 🅕
┣❏✗.bass 🅕
┣❏✗.blown 🅕
┣❏✗.deep 🅕
┣❏✗.earrape 🅕
┣❏✗.fast 🅕
┣❏✗.fat 🅕
┣❏✗.nightcore 🅕
┣❏✗.reverse 🅕
┣❏✗.robot 🅕
┣❏✗.slow 🅕
┣❏✗.smooth 🅕
┣❏✗.squirrel 🅕
┣❏✗.tinyurl 🅕
┣❏✗.tinyurl 🅕
┣❏✗.tourl 🅕
┣❏✗.tovn 🅕
┣❏✗.toaudio 🅕
┣❏✗.tomp3 🅕
┣❏✗.tomp4🅕
┣❏✗.toimg 🅕
┣❏✗.toonce 🅕
┣❏✗.sticker 🅕
┣❏✗.take 🅕
┣❏✗.emoji 🅕
┣❏✗.volume 🅕
┣❏✗.ebinary 🅕
┣❏✗.dbinary 🅕
┣❏✗.ssweb 🅕
┣❏✗.quoted 🅕
┣❏✗.runtime 🅕
┣❏✗.sound1 - sound161 🅕
┗━━━━━━━━━━━━━━━━━❀
`}

global.downloadmenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.tiktokvideo 🅕
┣❏✗.tiktokaudio 🅕
┣❏✗.ytsearch 🅕
┣❏✗.mediafire 🅕
┣❏✗.play 🅕
┣❏✗.ytmp3 🅕
┣❏✗.ytmp4 🅕
┣❏✗.google 🅕
┣❏✗.spotify 🅕
┣❏✗.gitclone 🅕
┣❏✗.happymod 🅕
┗━━━━━━━━━━━━━━━━━❀
`}

global.groupmenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙂𝙧𝙤𝙪𝙥 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.antilink 🅖
┣❏✗.antiwame 🅖
┣❏✗.grouplink 🅖
┣❏✗.ephemeral 🅖
┣❏✗.delete 🅖
┣❏✗.setppgroup 🅖
┣❏✗.setname 🅖
┣❏✗.setdesc 🅖
┣❏✗.add 🅖
┣❏✗.kick 🅖
┣❏✗.promote 🅖
┣❏✗.demote 🅖
┣❏✗.hidetag 🅖
┣❏✗.tagall 🅖
┣❏✗.editinfo 🅖
┣❏✗.opentime 🅖
┣❏✗.closetime 🅖
┣❏✗.resetlink 🅖
┣❏✗.autostickerpc 🅖
┣❏✗.antilinkgc 🅖
┣❏✗.antiwame 🅖
┣❏✗.antilinkall 🅖
┣❏✗.antilinktiktok 🅖
┣❏✗.antilinkfb 🅖
┣❏✗.antilinktwitter 🅖
┣❏✗.antilinkig 🅖
┣❏✗.antlinktg 🅖
┣❏✗.antilinkytvid 🅖
┣❏✗.antilinkytch 🅖
┣❏✗.antivirus 🅖
┣❏✗.antitoxic 🅖
┣❏✗.nsfw 🅖
┣❏✗.react 🅖
┗━━━━━━━━━━━━━━━━━❀
`}

global.funmenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙁𝙪𝙣 𝙈𝙚𝙣𝙪ꫂ❍
┣❏✗.define 🅕
┣❏✗.truth 🅕
┣❏✗.dare 🅕
┣❏✗.couple 🅕
┣❏✗.soulmate 🅕
┣❏✗.stupidcheck 🅕
┣❏✗.handsomecheck 🅕
┣❏✗.uncleancheck 🅕
┣❏✗.hotcheck 🅕
┣❏✗.smartcheck 🅕
┣❏✗.greatcheck 🅕
┣❏✗.evilcheck 🅕
┣❏✗.dogcheck 🅕
┣❏✗.coolcheck 🅕
┣❏✗.waifucheck 🅕
┣❏✗.awesomecheck 🅕
┣❏✗.gaycheck 🅕
┣❏✗.cutecheck 🅕
┣❏✗.lesbiancheck 🅕
┣❏✗.hornycheck 🅕
┣❏✗.prettycheck 🅕
┣❏✗.lovelycheck 🅕
┣❏✗.uglycheck 🅕
┣❏✗.hot 🅕
┣❏✗.sexy 🅕
┣❏✗.kind 🅕
┣❏✗.idiot 🅕
┣❏✗.handsome 🅕
┣❏✗.beautiful 🅕
┣❏✗.cute 🅕
┣❏✗.pretty 🅕
┣❏✗.lesbian 🅕
┣❏✗.noob 🅕
┣❏✗.bastard 🅕
┣❏✗.foolish 🅕
┣❏✗.nerd 🅕
┣❏✗.asshole 🅕
┣❏✗.gay 🅕
┣❏✗.smart 🅕
┣❏✗.stubble 🅕
┣❏✗.doggo 🅕
┣❏✗.horny 🅕
┣❏✗.cunt 🅕
┣❏✗.wibu 🅕
┣❏✗.noobra 🅕
┣❏✗.nibba 🅕
┣❏✗.nibbi 🅕
┣❏✗.comrade 🅕
┣❏✗.mumu 🅕
┣❏✗.rascal 🅕
┣❏✗.scumbag 🅕 
┣❏✗.nuts 🅕
┣❏✗.fagot 🅕
┣❏✗.scoundrel 🅕
┣❏✗.ditch 🅕
┣❏✗.dope 🅕
┣❏✗.gucci 🅕
┣❏✗.lit 🅕
┣❏✗.dumbass 🅕
┣❏✗.crackhead 🅕
┣❏✗.mf 🅕
┣❏✗.motherfucker 🅕
┣❏✗.sucker 🅕
┣❏✗.fuckboy 🅕
┣❏✗.playboy 🅕
┣❏✗.fuckgirl 🅕
┣❏✗.playgirl 🅕
┣❏✗.quotes 🅕
┣❏✗.can 🅕
┣❏✗.is 🅕
┣❏✗.when 🅕
┣❏✗.where 🅕
┣❏✗.what 🅕
┣❏✗.how 🅕
┣❏✗.rate 🅕
┣❏✗.cry 🅟
┣❏✗.kill 🅟
┣❏✗.hug 🅟
┣❏✗.pat 🅟
┣❏✗.lick 🅟 
┣❏✗.kiss 🅟
┣❏✗.bite 🅟
┣❏✗.yeet 🅟
┣❏✗.bully 🅟
┣❏✗.bonk 🅟
┣❏✗.wink 🅟
┣❏✗.poke 🅟
┣❏✗.nom 🅟
┣❏✗.slap 🅟
┣❏✗.smile 🅟 
┣❏✗.wave 🅟
┣❏✗.awoo 🅟
┣❏✗.blush 🅟
┣❏✗.smug 🅟
┣❏✗.glomp 🅟 
┣❏✗.happy 🅟
┣❏✗.dance 🅟
┣❏✗.cringe 🅟
┣❏✗.cuddle 🅟
┣❏✗.highfive 🅟 
┣❏✗.shinobu 🅟
┣❏✗.handhold 🅟
┣❏✗.horny 🅕
┣❏✗.checkme 🅕
┣❏✗.confess 🅕
┣❏✗.leave 🅕
┗━━━━━━━━━━━━━━━━━❀
`}

global.stalkermenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙎𝙩𝙖𝙡𝙠𝙚𝙧ꫂ❍
┣❏✗.igstalk 🅟
┣❏✗.ffstalk 🅟
┣❏✗.mlstalk 🅟
┣❏✗.npmstalk 🅟
┣❏✗.ghstalk 🅟
┗━━━━━━━━━━━━━━━━━❀
`}

global.randphotomenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙍𝙖𝙣𝙙𝙤𝙢 𝙋𝙝𝙤𝙩𝙤ꫂ❍
┣❏✗.aesthetic 🅟
┣❏✗.coffee 🅟
┣❏✗.wikimedia 🅟
┣❏✗.wallpaper 🅟
┣❏✗.art 🅟
┣❏✗.bts 🅟
┣❏✗.woof 🅕
┣❏✗.meow 🅕
┣❏✗.lizard 🅕
┣❏✗.cosplay 🅟
┣❏✗.hacker 🅟
┣❏✗.cyber 🅟
┣❏✗.gamewallpaper 🅟
┣❏✗.islamic 🅟
┣❏✗.jennie 🅟
┣❏✗.jiso 🅟
┣❏✗.satanic 🅟
┣❏✗.justina 🅟
┣❏✗.cartoon 🅟
┣❏✗.pentol 🅟
┣❏✗.cat 🅕
┣❏✗.kpop 🅕
┣❏✗.exo 🅟
┣❏✗.lisa 🅟
┣❏✗.space 🅟
┣❏✗.car 🅟
┣❏✗.technology 🅟
┣❏✗.bike 🅟
┣❏✗.shortquote 🅟
┣❏✗.antiwork 🅕
┣❏✗.hacking 🅕
┣❏✗.boneka 🅕
┣❏✗.rose 🅕
┣❏✗.ryujin 🅕
┣❏✗.ulzzangboy 🅕
┣❏✗.ulzzanggirl 🅕
┣❏✗.wallml 🅕
┣❏✗.wallphone 🅕
┣❏✗.mountain 🅟
┣❏✗.goose 🅕
┣❏✗.profilepic 🅕
┣❏✗.couplepic 🅕
┣❏✗.programming 🅟
┣❏✗.pubg 🅕
┣❏✗.blackpink 🅕
┣❏✗.randomboy 🅕  
┣❏✗.randomgirl 🅕
┣❏✗.hijab 🅕  
┣❏✗.chinese 🅕
┣❏✗.indo 🅕
┣❏✗.japanese 🅕
┣❏✗.korean 🅕
┣❏✗.malay 🅕
┣❏✗.thai 🅕
┣❏✗.vietnamese 🅕
┗━━━━━━━━━━━━━━━━━❀
`}

global.randvideomenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙍𝙖𝙣𝙙𝙤𝙢 𝙑𝙞𝙙𝙚𝙤ꫂ❍
┣❏✗.tiktokgirl 🅟
┣❏✗.tiktoknukthy 🅟
┣❏✗.tiktokkayes 🅟
┣❏✗.tiktokpanrika 🅟
┣❏✗.tiktoknotnot 🅟
┣❏✗.tiktokghea 🅟
┣❏✗.tiktoksantuy 🅟
┣❏✗.tiktokbocil 🅟
┗━━━━━━━━━━━━━━━━━❀
`}

global.textpromenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙏𝙚𝙭𝙩𝙥𝙧𝙤 𝙈𝙖𝙠𝙚𝙧ꫂ❍
┣❏✗.candy 🅟 
┣❏✗.christmas 🅟 
┣❏✗.3dchristmas 🅟 
┣❏✗.sparklechristmas 🅟
┣❏✗.deepsea 🅟 
┣❏✗.scifi 🅟 
┣❏✗.rainbow 🅟 
┣❏✗.waterpipe 🅟 
┣❏✗.spooky 🅟 
┣❏✗.pencil 🅟 
┣❏✗.circuit 🅟 
┣❏✗.discovery 🅟 
┣❏✗.metalic 🅟 
┣❏✗.fiction 🅟 
┣❏✗.demon 🅟 
┣❏✗.transformer 🅟 
┣❏✗.berry 🅟 
┣❏✗.thunder 🅟 
┣❏✗.magma 🅟 
┣❏✗.3dstone 🅟 
┣❏✗.neonlight 🅟 
┣❏✗.glitch 🅟 
┣❏✗.harrypotter 🅟 
┣❏✗.brokenglass 🅟 
┣❏✗.papercut 🅟 
┣❏✗.watercolor 🅟 
┣❏✗.multicolor 🅟 
┣❏✗.neondevil 🅟 
┣❏✗.underwater 🅟 
┣❏✗.graffitibike 🅟
┣❏✗.snow 🅟 
┣❏✗.cloud 🅟 
┣❏✗.honey 🅟 
┣❏✗.ice 🅟 
┣❏✗.fruitjuice 🅟 
┣❏✗.biscuit 🅟 
┣❏✗.wood 🅟 
┣❏✗.chocolate 🅟 
┣❏✗.strawberry 🅟 
┣❏✗.matrix 🅟 
┣❏✗.blood 🅟 
┣❏✗.dropwater 🅟 
┣❏✗.toxic 🅟 
┣❏✗.lava 🅟 
┣❏✗.rock 🅟 
┣❏✗.bloodglas 🅟 
┣❏✗.hallowen 🅟 
┣❏✗.darkgold 🅟 
┣❏✗.joker 🅟 
┣❏✗.wicker 🅟
┣❏✗.firework 🅟 
┣❏✗.skeleton 🅟 
┣❏✗.blackpink 🅟 
┣❏✗.sand 🅟 
┣❏✗.glue 🅟 
┣❏✗.1917 🅟 
┣❏✗.leaves 🅟
┗━━━━━━━━━━━━━━━━━❀
`}

global.photooxymenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙋𝙝𝙤𝙩𝙤𝙊𝙭𝙮 𝙈𝙖𝙠𝙚𝙧ꫂ❍
┣❏✗.shadow 🅟 
┣❏✗.write 🅟 
┣❏✗.romantic 🅟 
┣❏✗.burnpaper 🅟
┣❏✗.smoke 🅟 
┣❏✗.narutobanner 🅟 
┣❏✗.love 🅟 
┣❏✗.undergrass 🅟
┣❏✗.doublelove 🅟 
┣❏✗.coffecup 🅟
┣❏✗.underwaterocean 🅟
┣❏✗.smokyneon 🅟
┣❏✗.starstext 🅟
┣❏✗.rainboweffect 🅟
┣❏✗.balloontext 🅟
┣❏✗.metalliceffect 🅟
┣❏✗.embroiderytext 🅟
┣❏✗.flamingtext 🅟
┣❏✗.stonetext 🅟
┣❏✗.writeart 🅟
┣❏✗.summertext 🅟
┣❏✗.wolfmetaltext 🅟
┣❏✗.nature3dtext 🅟
┣❏✗.rosestext 🅟
┣❏✗.naturetypography 🅟
┣❏✗.quotesunder 🅟
┣❏✗.shinetext 🅟
┗━━━━━━━━━━━━━━━━━❀
`}

global.ephotomenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝙀𝙥𝙝𝙤𝙩𝙤360𝙈𝙖𝙠𝙚𝙧ꫂ❍
┣❏✗.glitchtext 🅟
┣❏✗.writetext 🅟
┣❏✗.advancedglow 🅟
┣❏✗.typographytext 🅟
┣❏✗.pixelglitch 🅟
┣❏✗.neonglitch 🅟
┣❏✗.flagtext 🅟
┣❏✗.flag3dtext 🅟
┣❏✗.deletingtext 🅟
┣❏✗.blackpinkstyle 🅟
┣❏✗.glowingtext 🅟
┣❏✗.underwatertext 🅟
┣❏✗.logomaker 🅟
┣❏✗.cartoonstyle 🅟
┣❏✗.papercutstyle 🅟
┣❏✗.watercolortext 🅟
┣❏✗.effectclouds 🅟
┣❏✗.blackpinklogo 🅟
┣❏✗.gradienttext 🅟
┣❏✗.summerbeach 🅟
┣❏✗.luxurygold 🅟
┣❏✗.multicoloredneon 🅟
┣❏✗.sandsummer 🅟
┣❏✗.galaxywallpaper 🅟
┣❏✗.1917style 🅟
┣❏✗.makingneon 🅟
┣❏✗.royaltext 🅟
┣❏✗.freecreate 🅟
┣❏✗.galaxystyle 🅟
┣❏✗.lighteffects 🅟
┗━━━━━━━━━━━━━━━━━❀
`}

global.nsfwmenu = (prefix) => {
return `
┏━━━━━━━━━━━━━━━━━❀
┣𝗭𝗘𝗡𝗜𝗧𝗦𝗨-𝗠𝗗 𝗠𝗘𝗡𝗨
┗━━━━━━━━━━━━━━━━━❀
┏▰▱▰▱▰▱▰▱▰▱▰▱▰
┣🅞 = For Owner
┣🅖 = For Group
┣🅕 = For Free User
┣🅟 = For Premium User
┗▰▱▰▱▰▱▰▱▰▱▰▱▰

┏❍ꪶ𝘼𝙣𝙞𝙢𝙚 𝙉𝙎𝙁𝙒ꫂ❍
┣❏✗.hentai 🅕
┣❏✗.gifhentai 🅕
┣❏✗.gifblowjob 🅕
┣❏✗.hentaivid 🅕
┣❏✗.hneko 🅕
┣❏✗.nwaifu 🅕
┣❏✗.animespank 🅕
┣❏✗.trap 🅕
┣❏✗.gasm 🅕
┣❏✗.ahegao 🅕
┣❏✗.ass 🅕
┣❏✗.bdsm 🅕
┣❏✗.blowjob 🅕
┣❏✗.cuckold 🅕
┣❏✗.cum 🅕
┣❏✗.milf 🅕
┣❏✗.eba 🅕
┣❏✗.ero 🅕
┣❏✗.femdom 🅕
┣❏✗.foot 🅕
┣❏✗.gangbang 🅕
┣❏✗.glasses 🅕
┣❏✗.jahy 🅕
┣❏✗.masturbation 🅕
┣❏✗.manga 🅕
┣❏✗.neko-hentai 🅕
┣❏✗.neko-hentai2 🅕
┣❏✗.nsfwloli 🅕
┣❏✗.orgy 🅕
┣❏✗.panties 🅕 
┣❏✗.pussy 🅕
┣❏✗.tentacles 🅕
┣❏✗.thights 🅕
┣❏✗.yuri 🅕
┣❏✗.zettai 🅕
┗━━━━━━━━━━━━━━━━━❀
`}

global.soundmenu = (prefix) => {
return `
╔══ꪶ𝙎𝙤𝙪𝙣𝙙 𝙈𝙚𝙣𝙪ꫂ═══❀
║❒✗.sound1 🅕
║❒✗.sound2 🅕
║❒✗.sound3 🅕
║❒✗.sound4 🅕
║❒✗.sound5 🅕
║❒✗.sound6 🅕
║❒✗.sound7 🅕
║❒✗.sound8 🅕
║❒✗.sound9 🅕
║❒✗.sound10 🅕
║❒✗.sound11 🅕
║❒✗.sound12 🅕
║❒✗.sound13 🅕
║❒✗.sound14 🅕
║❒✗.sound15 🅕
║❒✗.sound16 🅕
║❒✗.sound17 🅕
║❒✗.sound18 🅕
║❒✗.sound19 🅕
║❒✗.sound20 🅕
║❒✗.sound21 🅕
║❒✗.sound22 🅕
║❒✗.sound23 🅕
║❒✗.sound24 🅕
║❒✗.sound25 🅕
║❒✗.sound26 🅕
║❒✗.sound27 🅕
║❒✗.sound28 🅕
║❒✗.sound29 🅕
║❒✗.sound30 🅕
║❒✗.sound31 🅕
║❒✗.sound32 🅕
║❒✗.sound33 🅕
║❒✗.sound34 🅕
║❒✗.sound35 🅕
║❒✗.sound36 🅕
║❒✗.sound37 🅕
║❒✗.sound38 🅕
║❒✗.sound39 🅕
║❒✗.sound40 🅕
║❒✗.sound41 🅕
║❒✗.sound42 🅕
║❒✗.sound43 🅕
║❒✗.sound44 🅕
║❒✗.sound45 🅕
║❒✗.sound46 🅕
║❒✗.sound47 🅕
║❒✗.sound48 🅕
║❒✗.sound49 🅕
║❒✗.sound50 🅕
║❒✗.sound51 🅕
║❒✗.sound52 🅕
║❒✗.sound53 🅕
║❒✗.sound54 🅕
║❒✗.sound55 🅕
║❒✗.sound56 🅕
║❒✗.sound57 🅕
║❒✗.sound58 🅕
║❒✗.sound59 🅕
║❒✗.sound60 🅕
║❒✗.sound61 🅕
║❒✗.sound62 🅕
║❒✗.sound63 🅕
║❒✗.sound64 🅕
║❒✗.sound65 🅕
║❒✗.sound66 🅕
║❒✗.sound67 🅕
║❒✗.sound68 🅕
║❒✗.sound69 🅕
║❒✗.sound70 🅕
║❒✗.sound71 🅕
║❒✗.sound72 🅕
║❒✗.sound73 🅕
║❒✗.sound74 🅕
║❒✗.sound75 🅕
║❒✗.sound76 🅕
║❒✗.sound77 🅕
║❒✗.sound78 🅕
║❒✗.sound79 🅕
║❒✗.sound80 🅕
║❒✗.sound81 🅕
║❒✗.sound82 🅕
║❒✗.sound83 🅕
║❒✗.sound84 🅕
║❒✗.sound85 🅕
║❒✗.sound86 🅕
║❒✗.sound87 🅕
║❒✗.sound88 🅕
║❒✗.sound89 🅕
║❒✗.sound90 🅕
║❒✗.sound91 🅕
║❒✗.sound92 🅕
║❒✗.sound93 🅕
║❒✗.sound94 🅕
║❒✗.sound95 🅕
║❒✗.sound96 🅕
║❒✗.sound97 🅕
║❒✗.sound98 🅕
║❒✗.sound99 🅕
║❒✗.sound100 🅕
║❒✗.sound101 🅕
║❒✗.sound102 🅕
║❒✗.sound103 🅕
║❒✗.sound104 🅕
║❒✗.sound105 🅕
║❒✗.sound106 🅕
║❒✗.sound107 🅕
║❒✗.sound108 🅕
║❒✗.sound109 🅕
║❒✗.sound110 🅕
║❒✗.sound111 🅕
║❒✗.sound112 🅕
║❒✗.sound113 🅕
║❒✗.sound114 🅕
║❒✗.sound115 🅕
║❒✗.sound116 🅕
║❒✗.sound117 🅕
║❒✗.sound118 🅕
║❒✗.sound119 🅕
║❒✗.sound120 🅕
║❒✗.sound121 🅕
║❒✗.sound122 🅕
║❒✗.sound123 🅕
║❒✗.sound124 🅕
║❒✗.sound125 🅕
║❒✗.sound126 🅕
║❒✗.sound127 🅕
║❒✗.sound128 🅕
║❒✗.sound129 🅕
║❒✗.sound130 🅕
║❒✗.sound131 🅕
║❒✗.sound132 🅕
║❒✗.sound133 🅕
║❒✗.sound134 🅕
║❒✗.sound135 🅕
║❒✗.sound136 🅕
║❒✗.sound137 🅕
║❒✗.sound138 🅕
║❒✗.sound139 🅕
║❒✗.sound140 🅕
║❒✗.sound141 🅕
║❒✗.sound142 🅕
║❒✗.sound143 🅕
║❒✗.sound144 🅕
║❒✗.sound145 🅕
║❒✗.sound146 🅕
║❒✗.sound147 🅕
║❒✗.sound148 🅕
║❒✗.sound149 🅕
║❒✗.sound150 🅕
║❒✗.sound151 🅕
║❒✗.sound152 🅕
║❒✗.sound153 🅕
║❒✗.sound154 🅕
║❒✗.sound155 🅕
║❒✗.sound156 🅕
║❒✗.sound157 🅕
║❒✗.sound158 🅕
║❒✗.sound159 🅕
║❒✗.sound160 🅕
║❒✗.sound161 🅕
╚═════════════════❀
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})