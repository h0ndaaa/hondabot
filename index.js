//"use strict";
const {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
    processTicksAndRejections,
    ECONNABORTED,
    apikey,
    WA_DEAFULT_EPHEMERAL,
    DataView,
    TypedArray,
    device,
    Browser
} = require('@adiwajshing/baileys')

//_MÓDULOS NPM
const fs = require('fs')
const moment = require('moment-timezone')
const { exec, spawn } = require('child_process')
const fetc = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg');
const imgbb = require('imgbb-uploader');
const speed = require('performance-now');
const cd = 4.32e+7;
const qrcode = require("qrcode-terminal");
const crypto = require('crypto');
const axios = require('axios').default;
const imageToBase64 = require('image-to-base64');
const googleImage = require('g-i-s');
const vapor = require('vapor-text')
const CFonts = require('cfonts')
const FormData = require('form-data')
const chalk = require('chalk')
const toMs = require('ms')
const ms = require('parse-ms')
const cheerio = require('cheerio')
const yts = require('yt-search')

//_ARQUIVOS DA LIB
const { color, bgcolor } = require('./lib/color');
const { fetchJson, fetchText } = require('./lib/fetcher');
const { recognize } = require('./lib/ocr');
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, banner2, simih, start, info, success, close, addATM, addKoinUser, checkATMuser, temporizador } = require('./lib/functions');
const { webp2gifFile } = require("./lib/gif.js")
const { cmdadd } = require('./lib/totalcmd.js')
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./lib/register.js')
const { getLevelingXp, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId, getLevelingLevel, getUserRank, addCooldown, leveltab } = require('./lib/leveling.js')
//const { addTTTId, addTTTwin,addTTTdefeat, addTTTtie, addTTTpoints, getTTTId, getTTTwins, getTTTdefeats, getTTTties, getTTTpoints } = require('./lib/tictactoe.js') //JOGO DA VELHA,AGRADECIMENTOS: Resen
//const { addLimit, getLimit } = require('./lib/limit.js') // LIMITADOR, AGRADECIMENTOS: IRIS(kill), Resen
const { addMetadata } = require('./lib/exif.js')
const zalgo = require('./lib/zalgo')
const { y2mateV, y2mateA, wikiSearch, jagoKata } = require('./lib/y2mate')
const { convertSticker } = require('./lib/swm.js')
const { uploadimg } = require('./lib/uploadimg')
const { isFiltered, addFilter } = require('./lib/antispam')
const textpro = require('./lib/textpro.js')
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("./lib/banned.js")
const { addPremiumUser, dellprem, getPremiumExpired, checkOwner, expiredCheck, checkPremiumUser } = require("./lib/premium.js")

//_JSON GRUPO/CONFIGURAÇÕES
const nsfw = JSON.parse(fs.readFileSync('./database/data/nsfw.json'));
const welkom = JSON.parse(fs.readFileSync('./database/data/welkom.json'));
const z24 = JSON.parse(fs.readFileSync('./database/data/zm.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/data/leveling.json'));
const antilink = JSON.parse(fs.readFileSync('./database/data/antilink.json'));
const atsticker = JSON.parse(fs.readFileSync('./database/data/atsticker.json'));
const _simi = JSON.parse(fs.readFileSync('./database/data/simi.json'));
const _bad = JSON.parse(fs.readFileSync('./database/data/bad.json'))
const _badword = JSON.parse(fs.readFileSync('./database/data/badword.json'))
const antifake = JSON.parse(fs.readFileSync('./database/data/antifake.json'));
const x9 = JSON.parse(fs.readFileSync('./database/data/x9.json'))

//_JSON INFORMAÇÕES DO USUÁRIO
let _level = JSON.parse(fs.readFileSync('./database/datauser/level.json'))
let _registered = JSON.parse(fs.readFileSync('./database/datauser/registered.json'));
let uang = JSON.parse(fs.readFileSync('./database/datauser/uang.json'));
let premium = JSON.parse(fs.readFileSync('./database/datauser/premium.json'));
let ban = JSON.parse(fs.readFileSync('./database/datauser/banned.json'));

//_ OUTROS ARQUIVOS DO BOT
const daily = JSON.parse(fs.readFileSync('./database/data/diario.json'));
const dailiy = JSON.parse(fs.readFileSync('./database/data/limitem.json'));
const { help, m18, mz24 } = require('./database/help/help')
const sotoy = JSON.parse(fs.readFileSync('./database/data/sotoy.json'));
const { ptbr } = require('./database/mess')
const totalcmd = JSON.parse(fs.readFileSync('./database/data/totalcmd.json'))[0].totalcmd
const imageh = fs.readFileSync('./src/bot.jpg')
const infos = JSON.parse(fs.readFileSync('./database/data/settings.json'))
const { prefix, ownerName, ownerNumber, botName, cdd, autoHourActivate, cr, crfig, crlv, crtt, crh } = infos

public = true
fake = 'a'
blocked = []
hitt = []

const Exkey = "compre a sua"
/*👆API KEY EX TEAM👆 adquira a sua key com*/ o = 'wa.me/+558598669655'
const ZeksKey = "adquira a sua no site https://zeks.xyz/"

//_VCARD DONO DO BOT
const vcard = 'BEGIN:VCARD\n' +
    'VersãoON:1.0\n' +
    'FN:h0nda\n' +
    'ORG:Dono do h0nda bot;\n' +
    'TEL;type=CELL;type=VOICE;waid=351927438657:+351 927 438 657\n' +
    'END:VCARD'

    //_CONEXÃO WHATSAPP WEB 
async function starts() {
    const h0nda = new WAConnection()
// h0nda.logger.level = 'debug'
//  h0nda.logger.level = 'trace'
    h0nda.logger.level = 'warn'
    console.log(banner.string)
    console.log(banner2.string)
    h0nda.on('qr', () => {
        console.log(color('👆'), color(' Faça um scan no código acima para iniciar o h0nda-BOT!'))
    })
    fs.existsSync('./h0nda.json') && h0nda.loadAuthInfo('./h0nda.json')
    h0nda.on('connecting', () => {
        start('2', 'Conectando o h0nda-bot...')
    })
    h0nda.on('open', () => {
            success('2', 'h0nda-bot conectado!!!')
        })
          
    await h0nda.connect({
        timeoutMs: 30 * 1000
    })
    fs.writeFileSync('./h0nda.json', JSON.stringify(h0nda.base64EncodedAuthInfo(), null, '\t'))

    h0nda.on('group-participants-update', async(anu) => {
mdata = await h0nda.groupMetadata(anu.jid)
if(antifake.includes(anu.jid)) {
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
h0nda.sendMessage(mdata.id, 'Números fake's não são permitidos neste grupo', MessageType.text)
setTimeout(async function () {
h0nda.groupRemove(mdata.id, [num])
					}, 3000)
				}
			}
		}
        if (!welkom.includes(anu.jid)) return
        try {
            mem = anu.participants[0]
            console.log(anu)
            try {
                pp_user = await h0nda.getProfilePicture(mem)
            } catch (e) {
                pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            try {
                pp_grup = await h0nda.getProfilePicture(anu.jid)
            } catch (e) {
                pp_grup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
            }
            if (anu.action == 'demote') {
              if(!x9.includes(anu.jid)) return 
                mdata = await h0nda.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                anu_user = h0nda.contacts[mem]
                teks = `MEMBRO REBAIXADO\n\n@${num.split('@')[0]} foi rebaixado a membro comum...`
                h0nda.sendMessage(mdata.id, teks, MessageType.text, {
                    contextInfo: {
                        "mentionedJid": [num]
                    }
                })
            }
            if (anu.action == 'promote') {
            mdata = await h0nda.groupMetadata(anu.jid)
            if(!x9.includes(anu.jid)) return
            member = mdata.participants.length
        	num = anu.participants[0]
            anu_user = h0nda.contacts[mem]
            teks = `@${num.split('@')[0]} agora é um administrador do grupo!`
	          h0nda.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
		}
            if (anu.action == 'add') {
                mdata = await h0nda.groupMetadata(anu.jid)
                member = mdata.participants.length
                num = anu.participants[0]
                anu_user = h0nda.contacts[mem]
                teks = `Olá @${num.split('@')[0]}!!
Bem-vindo(a) ao grupo ${mdata.subject}! Dê uma olhada nas regras do grupo para evitar ser banido!

Use o comando ${prefix}menu para listar meus comandos
 
h0nda-BOT`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome2?nama=${encodeURI(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://c4.wallpaperflare.com/wallpaper/128/375/582/katana-kimetsu-no-yaiba-ultrawide-hd-wallpaper-preview.jpg`)

                h0nda.sendMessage(mdata.id, buff, MessageType.image, {
                    caption: teks,
                    contextInfo: {
                        "mentionedJid": [num]
                    }
                })
            }
            if (anu.action == 'remove') {
                mdata = await h0nda.groupMetadata(anu.jid)
                num = anu.participants[0]
                anu_user = h0nda.contacts[mem]
                member = mdata.participants.length
                out = `Adeus XD @${num.split('@')[0]} 👋`
                buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye2?nama=${encodeURI(anu_user.notify)}&descriminator=${member}&memcount=${member}&gcname=${encodeURI(mdata.subject)}&gcicon=${pp_grup}&pp=${pp_user}&bg=https://c4.wallpaperflare.com/wallpaper/128/375/582/katana-kimetsu-no-yaiba-ultrawide-hd-wallpaper-preview.jpg`)
                h0nda.sendMessage(mdata.id, buff, MessageType.image, {
                    caption: out,
                    contextInfo: {
                        "mentionedJid": [num]
                    }
                })
            }
        } catch (e) {
            console.log('Error : %s', color(e, 'red'))
        }
    })

    h0nda.on('CB:Blocklist', json => {
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us', 's.whatsapp.net'))
        }
    })

    h0nda.on('CB:action,,call', async json => {
        const callerId = json[2][0][1].from;
        console.log("LIGAÇÃO DE" + callerId)
        h0nda.sendMessage(callerId, "Ligações = block", MessageType.text)
        setTimeout(async() => {
            await h0nda.blockUser(callerId, "add")
        }, 4000)
    })

    h0nda.on('group-update', async(chat) => {
        console.log(chat)
        var from = chat.jid
        var group = await h0nda.groupMetadata(from)
      	if(!x9.includes(chat.jid)) return 
        if (!chat.desc == '') {
            var tag = chat.descOwner.split('@')[0] + '@s.whatsapp.net'
            var teks = `- [ Alteração na descrição do grupo ] -\n\n Descrição do grupo alterada por: @${chat.descOwner.split('@')[0]}\nNova descrição: ${chat.desc}`
            h0nda.sendMessage(group.id, teks, MessageType.text, {
                contextInfo: {
                    "mentionedJid": [tag]
                }
            })
            console.log(`- [ Alteração na descrição  ] - no ${group.subject}`)
        }
    })
  
  h0nda.on('blocklist-update', async (chat) => {
    for (i of chat.added){
       // console.log(color("LISTA DE USUÁRIOS BLOQUEADOS", "blue"))
        target = i.replace('@c.us', '@s.whatsapp.net')
        blocked.push(target)
        console.log(color("[ BLOQUEADO ] ",'red')+target)
    }
    for (i of chat.removed){
        target = i.replace('@c.us', '@s.whatsapp.net')
        blocked.splice(blocked.indexOf(target), 1)
        console.log(color("[ DESBLOQUEADO ] ", 'green')+target)
    }
    })
  h0nda.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log(color('🔋Porcentagem de bateria: ' + batterylevel+'%', "yellow"))
	})
	h0nda.on('close', async () => {
  if (h0nda.state == 'close') {
  h0nda.logger.error('Reconectando...')
    await h0nda.loadAuthInfo('./h0nda.json')
    await h0nda.connect()
    global.timestamp.connect = new Date
  }
})
	
    h0nda.on('chat-update', async(mek) => {
        try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            if (!mek.message) return
            if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            global.prefix
            global.blocked
            const content = JSON.stringify(mek.message)
            const from = mek.key.remoteJid
            const type = Object.keys(mek.message)[0]
            const {
                text,
                extendedText,
                contact,
                location,
                liveLocation,
                image,
                video,
                sticker,
                document,
                audio,
                product
            } = MessageType
            const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
            const date = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
            const hr = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
            const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
            const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
            const hour_now = moment().format('HH:mm:ss')
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
            budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
            const anun = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
            const args = body.slice(1).trim().split(' ').slice(1)
            const isCmd = body.startsWith(prefix)
            const testat = budy.toLowerCase()
            const q = args.join(' ')
            const tescuk = ["0@s.whatsapp.net"]
            const arrayQND = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
            const arrayQND2 = ['dias', 'semanas', 'meses', 'anos']
            const botNumber = h0nda.user.jid
            const ownerNumber = [`557499510904@s.whatsapp.net`, `557499896089@s.whatsapp.net`]
            const liaN = [`0@s.whatsapp.net`]
            const ownerNumberB = [`557499510904@s.whatsapp.net`]
            const isGroup = mek.key.remoteJid.endsWith('@g.us') ? true : false
            sender = mek.key.fromMe ? h0nda.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
            conts = mek.key.fromMe ? h0nda.user.jid : h0nda.contacts[sender] || {
                notify: jid.replace(/@.+/, '')
            }
	    const jid = sender
            let pushname = mek.key.fromMe ? h0nda.user.name : conts.notify || conts.vname || conts.name || '-'
            const senderNumber = sender.split("@")[0]
            const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
            const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
            const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
            mention != undefined ? mention.push(mentionByReply) : []
            const mentionUser = mention != undefined ? mention.filter(n => n) : []
            hitt.push(command)
            const groupMetadata = isGroup ? await h0nda.groupMetadata(from) : ''
            const groupName = isGroup ? groupMetadata.subject : ''
            const groupId = isGroup ? groupMetadata.jid : ''
            const groupMembers = isGroup ? groupMetadata.participants : ''
            const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isGroupAdmins = groupAdmins.includes(sender) || false
            const isWelkom = isGroup ? welkom.includes(from) : true
            const isNsfw = isGroup ? nsfw.includes(from) : true
            const isZ24 = isGroup ? z24.includes(from) : true
            const isX9 = isGroup ? x9.includes(from) : true
            const isUser = checkRegisteredUser(sender)
            const isLia = liaN.includes(sender)
            const isOwner = ownerNumber.includes(sender)
            const isOwnerB = ownerNumberB.includes(sender)
            const isLevelingOn = isGroup ? _leveling.includes(from) : true
            const isAntiLink = isGroup ? antilink.includes(from) : true
            const isBadWord = isGroup ? _badword.includes(from) : false
            const isSimi = isGroup ? _simi.includes(from) : true
            const isAuto = isGroup ? atsticker.includes(from) : true
            const isAntiFa = isGroup ? antifake.includes(from) : true
            const bad = _bad.includes(budy)
          
            const groupOwner = `${from.split('-')[0]}@s.whatsapp.net`
            const isGroupOwner = groupOwner.includes(sender)
            totalchat = await h0nda.chats.all()
            const isPremium = isOwner ? true : checkPremiumUser(sender, premium)
	          const isBan = cekBannedUser(sender, ban)
	
            
            function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }

            const isUrl = (url) => {
                return url.match(new RegExp(/http?:\/\/?https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
            }
            const fakethumb = (jej, yes) => {
                h0nda.sendMessage(from, jej, image, {
                    thumbnail: fs.readFileSync('./src/bot.jpg'),
                    quoted: mek,
                    caption: yes
                })
            }
            const reply = (teks) => {
                h0nda.sendMessage(from, teks, text, {
                    quoted: mek
                })
            }
            const sendMess = (hehe, teks) => {
                h0nda.sendMessage(hehe, teks, text)
            }
            const mentions = (teks, memberr, id) => {
                (id == null || id == undefined || id == false) ? h0nda.sendMessage(from, teks.trim(), extendedText, {
                    contextInfo: {
                        "mentionedJid": memberr
                    }
                }): h0nda.sendMessage(from, teks.trim(), extendedText, {
                    quoted: mek,
                    contextInfo: {
                        "mentionedJid": memberr
                    }
                })
            }
            const costum = (pesan, tipe, target, target2) => {
                h0nda.sendMessage(from, pesan, tipe, {
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `${target}`,
                            ...(from ? {
                                remoteJid: from
                            } : {})
                        },
                        message: {
                            conversation: `${target2}`
                        }
                    }
                })
            }
            const sendPtt = (poi) => {
                h0nda.sendMessage(from, audio, mp3, {
                    quoted: mek
                })
            }
            const sendGif = (from, gif) => {
                h0nda.sendMessage(from, gif, MessageType.video, {
                    mimetype: "video/gif"
                })
            }
            const sleep = async(ms) => {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            const sendImage = (tis) => {
                h0nda.sendMessage(from, tis, image, {
                    quoted: mek
                })
            }
       
            const replyimg = (pesan, tipe, rep1, rep2) => {
                h0nda.sendMessage(from, pesan, tipe, {
                    quoted: {
                        key: {
                            fromMe: false,
                            participant: `0@s.whatsapp.net`,
                            ...(from ? {
                                remoteJid: "status@broadcast"
                            } : {})
                        },
                        message: {
                            "imageMessage": {
                                "mimetype": "image/jpeg",
                                "caption": `${rep1}`,
                                "fileLength": "201809",
                                "jpegThumbnail": `${rep2}`
                            }
                        }
                    }
                })
            }
            
            const costumimg = ( pesan , tipe, target , caption) => {
			h0nda.sendMessage(from, pesan , tipe , {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: {"imageMessage":{url: 'https://mmg.whatsapp.net/d/f/Ahj0ACnTjSHHm6-HjqAUBYiCu2-85zMZp_-EhiXlsd6A.enc',mimetype: 'image/jpeg',caption: `${caption}`,fileSha256: '0Pk0qJyQFn9FCtslZrydJHRQDKryjYcdP7I3CmRrHRs=',fileLength: '20696',height: 360,width: 382,mediaKey: 'N43d/3GY7GYQpgBymb9qFY5O9iNDXuBirXsNZk+X61I=',fileEncSha256: 'IdFM58vy8URV+IUmOqAY3OZsvCN6Px8gaJlRCElqhd4=',directPath: '/v/t62.7118-24/35174026_475909656741093_8174708112574209693_n.enc?oh=2a690b130cf8f912a9ca35f366558743&oe=6061F0C6',mediaKeyTimestamp: '1614240917',jpegThumbnail: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMASAMBIgACEQEDEQH/xAAwAAADAAMBAAAAAAAAAAAAAAAABAUBAwYCAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAAoy6kcWS2eH8miq17B553Thh1BgyTY9iULYfndGBmbSwNEV3eWXpjwZElG09WJckXCj8sWBVc1ZKXj2ZYaoWHnc67K3PbKwtZOqzLrzdQAg5fWFRUeCNTQG2pEKJ0wCD/xAAoEAACAgIBAQkAAwEAAAAAAAABAgADBBEScQUQEyEiMTJBYSNRYmP/2gAIAQEAAT8AaZzfEdwWcGMTE1jNv3M1ozDb+SD2jTO+Yigk6A3KqhseIdfkroTYbXQRrkVuJOplKEuOpjtpxF+IjTO+YnZoBvj4pa/msHtMnHZrgymZ6hCnSJsDl+ys7rTpGmevxMwLFS/1fcA7iNzPsDXaH1NccYH+2lJ1SnSNMlOdcbY6iYGa9g4OJzXW9zI7SBJrpjqxsA9zMkcMetf2V7NKD/McgAkxsis7EcA2fkxkqSkaYbMGRu3hr0x6q6ckufaUMpsexj0ma4Y0qDKhqlektyntXiQO4qWI0PONVZWNsNTmZwewekEwo1fpYaMZdvWf2DYrXoO/ARWLNL6VuXiYcSsuK9eXGYtHhM/nsTPVQgb7iDkydRCNBYYx1Ozj6nmSStRIgJ8UH/nMJiTZs/c7RPwExhu+vrH+p//EAB4RAAIBBAMBAAAAAAAAAAAAAAABAhAREjIhMDFC/9oACAECAQE/AOpJsxEqIj4TfNqXygIWpLc+ZEdBH//EAB4RAAICAgIDAAAAAAAAAAAAAAABAjEQETJBAxJx/9oACAEDAQE/AHWVeHQtYrDaNkno7GOzxP10xzWipDHZHidx+EuQz//Z',scansSidecar: 'choizTOCOFXo21QcOR/IlCehTFztHGnB3xo4F4d/kwmxSJJIbMmvxg==',scanLengths: [Array],midQualityFileSha256: '68OHK4IyhiKDNgNAZ3SoXsngzYENebQkV4b/RwhhYIY=',midQualityFileEncSha256: '2EYOLCXx+aqg9RyP6xJYChQNbEjXZmc0EcSwHzoyXx0='}}}})
			}
			
			async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return h0nda.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return h0nda.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(setting.pathImg)})
        }

            //_FUCTION PATENTE
            const nivelAtual = getLevelingLevel(sender)
            var patt = 'Bronze I🥉'
            if (nivelAtual === 1) {
                patt = 'Bronze  I🥉'
            } else if (nivelAtual === 2) {
                patt = 'Bronze II🥉'
            } else if (nivelAtual === 3) {
                patt = 'Bronze  III🥉'
            } else if (nivelAtual === 4) {
                patt = 'Bronze  IV🥉'
            } else if (nivelAtual === 5) {
                patt = 'Bronze  V🥉'
            } else if (nivelAtual === 6) {
                patt = 'Prata I🥈'
            } else if (nivelAtual === 7) {
                patt = 'Prata II🥈'
            } else if (nivelAtual === 8) {
                patt = 'Prata III🥈'
            } else if (nivelAtual === 9) {
                patt = 'Prata IV🥈'
            } else if (nivelAtual === 10) {
                patt = 'Prata V🥈'
            } else if (nivelAtual === 11) {
                patt = 'Ouro I🥇'
            } else if (nivelAtual === 12) {
                patt = 'Ouro II🥇'
            } else if (nivelAtual === 13) {
                patt = 'Ouro III🥇'
            } else if (nivelAtual === 14) {
                patt = 'Ouro IV🥇'
            } else if (nivelAtual === 15) {
                patt = 'Ouro V🥇'
            } else if (nivelAtual === 16) {
                patt = 'Platinum I🏆'
            } else if (nivelAtual === 17) {
                patt = 'Platinum II🏆'
            } else if (nivelAtual === 18) {
                patt = 'Platinum III🏆'
            } else if (nivelAtual === 19) {
                patt = 'Platinum IV🏆'
            } else if (nivelAtual === 20) {
                patt = 'Platinum V🏆'
            } else if (nivelAtual === 21) {
                patt = 'Champion I 💎'
            } else if (nivelAtual === 22) {
                patt = 'Champion II 💎'
            } else if (nivelAtual === 23) {
                patt = 'Champion III 💎'
            } else if (nivelAtual === 24) {
                patt = 'Champion IV 💎'
            } else if (nivelAtual === 25) {
                patt = 'Champion V 💎'
            } else if (nivelAtual === 26) {
                patt = 'Champion I 🐂'
            } else if (nivelAtual === 27) {
                patt = 'Legendary II 🐂'
            } else if (nivelAtual === 28) {
                patt = 'Legendary III 🐂'
            } else if (nivelAtual === 29) {
                patt = 'Legendary IV 🐂'
            } else if (nivelAtual === 30) {
                patt = 'Legendary V 🐂'
            } else if (nivelAtual === 31) {
                patt = 'Global I 🔮'
            } else if (nivelAtual === 32) {
                patt = 'Global II 🔮'
            } else if (nivelAtual === 33) {
                patt = 'Global III 🔮'
            } else if (nivelAtual === 34) {
                patt = 'Global IV 🔮'
            } else if (nivelAtual === 35) {
                patt = 'Global V 🔮'
            } else if (nivelAtual === 36) {
                patt = 'God I🕴'
            } else if (nivelAtual === 37) {
                patt = 'God II🕴'
            } else if (nivelAtual === 38) {
                patt = 'God III🕴'
            } else if (nivelAtual === 39) {
                patt = 'God IV🕴'
            } else if (nivelAtual === 40) {
                patt = 'God V🕴'
            } else if (nivelAtual >= 41) {
                patt = '🛐Big Satan~🛐'
            }

            //_TIPO DE USUÁRIO
            if (isOwner) {
                var tuser = 'h0nda'
            } else if (isPremium) {
                var tuser = 'Premium'
            } else if (sender == isUser) {
                var tuser = 'Registrado'
            } else {
                var tuser = 'Ghost'
            }

            //_XP COM LEVELING ATIVO
               if (!mek.key.fromMe) {
                if (isGroup && isLevelingOn && !isBan) {
                    const currentLevel = getLevelingLevel(sender)
                    const checkId = getLevelingId(sender)
                    try {
                        if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                        const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 15) //Math.floor(Math.random() * 10) + 500
                        const requiredXp = 5 * Math.pow(currentLevel, (5 / 2)) + 50 * currentLevel + 100 //5000 * (Math.pow(2, currentLevel) - 1)
                        const getLevel = getLevelingLevel(sender)
                        const namelv = checkId
                        addLevelingXp(sender, amountXp)
                        if (requiredXp <= getLevelingXp(sender)) {
                            addLevelingLevel(sender, 1)
                            const lvup = {
                                text: `    ════❖LEVEL UP❖════
      ➣ Nome: @${namelv.split('@')[0]}
  ╭╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼
  │➣ XP: ${getLevelingXp(sender)}
  │➣ Level: ${getLevel} -> ${getLevelingLevel(sender)}
  │➣ Patente: ${patt}
  ╰╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼╾╼
  
   ════LEVEL UP════`,
                                contextInfo: {
                                    mentionedJid: [namelv]
                                }
                            }
                            h0nda.sendMessage(from, lvup, text, {
                                quoted: mek
                            })
                        }
                    } catch (err) {
                        console.error(err)
                    }
                }
            }

            //_DINHEIRO 
            if (isCmd) {
                const checkATM = checkATMuser(sender)
                try {
                    if (checkATM === undefined) addATM(sender)
                    const uangsaku = Math.floor(Math.random() * 10) + 90
                    addKoinUser(sender, uangsaku)
                } catch (err) {
                    console.error(err)
                }
            }

            /*if (isUrl(budy) && budy.match(new RegExp(/(http:\/\/)/)) || 
       budy.match(new RegExp(/(www.\/\/)/)) ||
       budy.match(new RegExp(/(https:\/\/)/)) ||
       budy.match(new RegExp(/(.com\/\/)/))) { 
        if (isUrl(budy) && budy.match('https://chat.whatsapp.com/GIf43PMBb2uCsu8S6K9Qpt')) return //reply('Link do grupo oficial do h0nda BOT✅')
        if (isGroup && isUrl(budy) && budy.match('youtu')) return
        if (!isAntiLink) return
		if (!isGroup) return
		if (isGroupAdmins) return reply(`Você é admin, não vou te banir.`)
		h0nda.updatePresence(from, Presence.composing)
		var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
		setTimeout( () => {
		reply('tchau👋')
		}, 1100)
		setTimeout( () => {
		h0nda.groupRemove(from, [Kick]).catch((e) => {reply(`ERRO: ${e}`)}) 
		}, 1000)
		setTimeout( () => {
		reply(`Detectei um link, você vai levar o famoso do ban!`)
		}, 0)
		}*/



            if (!mek.message) return
            if (mek.key && mek.key.remoteJid == 'status@broadcast') return
            const typei = Object.keys(mek.message)[0]
            budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
            if(mek.key.fromMe){
            //if (isOwner) {
                if (budo === `>public`) {
                    if (public == `true`) return reply('Modo public já ativo')
                    public = true
                    h0nda.sendMessage(from, 'ALTERANDO PARA O MODO: PUBLIC', text, {
                        quoted: mek
                    })
                }
                if (budo === `>self`) {
                    if (public == `false`) return reply('Modo private já ativo')
                    public = false
                    h0nda.sendMessage(from, 'ALTERANDO PARA O MODO: PRIVATE', text, {
                        quoted: mek
                    })
                }
            }
            if (!public) {
                if (!mek.key.fromMe && !isOwner) return
            }
            if (!public) {
                if (!mek.key.fromMe && !isPremium) return
            }

            if (budy.match(bad)) {
                if (!mek.key.fromMe) {
                    if (!isGroup) return
                    if (!isBadWord) return
                    if (isGroupAdmins) return reply(`Você é admin, não vou te banir.`)
                    h0nda.updatePresence(from, Presence.composing)
                    var kic = `${sender.split("@")[0]}@s.whatsapp.net`
                    reply('Detectei uma palavra proibida!')
                    setTimeout(() => {
                        h0nda.groupRemove(from, [kic]).catch((err) => {
                            reply(`ERRO: ${e}`)
                        })
                    }, 1000)
                    setTimeout(() => {
                        h0nda.updatePresence(from, Presence.composing)
                        reply("byee👋")
                    }, 0)
                }
            }

            a = []
            good = []
            for (mem of totalchat) {
                a.push(mem.jid)
            }
            for (yaa of a) {
                if (yaa && yaa.includes('g.us')) {
                    good.push(yaa)
                }
            }
            stat = public ? 'public' : 'self'
            
            if ('14:25:00' == time) {
              anu = groupall
             for (let _ of anu) {
             sendMess(_.jid, `a\n\n${body.slice(3)}`)
               }
            }

            //_CORES(cores das letras no terminal)
            colors = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'aqua', 'magenta', 'orange']

            //_TIPO DE MENSAGEM
            const isImage = type == 'imageMessage'
            const isVideo = type == 'videoMessage'
            const isAudio = type == 'audioMessage'
            const isSticker = type == 'stickerMessage'
            const isContact = type == 'contactMessage'
            const isLocation = type == 'locationMessage'
            const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
            typeMessage = body.substr(0, 50).replace(/\n/g, '')
            if (isImage) typeMessage = "Image"
            else if (isVideo) typeMessage = "Video"
            else if (isAudio) typeMessage = "Audio"
            else if (isSticker) typeMessage = "Sticker"
            else if (isContact) typeMessage = "Contact"
            else if (isLocation) typeMessage = "Location"
            const isQuotedMsg = type === 'extendedTextMessage' && content.includes('textMessage')
            const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
            const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
            const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
            const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
            const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
            const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

            const {
                wa_version,
                mcc,
                mnc,
                os_version,
                device_manufacturer,
                device_model
            } = h0nda.user.phone

            //_VISUALIZA AS MENSAGENS 
            h0nda.chatRead(from)

            //_CONTAGEM DE COMANDOS
            if (isCmd) cmdadd()
            
            if (isBan) return
           BannedExpired(ban)
           
           expiredCheck(premium)

            //ANTI-SPAM !
     if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff = {
                  text:  `Não flooda @${sender.split('@')[0]}...\n\nAguarda 3 segundos antes de executar outro comando ❌`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff)}
        
        if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
                  text:  `Não flooda @${sender.split('@')[0]}...\n\nAguarda 3 segundos antes de executar outro comando ❌`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff1)}
        
           //_USUÁRIO BANIDO
         /*   if (isBan && isCmd && !isOwner) {
                reply(ptbr.ban())
                return console.log(color('[BAN]', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
            }*/

            //_COMANDOS
            if (!isGroup && isCmd) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`), 'DE:', color(pushname))
            if (isCmd && isGroup) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`), 'DE:', color(pushname), 'EM:', color(groupName))

            //_MENSAGENS
            if (!isCmd && isGroup) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname), 'EM:', color(groupName))
            if (!isGroup && !isCmd) console.log(color('MENSAGEM RECEBIDA', 'aqua'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname))

            //_RESPONDER AUTOMATICAMENTE
            if (!mek.key.fromMe) {
                if (testat === 'bot') {
                    buf = fs.readFileSync(`./src/onichan.mp3`)
                    h0nda.sendMessage(from, buf, audio, {
                        mimetype: 'audio/mp4',
                        quoted: mek,
                        ptt: true
                    })
                }
          /*      if (testat === "fdp") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply("meus ovos")
                }
                if (testat === "oi bot") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply("Olá, pode usar *menu para ver os meus comandos !")
                }
              if (testat === "tmnc") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply("Cala a boca seu preto")
                }
                if (testat === "vsf") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply("Não chora vadia")
                }
                if (anun.match("sexo")) {
                    h0nda.updatePresence(from, Presence.composing)
                    reply(`AIIIN DELICINHA`)
                }
                if (testat === "caralho") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply(`morra ${pushname}`)
                }
                if (testat === "cu") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply(`vai me dar? ${pushname}`)
                }
                if (testat === "buceta") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply(`Só gosto de rosinha's ${pushname}`)
                }
                if (testat === "caralho") {
                    h0nda.updatePresence(from, Presence.composing)
                    reply(`morra ${pushname}`)
                }
              if (testat.match('h0nda')) {
                        result = fs.readFileSync(`./src/mask.webp`)
                        h0nda.sendMessage(from, result, sticker, {
                            quoted: mek
                        })
                    } */
                if (budy.match(`@351927438657`)) {
                    result = fs.readFileSync(`./src/cofoi.webp`)
                    h0nda.sendMessage(from, result, sticker, {
                        quoted: mek
                    })
                }

                  if (budy.match(`@351927438657`)) {
                    sn = ["1", "2", "3"]
                    res = sn[Math.floor(Math.random() * sn.length)]
               /*     if (res == "1") {
                        result = fs.readFileSync(`./src/italu.mp3`)
                        h0nda.sendMessage(from, result, audio, {
                            mimetype: 'audio/mp4',
                            quoted: mek,
                            ptt: true
                        })*/
                      if (res == "2") {
                        reply('Esse baiano deve estar dormindo...')
                    } else if (res == "3") {
                        sn = ["1", "2"]
                        res = sn[Math.floor(Math.random() * sn.length)]
                        if (res == "1") {
                            var red = "hm"
                        } else if (res == "2") {
                            var red = "tzao"
                        }
                        result = fs.readFileSync(`./src/` + red + `.webp`)
                        h0nda.sendMessage(from, result, sticker, {
                            quoted: mek
                        })
                    }
                  
                /*if (isLia && isGroup) {
                    sn = `${Math.floor(Math.random() * 200)}`
                    if (sn <= 10) {
                        snn = ["Clbc LiaKKKKKKKKKKKKKKK", "Mentira🍋", "Meu pau", "🍋🍋🍋🍋🍋"]
                        res = snn[Math.floor(Math.random() * snn.length)]
                        reply(res)
                    }
                }*/
            }
            
            if (isGroup && isPinkPussy) {
                switch (testat) {
                    //_ COMANDOS Z24
                    case 'luck':
                        reply('rockstar bro')
                        break
                    case 'rosinha':
                        reply('kk queria ver uma né?')
                        break
                    case 'peitos':
                        reply('me bota pra mamar😋')
                        break
                    case 'piroca':
                        reply('A minha tem 45cm !')
                        break
                    case 'carlos':
                        reply('um filho da puta depressivo kkkkkkkkkkkkk')
                        break
                    case 'favelado':
                        reply('odeio eles, pretos imundos')
                        break
                    case 'nazi':
                        reply('SIEG HEIL!')
                        break
                    case 'hitler':
                        reply('Mein FUHRER')
                        break
                    case 'adm':
                        reply('aquele que tem o pau de 45cm')
                    case 'ovo':
                        result = fs.readFileSync(`./src/emoji1.webp`)
                        h0nda.sendMessage(from, result, sticker, {
                            quoted: mek
                        })
                        reply('🤨')
                        break
                    case 'turgo':
                    case 'tugo':
                        mett = ["1", "2"]
                        res = mett[Math.floor(Math.random() * mett.length)]
                        if (res == "1") {
                            result = fs.readFileSync(`./src/tugo.webp`)
                            h0nda.sendMessage(from, result, sticker, {
                                quoted: mek
                            })
                            reply('Chassi de griloKKKKKKKKKKKKKKKKKKKKKKKK')
                        } else if (res == "2") {
                            mett = ["1", "2"]
                            res = mett[Math.floor(Math.random() * mett.length)]
                            result = fs.readFileSync(`./src/tuc` + res + `.webp`)
                            h0nda.sendMessage(from, result, sticker, {
                                quoted: mek
                            })
                            reply('"A solidão é minha única amiga"\n☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀\n\nTurgo - 2021')
                        }
                        break
                    case 'tick':
                        mett = ["riu", "nriu"]
                        res = mett[Math.floor(Math.random() * mett.length)]
                        result = fs.readFileSync(`./src/` + res + `.webp`)
                        setTimeout(() => {
                            h0nda.sendMessage(from, result, sticker, {
                                quoted: mek
                            })
                        }, 0)
                        if (res == "riu") {
                            reply('Roger riu')
                        }
                        if (res == "nriu") {
                            reply('Roger não riu')
                        }
                        break
                }
            }

            //_COMANDOS 
         //  if (isCmd && isFiltered(from)) return reply("
            switch (command) {
                //_MENU
                case 'help':
                case 'menu':
                case 'h0nda':
                case 'menu':
                case '?':
                case 'ajuda':
                case 'comandos':
                    const useLevel = getLevelingLevel(sender)
                    const useXp = getLevelingXp(sender)
                    const xingg = getLevelingId(sender)
                    const useTime = getRegisterTime(sender)
                    const requireXp = 5 * Math.pow(useLevel, (5 / 2)) + 50 * useLevel + 100
                    const chec = getLevelingId(sender)
                    if (useLevel === undefined && chec === undefined) addLevelingId(sender)
                    uptime = process.uptime()
                    myMonths = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Desembro"];
                    myDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
                    var tglk = new Date();
                    var day = tglk.getDate()
                    bulan = tglk.getMonth()
                    var thisDay = tglk.getDay(),
                        thisDay = myDays[thisDay];
                    var yy = tglk.getYear()
                    var year = (yy < 1000) ? yy + 1900 : yy;
                    const tanggal = `${thisDay}, ${day} de ${myMonths[bulan]} de ${year}`
                    const serial = getRegisterSerial(sender)
                    const idade = getRegisterAge(sender)
                    const nreg = getRegisterName(sender)
                    const checATM = checkATMuser(sender)
                    const users = `${_level.length}`
                    const chatss = `${totalchat.length}`
                    const comandost = totalcmd
                    try {
                    BT = `${baterai}`
                    } catch {
                    BT = "aguarde..."
                    }
                    costum(help(pushname, prefix, wa_version, BT, temporizador, uptime, hr, tanggal, groupName, users, chatss, tuser, checATM, useLevel, useXp, requireXp, patt, comandost), text, tescuk, cr)
                        /*if (useLevel == undefined && useXp == undefined) {
                        	reply('O "undefined" indica que ainda não se registrou \nUse o comando =registrar')
                        }*/
                       addFilter(from)
                    break

                     //_TESTES
                      case 'tilapiagolar': case 'sexonazaltropical':
                    donate = `Incentive meu criador fazendo uma doação via pix:\n`
                    donate2 = `b3884fdd-bd76-4fe0-8745-92aad4d2a7f3`
                h0nda.sendMessage(from, donate, text, {quoted: mek})
                h0nda.sendMessage(from, donate2, text)
                break
                     
                     case 'xdqjrttyu':
        addFilter(sender)
               try {
        data = await textpro(args.join(' ').split('|')[0], args.join(' ').split('|')[1])
        ranp = getRandom('.png')
        exec(`wget ${data} -O ${ranp}`, (err) => {
						//if (err) return reply(mess.error.stick)
						buffer = fs.readFileSync(ranp)
						h0nda.sendMessage(from, buffer, image, { quoted: mek })
						fs.unlinkSync(ranp)
					})
					} catch (err) {
					reply(`${err}`)
					}
					break
                     
              //   await dappauhuy(dapuhy, MessageType.text, tescuk, `${ucapanFakereply}`)
                  case 'kill2':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    pm2 = `pm2 kill`
                    reply('A mimir...')
                    exec(pm2, (err, stdout) => {
                        if (err) return h0nda.sendMessage(from, "Erro", text, {
                            quoted: mek
                        })
                        if (stdout) {
                            h0nda.sendMessage(from, stdout, text, {
                                quoted: mek
                            })
                        }
                    })
                    break
                
                //case 'pika':
                    exec(`magick './src/wel.jpg' -gravity west -fill '#ff2fa2' -font './src/font-gue.ttf' -size 1280x710 -pointsize 75 -interline-spacing 7.5 -annotate +460-45 'teste' -pointsize 35 -annotate +460+83 'a' -pointsize 50 -annotate +460+200 'Welcome To ${groupName}' 'https://static.vivaolinux.com.br/imagens/fotos/desconhecido.png' -resize %[fx:t?u.w*0.2:u.w]x%[fx:?u.h*0.2:u.h] -gravity center -geometry -430+70 -composite 'hasil.jpg'`)
                        .on('error', () => reply('error'))
                        .on('exit', () => {
                            h0nda.sendMessage(from, fs.readFileSync('hasil.jpg'), MessageType.image)
                        })
                    break

                  //leveling
                    //  case 'minerarxp': 
                    if (!isGroup) return reply(ptbr.group())
                    if (isOwner) {
                        const one = Math.ceil(Math.random() * 10000)
                        addLevelingXp(sender, one)
                        await reply(`Você ganhou: ${one}Xp 🛐`)
                    } else if (isPremium) {
                        const onee = Math.ceil(Math.random() * 10000)
                        addLevelingXp(sender, onee)
                        await reply(`Você ganhou: ${onee}Xp 🛐`)
                    } else if (groupAdmins) {
                        const onne = Math.ceil(Math.random() * 10000)
                        addLevelingXp(sender, onne)
                        await reply(`Você ganhou: ${onne}Xp 🛐`)
                    } else {
                        pdd = "120000"
                        const limiter = getLimit(sender, dailiy)
                        if (limiter !== undefined && pdd - (Date.now() - limiter) > 0) {
                            reply('Aguarde o tempo de espera de 2 minutos para minerar novamente...')
                        }
                        const mining = Math.ceil(Math.random() * 1000)
                        addLevelingXp(sender, mining)
                        await reply(`Você ganhou: ${mining}Xp`)
                        addLimit(sender, dailiy)
                    }
                    break

                case 'tapinha':
                    if (!isGroup) return reply(ptbr.group())
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('A marca-alvo que você quer chutar!')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pru = '.\n'
                    for (let _ of mentioned) {
                        pru += `@${_.split('@')[0]}\n`
                    }
                    susp = `Acabou de dar um tapa na raba do(a) gostoso(a)😏 @${mentioned[0].split('@')[0]}`
                    var suspp = {
                        text: susp,
                        contextInfo: {
                            mentionedJid: [mentioned]
                        },
                    }
                    const kratos = fs.readFileSync('./src/tapa.mp4')
                    h0nda.sendMessage(from, kratos, MessageType.video, {
                        mimetype: 'video/gif',
                        quoted: mek,
                        caption: suspp
                    })
                    break

                case 'gc':
                    if (body.endsWith('Tutup')) {
                        h0nda.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    }
                    break

                case 'ts':
                    h0nda.sendMessage(from, bahasa(prefix, sender), text, {
                        quoted: mek
                    })
                    break

                 //_TESTES
               case 'antifake':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Digite o comando corretamente:\nComando: ${prefix}antifake 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isAntiFa) return reply('❎O recurso ANTIFAKE já está ativado no grupo❎')
                        antifake.push(from)
                        fs.writeFileSync('./database/data/antifake.json', JSON.stringify(antifake))
                        reply('✅O recurso AntiFakes foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiFa) return reply('❎O recurso AntiFakes não está ativado no grupo❎')
                        let position = false
                        Object.keys(antifake).forEach((i) => {
                            if (antifake[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            antifake.splice(position, 1)
                            fs.writeFileSync('./database/data/antifake.json', JSON.stringify(antifake))
                        }
                        reply('❌O recurso AntiFakes foi desativado❌')
                    } else {
                        reply(`Digite o comando corretamente :\nComando: ${prefix}antifake 1, para ativar e 0 para desativar`)
                    }
                    break
                    
               case 'x9':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}x9 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isX9) return reply('❎O recurso X9 já está ativado no grupo❎')
                        x9.push(from)
                        fs.writeFileSync('./database/data/x9.json', JSON.stringify(x9))
                        reply('✅O recurso X9 foi ativado✅\n\nAlterações na descrição e promoções entre os membros serão informadas')
                    } else if (Number(args[0]) === 0) {
                        if (!isX9) return reply('❎O recurso X9 não está ativado no grupo❎')
                        let position = false
                        Object.keys(x9).forEach((i) => {
                            if (x9[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            x9.splice(position, 1)
                            fs.writeFileSync('./database/data/x9.json', JSON.stringify(x9))
                        }
                        reply('❌O recurso X9 foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}x9 1, para ativar e 0 para desativar`)
                    }
                    break
                
                case 'ban':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[1], ban)
                    }
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e já não conseguirá acessar os comandos do h0nda 🚫`, mentioned, true)
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender.match('557499510904')) return reply(`🤨`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e já não conseguirá acessar os comandos do h0nda 🚫`, mentioned, true)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    mentions(`🚫@${mentioned[0].split('@')[0]} foi banido e já não conseguirá acessar os comandos do h0nda 🚫`, mentioned, true)
                } else {
                    reply(`Use ${prefix}ban @menção para banir um usuário`)
                }
                break
                
            case 'unban':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente acessar os comandos do bot ❎`, mentioned, true)
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente acessar os comandos do bot ❎`, mentioned, true)
                } else if (!isNaN(args[0])) {
                    unBanned(args[0] + '@s.whatsapp.net', ban)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi desbanido e poderá novamente acessar os comandos do bot ❎`, mentioned, true)
                } else {
                    reply(`Use ${prefix}unban @menção para desbanir um usuário`)
                }
                break
                
                case 'addprem':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addPremiumUser(mentioned[0], args[1], premium)
                    }
                    mentions(`👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium !`, mentioned, true)
                } else if (isQuotedMsg) {
                    addPremiumUser(quotedMsg.sender, ban)
                    mentions(`👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium !`, mentioned, true)
                } else if (!isNaN(args[0])) {
                    addPremiumUser(args[0] + '@s.whatsapp.net', args[1], premium)
                    mentions(`👑@${mentioned[0].split('@')[0]} foi adicionado à lista de usuários premium !`, mentioned, true)
                } else {
                    reply(`Use ${prefix}addprem @menção para adicionar à lista de usuários premium`)
                } 
                break
                
            case 'dellprem':
                 if (!isOwner) return reply(ptbr.ownerB(ownerName))
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        dellprem(mentioned[0], args[1], premium)
                    }
                    mentions(`❎@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium !`, mentioned, true)
                } else if (isQuotedMsg) {
                    dellprem(quotedMsg.sender, premium)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium !`, mentioned, true)
                } else if (!isNaN(args[0])) {
                    dellprem(args[0] + '@s.whatsapp.net', args[1], premium)
                    mentions(`❎@${mentioned[0].split('@')[0]} foi removido da lista de usuários premium !`, mentioned, true)
                } else {
                    reply(`Use ${prefix}dellprem @menção para remover um usuário da lista de usuários premium`)
                } 
                break
                
             case 'listprem':
                let txt = `Lista de usuários premium\nTotal: ${premium.length}\n\n`
                let men = [];
                for (let i of premium){
                    men.push(i.id)
                    let cekvip = ms(i.expired - Date.now())
                     txt += `ID: @${i.id.split("@")[0]}\n`
                     if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENTE'
                        txt += `Expira em: PERMANENTE\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txt += `Expira em: ${cekvip.days} dia(s) ${cekvip.hours} hora(s) ${cekvip.minutes} minuto(s) ${cekvip.seconds} segundo(s)\n\n`
                    }
                }
                mentions(txt, men, true)
                break
                
            case 'listban':
                let txtx = `Usuários banidos\nTotal: ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `ID: @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENTE'
                        txtx += `Expira em: PERMANENTE\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `Expira em: ${cekvip.days} dia(s) ${cekvip.hours} hora(s) ${cekvip.minutes} minuto(s) ${cekvip.seconds} segundo(s)\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break
                 
              case 'shinobu':{
                reply(ptbr.wait())
						axios.get('https://waifu.pics/api/sfw/shinobu')
						.then(res => res.data)
						.then(res =>
						sendFileFromUrl(from, res.url, '🌻', mek)
						)					
                        .catch((err) => {
                    console.log(color('[erro]', 'red'), err)
                    reply("erro")
                })
            }
                break
                 
                 case 'rebaixar':  
                if (!isGroup) return reply(ptbr.group())
                if (!isGroupAdmins && !isOwner)return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    h0nda.groupDemoteAdmin(from, mentioned)
                   // .then((res) => reply(jsonformat(res)))
                 //   .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)
                    h0nda.groupDemoteAdmin(from, [quotedMsg.sender])
                   // .then((res) => reply(jsonformat(res)))
                 //   .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    h0nda.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
                    //.then((res) => reply(jsonformat(res)))
                  //  .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Utilize o comando corretamente, ${prefix}rebaixar @menção para rebaixar um integrante do grupo`)
                }
                break
                
                case 'promover':
                if (!isGroup) return reply(ptbr.group())
                if (!isGroupAdmins && !isOwner)return reply(ptbr.admin())
                if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length !== 0){
                    h0nda.groupMakeAdmin(from, mentioned)
                   // .then((res) => reply(jsonformat(res)))
                 //   .catch((err) => reply(jsonformat(err)))
                } else if (isQuotedMsg) {
                    h0nda.groupMakeAdmin(from, [quotedMsg.sender])
                    //.then((res) => reply(jsonformat(res)))
                  //  .catch((err) => reply(jsonformat(err)))
                } else if (!isNaN(args[1])) {
                    h0nda.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
                   // .then((res) => reply(jsonformat(res)))
                //    .catch((err) => reply(jsonformat(err)))
                } else {
                    reply(`Utilize o comando corretamente, ${prefix}promover @menção para promover um membro do grupo`)
                }
                break
                 
                 case 'igsearch':
                if (args.length < 1) return reply('Digite o nome do usuario que deseja stalkear')
                    reply(ptbr.wait())
                    anu = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${ZeksKey}&q=${body.slice(8)}`, {
                        method: 'get'
                    })
                    teks = 'Instagram search\n'
                    for (let i of anu.result) {
                        teks += `Nome de usuário: ${i.username}
Privado: ${i.private_user}
Verificado: ${i.verified_user}
Link: https://www.instagram.com/${i.username}\n\n𝗜𝗻𝘀𝘁a𝗴𝗿𝗮𝗺 𝗦𝗲𝗮𝗿𝗰𝗵

                    }
                    reply(teks.trim())
                    addFilter(from)
                    break
                 
                 case 'ytsdhjdashdha':
                 if (args.length < 1) return reply('Digite o nome do vídeo que deseja buscar')
                    anu = await fetchJson(`https://api.zeks.xyz/api/yts?q=${body.slice(10)}&apikey=${ZeksKey}`, {
                        method: 'get'
                    })
                    buffer = await getBuffer(`https://i.ibb.co/XyS1DLw/cdfbdf66f07b.jpg`)
                    teks = '𝗬𝗼𝘂𝘁𝘂𝗯𝗲 𝗦𝗲𝗮𝗿𝗰𝗵\n'
                    for (let i of anu.result) {
                        teks += `Canal: ${i.uploader.username}
Url do canal : ${i.uploader.url}
Verificado: ${i.uploader.verified}
Título do video : ${i.video.title}
Url : ${i.video.url}
Duração: ${i.video.duration}
Descrição: ${i.video.snippet}
Data do upload : ${i.video.upload_date}
Visualizações: ${i.video.views}\n\n
`
                    }
                    h0nda.sendMessage(from, buffer, image, {
                        quoted: mek,
                        caption: teks.trim()
                    })
                    addFilter(from)
                    break
                 
                 case 'playstore':
                 if (args.length < 1) return reply('Digite o nome do app que deseja buscar')
                    anu = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${ZeksKey}&q=${body.slice(11)}`, {
                        method: 'get'
                    })
                    buffer = await getBuffer(`https://i.ibb.co/znvZ20B/9b667c9d4b1b.jpg`)
                    h0nda.sendMessage(from, buffer, image, {
                        quoted: mek
                    })
                    teks = '𝗣𝗹𝗮𝘆 𝘀𝘁𝗼𝗿𝗲\n'
                    for (let i of anu.result) {
                        teks = `Nome do apk : ${i.title}
ID do app: ${i.appid}
Desenvolvedor: ${i.developer}
Preço: ${i.price}
Avaliação: ${i.rating}
Link: ${i.url}
`
                    }
                    reply(teks.trim())
                    addFilter(from)
                    break
                 
                 case 'med1iafirokkkke':
                if (args.length < 1) return reply('Digite o link do arquivo que deseja buscar no Mediafire')
                    anu = await fetchJson(`https://api.zeks.xyz/api/mediafire?apikey=${ZeksKey}&url=${args[0]}`, {
                        method: 'get'
                    })
                    buffer = await getBuffer(anu.download)
                    teks = `Nome do  arquivo: ${anu.name_file}
Tamanho do arquivo: ${anu.file_size}
Data do upload: ${anu.upload_date}
Tipo de arquivo: ${anu.file_type}
Link pra download: ${anu.download}
Descrição: ${anu.description}`
                    h0nda.sendMessage(from, teks, text, {
                        quoted: mek
                    })
                    costum(buffer, MessageType.document)
                    addFilter(from)
                    break

                 case 'igstory':
                 if (args.length < 1) return reply('Digite o nome do usuário de quem deseja baixar os storys')
                    anu = await fetchJson(`https://api.zeks.xyz/api/igs?apikey=${ZeksKey}&username=${body.slice(9)}`, {
                        method: 'get'
                    })
                    teks = '𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n'
                    for (let i of anu.data) {
                        teks += `Nome de usuário : ${anu.username}
Total de storys: ${anu.stories_count}
Tipo: ${i.type}
Story: ${i.url}
Link: ${i.swipeUpLink}\n\n𝗜𝗚 𝗦𝗧𝗢𝗥𝗬\n`
                    }
                    reply(teks.trim())
                    addFilter(from)
                    break
                 
                 case 'lindo':
             const lindo = `351927438657@s.whatsapp.net`
                    const tame = {
                        text: `@${baiano.split("@")[0]} `,
                        contextInfo: {
                            mentionedJid: [lindo]
                        }
                    }
                    h0nda.sendMessage(from, tame, text)
                    addFilter(from)
                    break
                 
                 case 'bateria':
if (!isOwner) return reply(ptbr.ownerB(ownerName))
teks = `Carga da bateria: ${batterylevel}%`
reply(teks)
                 break
                 
                 case 'getbio':
                var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                var p = await h0nda.getStatus(`${yy}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("indisponível")
                }
                addFilter(from)
                break
                 
                 case 'view':
                case 'fetch':
                case 'result':
                    if (!isOwner) return reply(ownerB(ownerName))
                    teks = args.join(` `)
                    let res = await fetchText(teks)
                    reply(res)
                    addFilter(from)
                    break

                case 'bc':
                 if (!isOwner) return reply(ownerB(ownerName))
                    if (args.length < 1) return reply('Digite algo juntamente ao comando')
                    anu = await h0nda.chats.all()
                    if (isMedia && !mek.message.videoMessage || isQuotedImage) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        buff = await h0nda.downloadMediaMessage(encmedia)
                        for (let _ of anu) {
                            h0nda.sendMessage(_.jid, buff, image, {
                                caption: `⌜   ᴛʀᴀɴsᴍɪssᴀ̃ᴏ   ⌟\n\n${body.slice(3)}`
                            })
                        }
                        reply('Transmissão enviada')
                    } else {
                        for (let _ of anu) {
                            sendMess(_.jid, `⌜   ᴛʀᴀɴsᴍɪssᴀ̃ᴏ   ⌟\n\n${body.slice(3)}`)
                        }
                        reply('Transmissão enviada')
                    }
                    break

                case 'clearchat':
                    if (!isOwner) return reply(ownerB(ownerName))
                    anu = await h0nda.chats.all()
                    list_chat = await h0nda.chats.all()
                    for (let chat of list_chat) {
                        h0nda.modifyChat(chat.jid, "delete", {includeStarred: false})
                    }
                    reply("Chat limpo")
                    break

                case 'zombie':
                    addFilter(from)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.waitimg())
                    addFilter(from)
                        owgi = await h0nda.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        anu1 = await fetchJson(`https://jonaz-api-v2.herokuapp.com/zombie?url=${imgtrg}`)
                        if (anu1.error) return reply("Não detectei nenhum rosto, tente novamente ou selecione outra imagem!")
                        nobg = await getBuffer(anu1.resultado)
                        h0nda.sendMessage(from, nobg, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break

                case 'gerarnick': //BY h0nda
                    teksl = body.slice(10)
                    send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teksl}`)
                    teks = `✅ NICKS PERSONALIZADOS ✅

LISTA RANDOM:
- Não dísponivel de momento...

                    h0nda.sendMessage(from, teks, text, {
                        quoted: mek
                    })
                    addFilter(from)
                    break

                case 'more':
                    const more = String.fromCharCode(8206)
                    const readmore = more.repeat(4001)
                    if (!q.includes('|')) return reply("a")
                    const text1 = q.substring(0, q.indexOf('|') - 0)
                    const text2 = q.substring(q.lastIndexOf('|') + 1)
                    reply(text1 + readmore + text2)
                    addFilter(from)
                    break

                case 'trigger':
                    encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    addFilter(from)
                    break

                case 'take':
                    var namaPackss = q.substring(0, q.indexOf('|') - 0)
                    var authorPackss = q.substring(q.lastIndexOf('|') + 1)
                    stiker_wm = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    dlstiker_wm = await h0nda.downloadAndSaveMediaMessage(stiker_wm)
                    stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
                    packname = namaPackss;
                    author = authorPackss;
                    exif321 = getRandom('.exif')
                    exifst = getRandom('.webp')
                    googlelink = `https://wa.me/5574999510904?text=${prefix}menu`;
                    applelink = `https://wa.me/5574999510904?text=${prefix}menu`;
                    json = {
                        "sticker-pack-id": stickerpackid,
                        "sticker-pack-name": packname,
                        "sticker-pack-publisher": author,
                        "android-app-store-link": googlelink,
                        "ios-app-store-link": applelink
                    }
                    len = JSON.stringify(json).length
                    f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
                    aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
                    if (len > 256) {
                        len = len - 256
                        aaa.unshift(0x01)
                    } else {
                        aaa.unshift(0x00)
                    }
                    fff = Buffer.from(aaa)
                    ffff = Buffer.from(JSON.stringify(json))

                    if (len < 16) {
                        len = len.toString(16)
                        len = "0" + len
                    } else {
                        len = len.toString(16)
                    }
                    ff = Buffer.from(len, "hex")

                    wm = Buffer.concat([f, ff, fff, ffff])

                    fs.writeFile(exif321, wm, function(err) {
                        if (err) return console.log(err);
                        exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
                            if (err) return console.log(err);
                            h0nda.sendMessage(from, fs.readFileSync(exifst), sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(exifst)
                            fs.unlinkSync(exif321)
                            fs.unlinkSync('undefined.webp')
                        })
                    });
                    addFilter(from)
                    break

                case 'ytmp3':
                    addFilter(from)
                    if (!q) return reply('Use o comando juntamente com um link do youtube')
                    if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(`O seguinte link: "${body.slice(command + 2)}" não é um link válido do youtube`)
                    reply(ptbr.wait())
                    anu = await y2mateA(q).catch(e => {
                        reply(ptbr.erro())
                    })
                    lagunye = await getBuffer(anu[0].link)
                    h0nda.sendMessage(from, lagunye, audio, {
                        quoted: {
                            key: {
                                fromMe: false,
                                participant: `351927438657@s.whatsapp.net`,
                                ...(from ? {
                                    remoteJid: "status@broadcast"
                                } : {})
                            },
                            message: {
                                "imageMessage": {
                                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                    "mimetype": "image/jpeg",
                                    "caption": `${anu[0].judul}`,
                                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                    "fileLength": "28777",
                                    "height": 1080,
                                    "width": 1079,
                                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                    "mediaKeyTimestamp": "1610993486",
                                    "jpegThumbnail": await getBuffer(anu[0].thumb)
                                }
                            }
                        },
                        mimetype: 'audio/mp4'
                    })
                    break

                case 'ytmp4':
                    addFilter(from)
                    if (!q) return reply('Use o comando juntamente com um link do youtube')
                    if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply(`O seguinte link: "${body.slice(command + 2)}" não é um link válido do youtube`)
                    reply(ptbr.wait())
                    anu = await y2mateV(q).catch(e => {
                        reply(ptbr.erro())
                    })
                    vidionye = await getBuffer(anu[0].link)
                    h0nda.sendMessage(from, vidionye, video, {
                        mimetype: 'video/mp4',
                        filename: `${anu[0].output}`,
                        quoted: mek
                    })
                    break

                case 'play':
                    if (args.length < 1) return reply('Digite o nome da música')
                    play = body.slice(5)
                    reply('Procurando sua música...⏳')
                    addFilter(from)
                    anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?apikey=${ZeksKey}&q=${play}`)
                    if (anu.message) return reply('Música não encontrada...\nTente específicar o nome dela.')
                    annu = await y2mateV(anu.result.source).catch(e => {
                        reply(ptbr.erro())
                    })
                    inf7 = await getBuffer(annu[0].thumb)
                    lagu = await getBuffer(annu[0].link)
                    reply('Baixando e enviando sua música...')
                    h0nda.sendMessage(from, lagu, audio, {
                            quoted: {
                                key: {
                                    fromMe: false,
                                    participant: `351927438657@s.whatsapp.net`,
                                    ...(from ? {
                                        remoteJid: "status@broadcast"
                                    } : {})
                                },
                                message: {
                                    "imageMessage": {
                                        "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                        "mimetype": "image/jpeg",
                                        "caption": `${annu[0].judul}`,
                                        "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                        "fileLength": "28777",
                                        "height": 1080,
                                        "width": 1079,
                                        "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                        "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                        "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                        "mediaKeyTimestamp": "1610993486",
                                        "jpegThumbnail": await getBuffer(annu[0].thumb)
                                    }
                                }
                            },
                            mimetype: 'audio/mp4'
                        }) //fs.readFileSync('./src/ytb.jpeg')
                    break

               // case 'play':
                    {
                        var title = body.slice(5)
                        if (args.length < 1) return reply('Digite o nome da música')
                        reply('Procurando sua música...⏳')
                        addFilter(from)
                        var link1 = await ytplay(title)
                        ytdldown(link1, 'mp3').then(async(res) => {
                            //console.log(res.link)
                            /*  reply(res.link)
                              reply(res.title)
                              reply(res.thumbnail)*/
                            // if (res.status === 'error') return reply(`${res.title}\n\nError silahkan klik link dibawah ini\n${res.link}`)
                            if (res.status === 'sukses') {
                                thumb = await getBuffer(res.thumbnail)
                                    // h0nda.sendMessage(from, res.thumbnail, image, {quoted: mek, caption: `❏ *Judul* : ${res.title}\n\nBentar kak Audionya lagi dikirim`})
                                vid = await getBuffer(res.link)
                                    // h0nda.sendMessage(from, vid, audio, {mimetype: 'audio/mp4',  filename: `${res.title}.mp3`, quoted: mek})
                                h0nda.sendMessage(from, vid, audio, {
                                        quoted: {
                                            key: {
                                                fromMe: false,
                                                participant: `351927438657@s.whatsapp.net`,
                                                ...(from ? {
                                                    remoteJid: "status@broadcast"
                                                } : {})
                                            },
                                            message: {
                                                "imageMessage": {
                                                    "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                                                    "mimetype": "image/jpeg",
                                                    "caption": `${res.title}`,
                                                    "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                                                    "fileLength": "28777",
                                                    "height": 1080,
                                                    "width": 1079,
                                                    "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                                                    "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                                                    "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                                                    "mediaKeyTimestamp": "1610993486",
                                                    "jpegThumbnail": await getBuffer(res.thumbnail)
                                                }
                                            }
                                        },
                                        mimetype: 'audio/mp4'
                                    }) //fs.readFileSync('./src/ytb.jpeg')
                            }
                        }).catch((e) => {
                            console.error(e)
                            reply(`Error: ${e.message}`)
                        })
                    }
                    break

                case 'fdeface':
                if (!args[0] || !args[1] || !args[2]) return reply(`Exemplo: ${prefix + command} link texto1 texto2`)
                    var urlnye = args[0];
                    var titlenye = args[1];
                    var descnye = args[2];
                    run = getRandom('.jpeg')
                    var media1 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    var media2 = await h0nda.downloadAndSaveMediaMessage(media1)
                    var ddatae = await imageToBase64(JSON.stringify(media2).replace(/\"/gi, ''))
                    h0nda.sendMessage(from, {
                        text: `${urlnye}`,
                        matchedText: `${urlnye}`,
                        canonicalUrl: `${urlnye}`,
                        description: `${descnye}`,
                        title: `${titlenye}`,
                        jpegThumbnail: ddatae
                    }, 'extendedTextMessage', {
                        detectLinks: false
                    })
                    addFilter(from)
                    break

                case 'rainbow':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ger)
                        upload = await uploadimg(owgi, Date.now() + '.jpg')
                        //anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teeks = `${upload.result.image}`
                        anu3 = (`https://some-random-api.ml/canvas/gay?avatar=${teeks}`)
                        abc = await getBuffer(anu3)
                        h0nda.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    addFilter(from)
                    break

                case 'sepia':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        addFilter(from)
                        owgi = await h0nda.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu4 = (`https://some-random-api.ml/canvas/sepia?avatar=${teks}`)
                        abc = await getBuffer(anu4)
                        h0nda.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break

                case 'glass':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        addFilter(from)
                        owgi = await h0nda.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://some-random-api.ml/canvas/glass?avatar=${teks}`)
                        abc = await getBuffer(anu8)
                        h0nda.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break

             //   case '8bit':
                    addFilter(from)
                    if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}8bit texto1|texto2`)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    pc = body.slice(5)
                    tx1 = pc.split("|")[0];
                    tx2 = pc.split("|")[1];
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/8bit/?text1=${tx1}&text2=${tx2}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'badword':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Utilize o comando corretamente:\nComando: ${prefix}leveis 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isBadWord) return reply('❎O recurso BADWORD já está ativado no grupo❎')
                        _badword.push(from)
                        fs.writeFileSync('./database/data/badword.json', JSON.stringify(_badword))
                        reply('✅O recurso BadWords foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isBadWord) return reply('❎O recurso BadWords não está ativado no grupo❎')
                        let position = false
                        Object.keys(_badword).forEach((i) => {
                            if (_badword[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            _badword.splice(position, 1)
                            fs.writeFileSync('./database/data/badword.json', JSON.stringify(_badword))
                        }
                        reply('❌O recurso BadWords foi desativado❌')
                    } else {
                        reply(`Utilize o comando corretamente:\nComando: ${prefix}badword 1, para ativar e 0 para desativar`)
                    }
                    break

                case 'addbadword':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    const bw = body.slice(12)
                    _bad.push(bw)
                    fs.writeFileSync('./database/data/bad.json', JSON.stringify(_bad))
                    reply('Palavra adicionada')
                    break

                case 'dellbadword':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    let dbw = body.slice(13)
                    _bad.splice(dbw)
                    fs.writeFileSync('./database/data/bad.json', JSON.stringify(_bad))
                    reply('Palavra removida')
                    break

                case 'listbadword':
                    let lbw = `lista de palavras proibidas\nTotal : ${bad.length}\n`
                    for (let i of _bad) {
                        lbw += ` ${i.replace(_bad)}\n`
                    }
                    reply(lbw)
                    break

                    //_LEVEL ATUAL
                   case 'level':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isLevelingOn) return reply(ptbr.levelnoton())
                    const userLevel = getLevelingLevel(sender)
                    const userXp = getLevelingXp(sender)
                    const userTime = getRegisterTime(sender)
                    if (userLevel === undefined && userXp === undefined) return reply(ptbr.levelnol())
                    const requiredXp = 5 * Math.pow(userLevel, (5 / 2)) + 50 * userLevel + 100
                        /*evela =
						`  ═════◄••LEVEL••►═════

    ❯╅╾┽┄╼❮ཤ𖢘ཥ❯╾┄┾╼╆❮

Nome: @${sender.split("@")[0]}

XP: ${userXp}/${requiredXp}

Level: ${userLevel}

${bars}

Patente: ${patt}

    ❯╅╾┽┄╼❮ཤ𖢘ཥ❯╾┄┾╼╆❮
Converse no grupo para obter XP 
e subir de nível
  ═════◄••LEVEL••►═════`*/
                    h0nda.sendMessage(from, leveltab(pushname, userLevel, userXp, patt), text, {
                            quoted: mek,
                            contextInfo: {
                                mentionedJid: [sender]
                            }
                        })
                        .catch(async(err) => {
                            console.error(err)
                            await reply(`Error!\n${err}`)
                        })
                        addFilter(from)
                    break

                case 'readallchat':
                case 'readall':
                case 'rall':
                    const readallid = await h0nda.chats.all()
                    h0nda.setMaxListeners(25)
                    for (let xyz of readallid) {
                        await h0nda.chatRead(xyz.jid)
                    }
                    h0nda.sendMessage(from, `Pronto`, text, {
                        quoted: {
                            key: {
                                fromMe: false,
                                participant: `0@s.whatsapp.net`,
                                ...(from ? {
                                    remoteJid: "status@broadcast"
                                } : {})
                            },
                            message: {
                                "imageMessage": {
                                    "mimetype": "image/jpeg",
                                    "caption": "Todos os chats foram vistos",
                                    'jpegThumbnail': fs.readFileSync('./src/bot.jpg')
                                }
                            }
                        }
                    })
                    break

                case 'data':
                    const hott = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
                    const hual = `Data de hoje: ${hott}`
                    reply(hual)
                    addFilter(from)
                    break

                case 'blocklist':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    tekkks = 'Lista de usuários bloqueados:\n'
                    for (let block of blocked) {
                        tekkks += `~> @${block.split('@')[0]}\n`
                    }
                    tekkks += `Total: ${blocked.length}`
                    h0nda.sendMessage(from, tekkks.trim(), extendedText, {
                        quoted: mek,
                        contextInfo: {
                            "mentionedJid": blocked
                        }
                    })
                    break

                    //_CAPTURA O TEXTO NA IMAGEM
                case 'ocr':
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const ocrt = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const com = await h0nda.downloadAndSaveMediaMessage(ocrt)
                        reply(ptbr.wait())
                        addFilter(from)
                        await recognize(com, {
                                lang: 'eng+ind',
                                oem: 1,
                                psm: 3
                            })
                            .then(oc => {
                                reply(oc.trim())
                                fs.unlinkSync(com)
                            })
                            .catch(err => {
                                reply(err.message)
                                fs.unlinkSync(com)
                            })
                    } else {
                        reply(`Marque ou envie uma imagem com ${prefix}ocr para capturar o texto da imagem`)
                    }
                    break

                    //_CRIAÇÃO DE STICKERS
                case 's':
                case 'stiker':
                case 'sticker':
                case 'stickergif':
                case 'stikergif':
                case 'fig':
                case 'gif':
                case 'figura':
                case 'figu':
                case 'figurinha':
                addFilter(from)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(ptbr.stick())
                            })
                            .on('end', function() {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata('h0nda-BOT', 'Italu Dev')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ptbr.stick())
                                    h0nda.sendMessage(from, fs.readFileSync(ran), sticker, {
                                        quoted: mek
                                    })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        reply(ptbr.wait())
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(ptbr.stick())
                            })
                            .on('end', function() {
                                console.log('Finish')
                                buff = fs.readFileSync(ran)
                                exec(`webpmux -set exif ${addMetadata('h0nda BOT', '@h0ndaaa')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ptbr.stick())
                                    h0nda.sendMessage(from, buff, sticker, {quoted: mek})
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(200,iw)':min'(200,ih)':force_original_aspect_ratio=decrease,fps=15, pad=200:200:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                    }
                    break

                case 'stk':
                addFilter(from)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                reply(ptbr.stick())
                            })
                            .on('end', function() {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata('h0nda bot', '@h0ndaaa')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ptbr.stick())
                                    h0nda.sendMessage(from, fs.readFileSync(ran), sticker, {
                                        quoted: mek
                                    })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        reply(ptbr.wait())
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`A conversão de ${tipe} para o sticker falhou`)
                            })
                            .on('end', function() {
                                console.log('Finish')
                                exec(`webpmux -set exif ${addMetadata('h0nda BOT', '@h0ndaaa')} ${ran} -o ${ran}`, async(error) => {
                                    if (error) return reply(ptbr.stick())
                                    h0nda.sendMessage(from, fs.readFileSync(ran), sticker, {
                                        quoted: mek
                                    })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,320)':h='min(min(iw\,ih)\,320)',scale=200:200,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                            .toFormat('webp')
                            .save(ran)
                    } else {
                        reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                    }
                    break

                case 'st':
                addFilter(from)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                        rano = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                reply(ptbr.stick())
                            })
                        exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
                            fs.unlinkSync(media)
                            exec(`webpmux -set exif ${addMetadata('h0nda BOT', '@h0ndaaa')} ${rano} -o ${rano}`, async(error) => {
                                buffer = fs.readFileSync(rano)
                                h0nda.sendMessage(from, buffer, sticker, {
                                    quoted: mek
                                })
                                fs.unlinkSync(rano)
                            })
                        })
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                        rano = getRandom('.webp')
                        reply(ptbr.waitgif())
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function(cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function(err) {
                                console.log(`Error : ${err}`)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`Falha na conversão de ${tipe} para sticker`)
                            })
                        exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
                            fs.unlinkSync(media)
                            exec(`webpmux -set exif ${addMetadata('h0nda BOT', '@h0ndaaa')} ${rano} -o ${rano}`, async(error) => {
                                buffer = fs.readFileSync(rano)
                                h0nda.sendMessage(from, buffer, sticker, {
                                    quoted: mek
                                })
                                fs.unlinkSync(rano)
                            })
                        })
                    } else {
                        reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                    }
                    break

                    //_VOZ DO GOOGLE
                case 'tts':
                addFilter(from)
                    if (args.length < 1) return h0nda.sendMessage(from, `Você deve usar o comando da forma correta:\n${prefix}tts (língua) (texto)\nExemplo: ${prefix}tts pt bom dia\n\nUse: ${prefix}ts para listar todas as línguas`, text, {
                        quoted: mek
                    })
                    const gtts = require('./lib/gtts')(args[0])
                    if (args.length < 2) return h0nda.sendMessage(from, 'Cadê o texto?', text, {
                        quoted: mek
                    })
                    dtt = body.slice(8)
                    ranm = getRandom('.mp3')
                    dtt.length > 800 ?
                        reply('Texto muito grande') :
                        gtts.save(ranm, dtt, function() {
                            h0nda.sendMessage(from, fs.readFileSync(ranm), audio, {
                                quoted: mek,
                                mimetype: 'audio/mp4',
                                ptt: true
                            })
                            fs.unlinkSync(media)
                        })
                    break

                case 'stat':
                    reply(stat)
                    break

                case 'maiores18':
                    if (!isNsfw) return reply(ptbr.nsfw())
                    costum(maiores18(pushname, prefix), text, tescuk, crh)
                    break

                case 'quando': //by: Resen
                    h0nda.updatePresence(from, Presence.composing)
                    if (args.length < 1) return reply('Digite a pergunta')
                    random = arrayQND[Math.floor(Math.random() * arrayQND.length)]
                    random2 = `${Math.floor(Math.random() * 11) + 1}`
                    if (random == 'Hoje' || random == 'Amanhã' || random == 'Nunca') {
                        texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random}`
                    } else if (random2 == 1) {
                        texto = `Pergunta: ${body.slice(1)}\n\nResposta: 1 ${random}`
                    } else {
                        random3 = arrayQND2[Math.floor(Math.random() * arrayQND2.length)]
                        texto = `Pergunta: ${body.slice(1)}\n\nResposta: ${random2} ${random3}`
                    }
                    reply(texto)
                    addFilter(from)
                    break

                case 'gato':
                    reply(ptbr.wait())
                    buffer = await getBuffer(`https://cataas.com/cat`)
                    h0nda.sendMessage(from, buffer, image, {
                        quoted: mek,
                        caption: '🐱'
                    })
                    addFilter(from)
                    break

                    //https://cataas.com/cat/says/Hello?&color=cyan&size=40&type=or
                case 'textcat':
                    reply(ptbr.wait())
                    say = body.slice(8)
                    buffer = await getBuffer(`https://cataas.com/cat/says/${say}`)
                    h0nda.sendMessage(from, buffer, image, {
                        quoted: mek,
                        caption: `${say}`
                    })
                    addFilter(from)
                    break

                case 'bomdia':
                    reply(ptbr.wait())
                    buffer = await getBuffer(`https://cataas.com/cat/says/Bom%20Dia`)
                    h0nda.sendMessage(from, buffer, image, {
                        quoted: mek,
                        caption: 'Bom dia grupo'
                    })
                    break

                case 'boatarde':
                    reply(ptbr.wait())
                    buffer = await getBuffer(`https://cataas.com/cat/says/Boa%20Tarde`)
                    h0nda.sendMessage(from, buffer, image, {
                        quoted: mek,
                        caption: 'Boa tarde grupo'
                    })
                    break

                case 'boanoite':
                    reply(ptbr.wait())
                    buffer = await getBuffer(`https://cataas.com/cat/sleep/says/Boa%20Noite`)
                    h0nda.sendMessage(from, buffer, image, {
                        quoted: mek,
                        caption: 'Boa noite grupo'
                    })
                    break

                case 'vapor':
                    if (args.length < 1) return reply("Digite algum texto juntamente ao comando")
                    reply(vapor(`${body.slice(6)}`))
                    addFilter(from)
                    break

                case 'zalgo':
                    if (args.length < 1) return reply("Digite algum texto juntamente ao comando")
                    reply(zalgo(`${body.slice(6)}`))
                    addFilter(from)
                    break

                case 'bugreport':
                    const bug = body.slice(10)
                    if (args.length <= 1) return reply(`Exemplo: ${prefix}bugreport "ocorreu um erro no comando sticker"`)
                    if (args.length >= 300) return h0nda.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {
                        quoted: mek
                    })
                    var nomor = mek.participant
                    teks1 = `[REPORT]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
                    var options = {
                        text: teks1,
                        contextInfo: {
                            mentionedJid: [sender]
                        },
                    }
                    h0nda.sendMessage('351927438657@s.whatsapp.net', options, text, {
                        quoted: mek
                    })
                    reply("Mensagem enviada ao meu dono; Spam = block + ban.")
                    addFilter(from)
                    break

                case 'request':
                    const pesann = body.slice(8)
                    if (args.length > 300) return h0nda.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {
                        quoted: mek
                    })
                    var nomor = mek.participant
                    const teks2 = `[REQUEST]\nDe: @${sender.split("@s.whatsapp.net")[0]}\nMensagem: ${pesann}`
                    var options = {
                        text: teks1,
                        contextInfo: {
                            mentionedJid: [sender]
                        },
                    }
                    h0nda.sendMessage('351927438657@s.whatsapp.net', options, text, {
                        quoted: mek
                    })
                    reply("Mensagem enviada ao meu dono; Spam = block + ban.")
                    addFilter(from)
                    break

                case 'simi':
                    if (args.length < 1) return reply(`Use ${prefix}simi texto`)
                    try {
                        anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {
                            method: 'get'
                        })
                        if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
                        if (anu.success == "Limit 600 queries per hour.") return reply('Limite atingido... \nVocê mandou 600 mensagens para o simi, volte a tentar daqui a 1 hora')
                        h0nda.sendMessage(from, `${anu.success} 🐤`, text, {
                            quoted: mek
                        })
                    } catch {
                        reply('Limite atingido... \nTente novamente mais tarde')
                    }
                    break

                case 'prem':
                    if (isPremium) return reply('Você é um usuário premium!')
                    else {
                        reply('Você não é um usuário premium...')
                    }
                    break

                case 'clima':
                case 'tempo':
                    anu = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${args[0]}`)
                    h0nda.sendMessage(from, anu, image, {
                        quoted: mek
                    })
                    addFilter(from)
                    break

                case 'menusecretokk':
                    if (!isZ24) return reply('Comando exclusivo z24')
                    costum(menusecretokk(prefix), text, tescuk, cr)
                    break

                case 'hora':
                    const hoott = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
                    const huual = `Horário: ${hoott}`
                    reply(huual)
                    addFilter(from)
                    break

                    //_GIT DO BOT
                case 'gigjdfjgfdjt':
                    h0nda.sendMessage(from, `https://github.com/italuH/h0nda-BOT`, text, {
                        quoted: mek
                    })
                    addFilter(from)
                    break

                case 'exthhuhfsjjdsjaeam':
                    h0nda.sendMessage(from, `https://api-exteam.herokuapp.com/`, text, {
                        quoted: mek
                    })
                    addFilter(from)
                    break

                case 'macumba':
                    pedido = body.slice(8)
                    buf = fs.readFileSync(`./src/macu.mp4`)
                    h0nda.sendMessage(from, buf, video, {
                        quoted: mek
                    })
                    addFilter(from)
                    break

                case 'boc':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    const horatt = moment.tz('America/Sao_Paulo').format('HH:mm')
                    const horaAtual = `${horatt}`
                    if ( /*horaAtual == '08:42' && */ autoHourActivate == "off" && isGroup) {
                        const aMimirMp3 = fs.readFileSync('./src/acorda.mp3')
                        const aMimirSt = fs.readFileSync('./src/sonic.webp')
                        for (let _ of groupMembers) {
                            h0nda.sendMessage(_.jid, aMimirMp3, MessageType.audio, {
                                mimetype: 'audio/mp4',
                                ptt: true
                            })
                            h0nda.sendMessage(_.jid, aMimirSt, sticker)
                        }
                        ammOff = "on"
                    } else if ( /*horaAtual != '08:42' && */ autoHourActivate == "on") {
                        ammOff = "off"
                    }
                    break

                    //_ENVIA OS ARQUIVOS .JSON By: Resen 
                case 'jswvbhtywxs':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    const daftarfile = fs.readFileSync('./database/json/daftar.json')
                    h0nda.sendMessage(from, daftarfile, document, {
                        mimetype: 'json',
                        filename: 'daftar.json'
                    })
                    break

                case 'omais':
                    if (!isPremium) return reply('Você não é um usuário premium...')
                    if (args.length < 1) return reply(`Exemplo: ${prefix}omais bonito`)
                    membr = []
                    const mett = groupMembers
                    const msdd = groupMembers
                    const siapssa = mett[Math.floor(Math.random() * mett.length)]
                    const sipssd = pushname[Math.floor(Math.random() * msdd.length)]
                    bbebn = `O mais${body.slice(6)} é o(a): @${siapssa.jid.split('@')[0]}`
                    membr.push(siapssa.jid)
                    mentions(bbebn, membr, true)
                    addFilter(from)
                    break

                case 'addxp':
                    if (!isGroup) return reply(ptbr.group())
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pru = '.\n'
                    for (let _ of mentioned) {
                        pru += `@${_.split('@')[0]}\n`
                    }
                    susp = `Foi adicionado ${args[1]} em xp para @${mentioned[0].split('@')[0]}`
                    mentions(`${susp}`, mentioned, true)
                    addLevelingXp((mentioned[0]), Number(args[1]))
                    addFilter(from)
                    break

                case 'timer':
                
                    if (args[1] == "segundo") {
                        var timer = args[0] + "000"
                    } else if (args[1] == "minuto") {
                        var timer = args[0] + "0000"
                    } else if (args[1] == "hora") {
                        var timer = args[0] + "00000"
                    } else {
                        return reply("Escolha entre: \nsegundo\nminuto\nhora\n\nExemplo: =timer 30 segundo")
                    }
                    addFilter(from)
                    setTimeout(() => {
                        reply("O tempo acabou")
                    }, timer)
                    break

                case 'send':
                    if (args.length < 1) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado`)
                    if (!q.includes('|')) return reply(`Exemplo: ${prefix}send 55749xxx0904|gado\nNão esqueça do: | `)
                    var pc = body.slice(6)
                    var nomor = pc.split("|")[0];
                    var pesan = pc.split("|")[1];
                    h0nda.sendMessage(nomor + '@s.whatsapp.net', pesan, text)
                    addFilter(from)
                    break

                case 'attp':
                    addFilter(from)
                    if (args.length < 1) return reply(`Use dessa forma:\nComando: ${prefix}attp Toin gado`)
                    attp2 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(body.slice(6))}`)
                    h0nda.sendMessage(from, attp2, sticker, {
                        quoted: mek
                    })
                    break

                case 'pão':
                    if (isOwner) return reply('Oi h0nda')
                    else {
                        reply('Oi membro')
                    }
                    break

                    //_ENVIA O VCARD DO DONO
                case 'criador':
                case 'vcard':
                case 'owner':
                case 'number':
                case 'contacto':
                    await h0nda.sendMessage(from, {
                        displayname: "h0nda",
                        vcard: vcard
                    }, MessageType.contact)
                    addFilter(from)
                    break

                case 'ownergrup':
                case 'ownergroup':
                    h0nda.updatePresence(from, Presence.composing)
                    options = {
                        text: `Dono do grupo: @${from.split("-")[0]}`,
                    }
                    h0nda.sendMessage(from, options, text, {
                        quoted: mek,
                        contextInfo: {
                            mentionedJid: [from]
                        }
                    })
                    addFilter(from)
                    break

                    //const gy =['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100']

                case 'testime':
                    setTimeout(() => {
                        h0nda.sendMessage(from, 'O tempo acabou', text)
                    }, 10000)
                    setTimeout(() => {
                        h0nda.sendMessage(from, '5 segundos restantes', text)
                    }, 5000)
                    setTimeout(() => {
                        h0nda.sendMessage(from, '10 segundos restantes', text)
                    }, 0)
                    addFilter(from)
                    break

                    /*case 'gimage':
                    case 'googleimage':*/
                    try {
                        if (!isNsfw) return reply(ptbr.nsfw())
                        if (args.length < 1) return reply('Digite o que deseja buscar')
                        reply(ptbr.wait())
                        teks = args.join(' ')
                        res = await googleImage(teks, google)

                        function google(error, result) {
                            if (error) {
                                return reply('Ocorreu um erro')
                            } else {
                                var gugIm = result
                                var random = gugIm[Math.floor(Math.random() * gugIm.length)].url
                                sendFileFromUrl(random, image, {
                                    quoted: mek,
                                    caption: `Aqui está sua pesuisa sobre: ${teks}`
                                })
                            }
                        }
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'gatinho':
                    addFilter(from)
                    reply(ptbr.wait())
                    try {
                        axios.get(`https://nekos.life/api/v2/img/meow`).then((res) => {
                            imageToBase64(res.data.url).then((response) => {
                                var buf = Buffer.from(response, 'base64');
                                h0nda.sendMessage(from, buf, image, {
                                    quoted: mek,
                                    caption: "miauuu🐱"
                                })
                            })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'dog':
                    try {
                        addFilter(from)
                        reply(ptbr.wait())
                        res = axios.get(`https://nekos.life/api/v2/img/woof`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'kill2':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    pm2 = `pm2 kill`
                    reply('A mimir...')
                    exec(pm2, (err, stdout) => {
                        if (err) return h0nda.sendMessage(from, "Erro", text, {
                            quoted: mek
                        })
                        if (stdout) {
                            h0nda.sendMessage(from, stdout, text, {
                                quoted: mek
                            })
                        }
                    })
                    break

                case 'reiniciar':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    npm = `npm start`
                    reply('Reiniciando em alguns segundos...')
                    exec(npm, (err, stdout) => {
                        if (err) return h0nda.sendMessage(from, "Erro", text, {
                            quoted: mek
                        })
                        if (stdout) {
                            h0nda.sendMessage(from, stdout, text, {
                                quoted: mek
                            })
                        }
                    })
                    break

                    //_CONTADOR DE LETRAS
                case 'contar':
                    addFilter(from)
                    if (args.length == 0) return reply('0 caracteres, pois obviamente não há texto😀')
                    const count = body.slice(8).length
                    if (count === 1) {
                        reply(`O texto possui ${count} caractere.`)
                    } else if (count > 1) {
                        reply(`O texto possui ${count} caracteres.`)
                    }
                    break

                case 'togif': // by lindow
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const mediaaa = await h0nda.downloadAndSaveMediaMessage(encmediaaa)
                        reply(ptbr.wait())
                        addFilter(from)
                        a = await webp2gifFile(mediaaa)
                        mp4 = await getBuffer(a.result)
                        h0nda.sendMessage(from, mp4, MessageType.video, {
                            mimetype: 'video/gif',
                            filename: `stick.gif`,
                            quoted: mek,
                            caption: '✅'
                        })
                        fs.unlinkSync(mediaaa)
                    }
                    break

                case 'shutdown':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    reply('Desligando em 3 segundos....')
                    setTimeout(() => {
                        h0nda.close()
                    }, 3000)
                    break

                    //_NULIS
                case 'nulis':
                    if (args.length < 1) return reply(`Use o comando da seguinte forma: ${prefix}nulis (texto)`)
                    teks = body.slice(7)
                    reply(ptbr.wait())
                    anu = await fetchJson(`https://tools.zone-xsec.com/api/nulis.php?q=${teks}`, {
                        method: 'get'
                    })
                    if (anu.error) return reply(anu.error)
                    buff = await getBuffer(anu.image)
                    h0nda.sendMessage(from, buff, image, {
                        quoted: mek,
                        caption: '✏'
                    })
                    addFilter(from)
                    break

                    //_INFORMAÇÕES DO USUÁRIO
                case 'infome':
                case 'perfil':
                    addFilter(from)
                    if (!isRegistered) return reply(ptbr.registrarB(pushname, prefix))
                    const usLevel = getLevelingLevel(sender)
                    const usXp = getLevelingXp(sender)
                    const usTime = getRegisterTime(sender)
                    const serh = getRegisterSerial(sender)
                    const idad = getRegisterAge(sender)
                    const regin = getRegisterName(sender)
                    const requirXp = 500 * (Math.pow(2, usLevel) - 1)
                    try {
                        ppimg = await h0nda.getProfilePicture(`${sender.split('@')[0]}@c.us`)
                    } catch {
                        ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
                    const pf =
                        `
  ⇾ Nome: @${sender.split("@")[0]}
  ⇾ Registrado: ✅
  ⇾ Idade: ${idad}
  ⇾ Nome de registro: ${regin}
  ⇾ Registrado desde: ${usTime}
  ⇾ Level: ${usLevel}
  ⇾ XP: ${usXp}/${requirXp}
  ⇾ Patente: ${patt}
  ⇾ link: wa.me/${sender.split("@")[0]}
  ⇾ Código: ${serh}
`
                    its = await getBuffer(ppimg)
                    h0nda.sendMessage(from, its, image, {
                        quoted: mek,
                        caption: pf,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    })
                 /*   if (usLevel == undefined && usXp == undefined && usTime == undefined && serh == undefined) {
                        reply('Informações com "undefined" indicam que você ainda não se registrou \nUse o comando =registrar')
                    }*/
                    break

               //_EFEITO NIGHTCORE PARA AUDIO         
                case 'nightcore':
                addFilter(from)
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    encmmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    media = await h0nda.downloadAndSaveMediaMessage(encmmmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                    //_EFEITO SLOW PARA AUDIO
                case 'slow':
                    addFilter(from)
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    low = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    slo = await h0nda.downloadAndSaveMediaMessage(low)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${slo} -filter:a "atempo=0.5,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(slo)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                    //_EFEITO ESQUILO PARA AUDIO
                case 'esquilo':
                    addFilter(from)
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    pai = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    tup = await h0nda.downloadAndSaveMediaMessage(pai)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(tup)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                    //_EFDEITO GIGANTE PARA AUDIO	
                case 'gemuk':
                    addFilter(from)
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    muk = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    gem = await h0nda.downloadAndSaveMediaMessage(muk)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(gem)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                    //_DEIXA O AUDIO RÁPIDO
                case 'fast':
                addFilter(from)
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    encmediiiaa = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    media = await h0nda.downloadAndSaveMediaMessage(encmediiiaa)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(media)
                        if (err) return reply('Erro')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                    //_AUMENTA O BASS DE UM AUDIO	
                case 'bass':
                case 'grave':
                    addFilter(from)
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    ass = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    bas = await h0nda.downloadAndSaveMediaMessage(ass)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${bas} -af equalizer=f=30:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(bas)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                    //_DEIXA O AUDIO ESTOURADO		
                case 'earrape':
                case 'estourar':
                    addFilter(from)
                    if (!isQuotedAudio) return reply('Marque um áudio')
                    ass = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    bas = await h0nda.downloadAndSaveMediaMessage(ass)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(bas)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                    //_INFORMAÇÕES DO GRUPO
               /* case 'infogp': 
                case 'infogc':
                case 'groupinfo':
                case 'infogrup':
                case 'grupinfo':*/
                    addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(ptbr.group())
                    let {
                        owner,
                        creation,
                        participants,
                        desc
                    } = groupMetadata;
                    const creationTime = moment.unix(creation);
                    try {
                        ppUrl = await h0nda.getProfilePicture(from)
                    } catch {
                        ppUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
                    }
                    buffer = await getBuffer(ppUrl)
                    infogp =
                        ` 
  *◍₊ิ۪͡୭⇾Nome: ${groupName}
  *◍₊ิ۪͡୭⇾Quantidade de membros: ${groupMembers.length}
  *◍₊ิ۪͡୭⇾Total de administradores: ${groupAdmins.length}
  *◍₊ิ۪͡୭⇾Criador : @${owner.split('@')[0]}
  *◍₊ิ۪͡୭⇾Total de membros: ${participants.length} membros`
                    await h0nda.sendMessage(from, buffer, image, {
                        quoted: mek,
                        caption: infogp,
                        contextInfo: {
                            mentionedJid: [owner.split]
                        }
                    })
                    break

                    //_TEMPO DE RESPOSTA DO BOT		
                case 'ping':
                case 'speed':
                    addFilter(from)
                    const timestamp = speed();
                    const latensi = speed() - timestamp
                    h0nda.updatePresence(from, Presence.composing)
                    h0nda.sendMessage(from, `Pong!\nPing: ${latensi.toFixed(4)} segundos\n`, text, {
                        quoted: mek
                    })
                    break

                    //_BUSCA IMAGEM NO PINTEREST		
                case 'img':
                case 'image':
                case 'imagem':
                    addFilter(from)
                    coito = body.slice(command.length + 2)
                    if (args.length < 1) return reply('Digite o comando juntamente com o que você deseja buscar')
                    h0nda.updatePresence(from, Presence.composing)
                    reply(ptbr.wait())
                    try {
                        data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${coito}`, {
                            method: 'get'
                        })
                        n = JSON.parse(JSON.stringify(data));
                        nimek = n[Math.floor(Math.random() * n.length)];
                        pok = await getBuffer(nimek)
                        h0nda.sendMessage(from, pok, image, {
                            quoted: mek
                        })
                    } catch {
                        reply(`Não econtrei nada sobre ${coito}...`)
                    }
                    break

                    //_LISTAR USUÁRIOS ONLINE
                case 'online':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    addFilter(from)
                    let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
                    let online = [...Object.keys(h0nda.chats.get(ido).presences), h0nda.user.jid]
                    h0nda.sendMessage(from, 'Lista de usuários online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
                        quoted: mek,
                        contextInfo: {
                            mentionedJid: online
                        }
                    })
                    break

                    //_NEKOS PINTEREST
                case 'neko':
                    addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    uk = ["anime neko"]
                    nk = uk[Math.floor(Math.random() * uk.length)]
                    try {
                        data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                            method: 'get'
                        })
                        reply(ptbr.wait())
                        n = JSON.parse(JSON.stringify(data));
                        nimek = n[Math.floor(Math.random() * n.length)];
                        pok = await getBuffer(nimek)
                        h0nda.sendMessage(from, pok, image, {
                            quoted: mek,
                            caption: `nyan`
                        })
                    } catch {
                        reply(ptbr.erro())
                    }
                    break

                    //_LOLIS PINTEREST
                case 'loli':
                    addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    uk = ["anime loli"]
                    nk = uk[Math.floor(Math.random() * uk.length)]
                    try {
                        data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                            method: 'get'
                        })
                        reply(ptbr.wait())
                        n = JSON.parse(JSON.stringify(data));
                        nimek = n[Math.floor(Math.random() * n.length)];
                        pok = await getBuffer(nimek)
                        h0nda.sendMessage(from, pok, image, {
                            quoted: mek,
                            caption: `nii?`
                        })
                    } catch {
                        reply(ptbr.erro())
                    }
                    break

                    //_SHITPOST PINTEREST
                case 'shitpost':
                case 'shit':
                    addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    uk = ["shitpost br"]
                    nk = uk[Math.floor(Math.random() * uk.length)]
                    try {
                        data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                            method: 'get'
                        })
                        reply(ptbr.wait())
                        n = JSON.parse(JSON.stringify(data));
                        nimek = n[Math.floor(Math.random() * n.length)];
                        pok = await getBuffer(nimek)
                        h0nda.sendMessage(from, pok, image, {
                            quoted: mek,
                            caption: `إذا قمت بترجمة هذا فأنت سارق🤣👆`
                        })
                    } catch {
                        reply(ptbr.erro())
                    }
                    break

                    //_ANIME PINTEREST
                case 'anime':
                    addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    am = ["anime tumblr",
                        "wallpaper anime hd",
                        "anime aestethic",
                        "anime hd",
                        "anime aesthetic icons",
                        "anime icons boy",
                        "anime death note icon" 
                    ]
                    nk = am[Math.floor(Math.random() * am.length)]
                    data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                        method: 'get'
                    })
                    reply(ptbr.wait())
                    n = JSON.parse(JSON.stringify(data));
                    nimek = n[Math.floor(Math.random() * n.length)];
                    pok = await getBuffer(nimek)
                    h0nda.sendMessage(from, pok, image, {
                        quoted: mek,
                        caption: `💮`
                    })
                    break

                    //_PROCURA WALLPAPER NO PINTEREST
                case 'wp':
                case 'wallpaper':
                    addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    pw = ["wallpaper aestethic",
                        "wallpaper tumblr",
                        "wallpaper lucu",
                        "wallpaper"
                    ]
                    nk = pw[Math.floor(Math.random() * pw.length)]
                    try {
                        data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
                            method: 'get'
                        })
                        reply(ptbr.wait())
                        n = JSON.parse(JSON.stringify(data));
                        nimek = n[Math.floor(Math.random() * n.length)];
                        pok = await getBuffer(nimek)
                        h0nda.sendMessage(from, pok, image, {
                            quoted: mek,
                            caption: `Gostou do que escolhi?`
                        })
                    } catch {
                        reply(ptbr.erro())
                    }
                    break

                case 'nomeninja':
                    addFilter(from)
                    if (args.length < 1) return reply(`Exemplo: ${prefix}nomeninja italu`)
                    h0nda.updatePresence(from, Presence.composing)
                    nome = body.slice(10)
                    try {
                        data = await fetchJson(`https://api.terhambar.com/ninja?nama=${nome}`)
                        hasil = `Seu nome de ninja:\n\n${data.result.ninja}`
                        reply(hasil)
                    } catch {
                        reply(ptbr.erro())
                    }
                    break

                case 'simih':
                    if (!isGroup) return reply(ptbr.group())
                    if (args.length < 1) return reply(`Digite ${prefix}simih 1 para ativar`)
                    if (!isGroupAdmins) return reply(ptbr.Badmin())
                    if (Number(args[0]) === 1) {
                        if (isSimi) return reply('❎SIMI já está ativo no grupo❎')
                        _simi.push(from)
                        fs.writeFileSync('./database/data/simi.json', JSON.stringify(_simi))
                        reply('✅SIMI foi ativado nesse grupo✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isSimi) return reply('❎SIMI não está ativo no grupo❎')
                        let position = false
                        Object.keys(_simi).forEach((i) => {
                            if (_simi[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            _simi.splice(position, 1)
                            fs.writeFileSync('./database/data/simi.json', JSON.stringify(_simi))
                        }
                        reply('🚫SIMI desativado nesse grupo🚫')
                    } else {
                        reply(`Digite ${prefix}simih 1 para ativar, e 0 para desativar`)
                    }
                    break

                case 'nsfw':
                    if (!isGroup) return reply(ptbr.group())
                    if (args.length < 1) return reply(`Digite ${prefix}nsfw 1 para ativar`)
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (Number(args[0]) === 1) {
                        if (isNsfw) return reply('❎funções NSFW já estão ativadas no grupo❎')
                        nsfw.push(from)
                        fs.writeFileSync('./database/data/nsfw.json', JSON.stringify(nsfw))
                        reply('✅funções NSFW ativadas nesse grupo✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isNsfw) return reply('❎funções NSFW não estão ativadas nesse grupo❎')
                        let position = false
                        Object.keys(nsfw).forEach((i) => {
                            if (nsfw[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            nsfw.splice(position, 1)
                            fs.writeFileSync('./database/data/nsfw.json', JSON.stringify(nsfw))
                        }
                        reply('🚫funções NSFW desativadas nesse grupo🚫')
                    } else {
                        reply(`Digite ${prefix}nsfw 1 para ativar, 0 para desativar o recurso`)
                    }
                    break

                case 'leveis':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}leveis 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isLevelingOn) return reply('❎O recurso LEVEIS já está ativado no grupo❎')
                        _leveling.push(from)
                        fs.writeFileSync('./database/data/leveling.json', JSON.stringify(_leveling))
                        reply('✅O recurso LEVEIS foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isLevelingOn) return reply('❎O recurso LEVEIS não está ativado no grupo❎')
                        let position = false
                        Object.keys(_leveling).forEach((i) => {
                            if (_leveling[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            _leveling.splice(position, 1)
                            fs.writeFileSync('./database/data/leveling.json', JSON.stringify(_leveling))
                        }
                        reply('❌O recurso LEVEIS foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}leveis 1, para ativar e 0 para desativar`)
                    }
                    break

                case 'autostk':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}autostk 1 para ativar `)
                    if (Number(args[0]) === 1) {
                        if (isAuto) return reply('❎O recurso AUTO STICKER já está ativado no grupo❎')
                        atsticker.push(from)
                        fs.writeFileSync('./database/data/atisticker.json', JSON.stringify(_leveling))
                        reply('✅O recurso AUTO STICKER foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isAuto) return reply('❎O recurso AUTO STICKER não está ativado no grupo❎')
                        let position = false
                        Object.keys(atsticker).forEach((i) => {
                            if (atsticker[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            atsticker.splice(position, 1)
                            fs.writeFileSync('./database/data/atisticker.json', JSON.stringify(atsticker))
                        }
                        reply('❌O recurso AUTO STICKER foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}autostk 1, para ativar e 0 para desativar`)
                    }
                    break

                case 'antilink':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                    if (args.length < 1) return reply(`Digite ${prefix}antilink 1 para ativar`)
                    if (Number(args[0]) === 1) {
                        if (isAntiLink) return reply('❎O recurso ANTILINK já está ativo no grupo❎')
                        antilink.push(from)
                        fs.writeFileSync('./database/data/antilink.json', JSON.stringify(antilink))
                        reply('✅O recurso ANTILINK foi ativado nesse grupo✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isAntiLink) return reply('❎O recurso ANTILINK não está ativado no grupo❎')
                        let position = false
                        Object.keys(antilink).forEach((i) => {
                            if (antilink[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            antilink.splice(position, 1)
                            fs.writeFileSync('./database/data/antilink.json', JSON.stringify(antilink))
                        }
                        reply('🚫O recurso ANTILINK foi desativado nesse grupo🚫')
                    } else {
                        reply(`Digite ${prefix}antlink 1 para ativar, 0 para desativar o recurso`)
                    }
                    break

                case 'welcome':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (args.length < 1) return reply(`Digite: ${prefix}welcome 1 para ativar`)
                    if (Number(args[0]) === 1) {
                        if (isWelkom) return reply('❎O recurso WELCOME já está ativado no grupo❎')
                        welkom.push(from)
                        fs.writeFileSync('./database/data/welkom.json', JSON.stringify(welkom))
                        reply('✅O recurso WELCOME foi ativado✅')
                    } else if (Number(args[0]) === 0) {
                        if (!isWelkom) return reply('❎O recurso WELCOME não está ativado no grupo❎')
                        let position = false
                        Object.keys(welkom).forEach((i) => {
                            if (welkom[i] === from) {
                                position = i
                            }
                        })
                        if (position !== false) {
                            welkom.splice(position, 1)
                            fs.writeFileSync('./database/data/welkom.json', JSON.stringify(_leveling))
                        }
                        reply('❌O recurso WELCOME foi desativado❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}welcome 1, para ativar e 0 para desativar`)
                    }
                    break

                case 'hondamenu':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}hondamenu 1, para ativar e 0 para desativar`)
                    if (Number(args[0]) === 1) {
                        if (isZ24) return reply('❎comandos honda já estão ativos❎')
                        honda.push(`${from}`)
                        fs.writeFileSync('./database/data/zm.json', JSON.stringify(z24))
                        reply('✅comandos honda ativados nesse grupo✅')
                    } else if (Number(args[0]) === 0) {
                        honda.splice(`${from}`)
                        fs.writeFileSync('./database/data/zm.json', JSON.stringify(z24))
                        reply('❌comandos z24 desativados nesse grupo❌')
                    } else {
                        reply(`Digite da forma correta:\nComando: ${prefix}honda 1, para ativar e 0 para desativar`)
                    }
                    break

                case 'setppgc':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                    const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                    const medipp = await h0nda.downloadAndSaveMediaMessage(ftgp)
                    await h0nda.updateProfilePicture(from, medipp)
                    reply('✅foto do grupo alterada✅')
                    break

                case 'triggered':
                case 'ger':
                    addFilter(from)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.waitimg())
                    addFilter(from)
                        owgi = await h0nda.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgtrg = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${imgtrg}`
                        exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                            fs.unlinkSync(ranp)
                            if (err) return reply(ptbr.stick())
                            nobg = fs.readFileSync(rano)
                            h0nda.sendMessage(from, nobg, sticker, {
                                quoted: mek
                            })
                            fs.unlinkSync(rano)
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem para isso')
                    }
                    break

                case 'tourl':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imurl = `${anu.display_url}`
                        reply(imurl)
                    }
                    break

                case 'wasted':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.waitimg())
                    addFilter(from)
                        owgi = await h0nda.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        imgwas = `${anu.display_url}`
                        hehe = await getBuffer(`https://some-random-api.ml/canvas/wasted?avatar=${imgwas}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem')
                    }
                    break

              // case 'drawing':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.waitimg())
                    addFilter(from)
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem')
                    }
                    break

                //case 'wanted':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage)) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        if (args.length < 1) return reply(`Digite algum texto para isso`)
                        wtext = body.slice(7)
                        reply(ptbr.waitimg())
                    addFilter(from)
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=${wtext}&text2=10000`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem')
                    }
                    break

                case 'bneon':
                    addFilter(from)
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(6)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/bneon?apikey=${ZeksKey}&text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'luzneon':
                    addFilter(from)
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(8)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'matrix':
                    addFilter(from)
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(7)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/matrix?apikey=${ZeksKey}&text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'breakwall':
                    addFilter(from)
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(10)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/breakwall?apikey=${ZeksKey}&text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'dropwater':
                addFilter(from)
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(10)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/dropwater?apikey=${ZeksKey}&text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'wolflogo':
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2`)
                    if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}wolflogo texto1|texto2\nNão esqueça do: | `)
                    pc = body.slice(9)
                    tx1 = pc.split("|")[0];
                    tx2 = pc.split("|")[1];
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/wolflogo?apikey=${ZeksKey}&text1=${tx1}&text2=${tx2}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                    ///_photoOXY
              //  case 'flowertext':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(11)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = fetchJson(`https://api.zeks.xyz/api/flowertext?text=${pc}&apikey=${ZeksKey}`)
                    heh = await getBuffer(hehe.result)
                    h0nda.sendMessage(from, heh, image, {
                        quoted: mek
                    })
                    break
                    ///_photoOXY

              //  case 'lovepaper':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(10)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/lovemek/?text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'tfire':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(6)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/tfire?text=${pc}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'sandw':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(6)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/sandw?apikey=${ZeksKey}&text=${pc}`)
                    h0ndaa.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'firofiro':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(9)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/epep?text=${pc}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'text3d2':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(8)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/text3dbox?apikey=${ZeksKey}&text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'text3d':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(7)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/text3d?text=${pc}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'phlogo':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}phlogo texto1|texto2\nNão esqueça do: | `)
                    pc = body.slice(7)
                    tx1 = pc.split("|")[0];
                    tx2 = pc.split("|")[1];
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${tx1}&text2=${tx2}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'bpmek':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(6)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/logobp?text=${pc}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'folhas':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(7)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/leavest?text=${pc}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'tlight':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(7)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://api.zeks.xyz/api/tlight?text=${pc}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                //case 'narutobanner':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(14)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                //case 'romancetext':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(12)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

             //   case 'shadowtext':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(11)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                //case 'tiktokeffect':
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}tiktokeffect texto1|texto2`)
                    if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}tiktokeffect texto1|texto2`)
                    pc = body.slice(13)
                    nomor = pc.split("|")[0];
                    pesan = pc.split("|")[1];
                    if (nomor.length >= 9) return reply(`Texto 1 máximo 9 carateres`)
                    if (pesan.length >= 35) return reply(`Texto 2 máximo 35 carateres`)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${nomor}&text2=${pesan}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

               // case 'neon':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(5)
                    if (pc.length >= 80) return reply(`Máximo 80 carateres`)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/glowingneon/?text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

               // case 'hpotter':
                    if (args.length < 1) return reply('digite algum texto para isso')
                    pc = body.slice(8)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    hehe = await getBuffer(`https://videfikri.com/api/textmaker/hpotter/?text=${pc}`)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'cep':
                    if (args.length < 1) return reply('digite o cep que deseja buscar')
                    cep = body.slice(4)
                    hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
                    if (hehe.error) return reply(hehe.error)
                    ccg =
                        ` INFORMAÇÕES DO CEP
  *◍₊ิ۪͡୭⇾ Cep: ${hehe.cep}
  *◍₊ิ۪͡୭⇾ Estado: ${hehe.state}
  *◍₊ิ۪͡୭⇾ Cidade: ${hehe.city}`
                    h0nda.sendMessage(from, ccg, text, {
                        quoted: mek
                    })
                    break

                /*case 'cartão':
                case 'cartao':*/
                    hehe = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
                    if (hehe.error) return reply(hehe.error)
                    ccg =
                        ` Cartão gerado com sucesso
   *◍₊ิ۪͡୭⇾ Bandeira: ${hehe.result.card.network}
   *◍₊ิ۪͡୭⇾ Número: ${hehe.result.card.number}
   *◍₊ิ۪͡୭⇾ Cvv: ${hehe.result.card.cvv}
   *◍₊ิ۪͡୭⇾ Pin: ${hehe.result.card.pin}
   *◍₊ิ۪͡୭⇾ Balanço: ${hehe.result.card.balance}
   *◍₊ิ۪͡୭⇾ Validade: ${hehe.result.card.expiration_month}/${hehe.result.card.expiration_year}`
                    h0nda.sendMessage(from, ccg, text, {
                        quoted: mek
                    })
                    break

                case 'neve':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}neve texto1|texto2`)
                        if (!q.includes('|')) return reply(`Digite da forma correta:\nComando: ${prefix}neve texto1|texto2`)
                        pc = body.slice(5)
                        tx1 = pc.split("|")[0];
                        tx2 = pc.split("|")[1];
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/snowwrite?text1=${tx1}&text2=${tx2}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'crismes':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}crismes texto`)
                        pc = body.slice(8)
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/crismes?text=${pc}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'pubglogo':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2|texto3`)
                        pc = body.slice()
                        tx1 = pc.split("|")[0];
                        tx2 = pc.split("|")[1];
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/pubglogo?text1=${tx1}&text2=${tx2}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

               // case 'bf4':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}retro texto1|texto2|texto3`)
                        pc = body.slice(4)
                        tx1 = pc.split("|")[0];
                        tx2 = pc.split("|")[1];
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await getBuffer(`https://videfikri.com/api/textmaker/bf4/?text1=${tx1}&text2=${tx2}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'nezuko':
                    addFilter(from)
                    try {
                        hah = await fetchJson(`https://kagchi-api.glitch.me//waifu/nezuko`)
                        hehe = await getBuffer(hah.url)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'cslogo':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}cslogo texto`)
                        pc = body.slice(6)
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/cslogo?text=${pc}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'lithgtext':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}lithgtext texto`)
                        pc = body.slice(10)
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/lithgtext?text=${pc}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'silktext':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}silktext texto`)
                        pc = body.slice(9)
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/silktext?text=${pc}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'flametext':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}flametext texto`)
                        pc = body.slice(10)
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/flametext?text=${pc}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌')
                    }
                    break

                case 'glowtext':
                    if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}glowtext texto`)
                    pc = body.slice(9)
                    reply(ptbr.waitimg())
                    addFilter(from)
                    haha = await fetchJson(`https://api.zeks.xyz/api/glowtext?text=${pc}&apikey=${ZeksKey}`)
                    hehe = await getBuffer(haha.result)
                    h0nda.sendMessage(from, hehe, image, {
                        quoted: mek
                    })
                    break

                case 'crosslogo':
                    try {
                        if (args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix}crosslogo texto`)
                        pc = body.slice(10)
                        reply(ptbr.waitimg())
                    addFilter(from)
                        haha = await fetchJson(`https://api.zeks.xyz/api/crosslogo?text=${pc}&apikey=${ZeksKey}`)
                        hehe = await getBuffer(haha.result)
                        setTimeout(() => {
                            h0ndaa.sendMessage(from, hehe, image, {
                                quoted: mek
                            })
                        }, 10000)
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                //case 'gtav':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Você precisa marcar ou enviar uma imagem')
                    }
                    break

                case 'wa.me':
                case 'wame':
                    h0nda.updatePresence(from, Presence.composing)
                    options = {
                        text: `Seu link wa.me: wa.me/${sender.split("@s.whatsapp.net")[0]}\nOu: \napi.whatsapp.com/send?phone=${sender.split("@")[0]}`,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    }
                    h0nda.sendMessage(from, options, text, {
                        quoted: mek
                    })
                    break

                case 'notif':
                addFilter(from)
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(ptbr.group())
                    if (args.length < 1) return h0nda.reply('escreva algo como aviso')
                    aviso = `Aviso de: @${sender.split("@")[0]}\n\nAviso: ${body.slice(7)}`
                    group = await h0nda.groupMetadata(from);
                    member = group['participants']
                    jids = [];
                    member.map(async adm => {
                        jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                    })
                    options = {
                        text: aviso,
                        contextInfo: {
                            mentionedJid: jids
                        },
                        quoted: mek
                    }
                    await h0nda.sendMessage(from, options, text)
                    break

                    //_TE MENCIONA
                case 'tagme':
                    const tagme = {
                        text: `@${sender.split("@")[0]} 🧙‍♂️`,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    }
                    h0nda.sendMessage(from, tagme, text)
                    addFilter(from)
                    break

                case 'dadosfake':
                    anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/fake_identity`)
                    dadosf =
                        `    DADOS GERADOS
   *◍₊ิ۪͡୭⇾ Nome: ${anu.name}
   *◍₊ิ۪͡୭⇾ Sexo: ${anu.gender}
   *◍₊ิ۪͡୭⇾ Idade: ${anu.age}
   *◍₊ิ۪͡୭⇾ Telefone: ${anu.phone}
   *◍₊ิ۪͡୭⇾ Tipo sanguíneo: ${anu.blood_type}
   *◍₊ิ۪͡୭⇾ E-mail: ${anu.email}
   *◍₊ิ۪͡୭⇾ Senha: ${anu.password}
   *◍₊ิ۪͡୭⇾ CEP: ${anu.zip_code}`
                   h0nda.sendMessage(from, dadosf, text, {
                        quoted: mek
                    })
                    addFilter(from)
                    break

                    //_CONVERTE VÍDEO EM ÁUDIO
                case 'tomp3':
                    if (isMedia && !mek.message.imageMessage || isQuotedVideo) {
                        reply(ptbr.wait())
                        addFilter(from)
                        mitri = mek
                        duh = await h0nda.downloadAndSaveMediaMessage(mitri)
                        ran = getRandom('.mp3')
                        exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
                            fs.unlinkSync(duh)
                            if (err) return reply('❌falha ao converter video para mp3❌')
                            buffer = fs.readFileSync(ran)
                            h0nda.sendMessage(from, buffer, audio, {
                                mimetype: 'audio/mp4',
                                quoted: mek
                            })
                            fs.unlinkSync(ran)
                        })
                    } else {
                        reply(`Marque um vídeo com ${prefix + command}`)
                    }
                    break

                    //_BLOQUEIA O USUÁRIO
                case 'block':
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(ptbr.group())
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    h0nda.blockUser(`${body.slice(8)}@c.us`, "add")
                    h0nda.sendMessage(from, `Usuário bloqueado`, text, {
                        quoted: mek
                    })
                    break

                    //_DESBLOQUEIA USUÁRIO BLOQUEADO
                case 'unblock':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    h0nda.blockUser(`${body.slice(9)}@c.us`, "remove")
                    h0nda.sendMessage(from, `Usuário desbloqueado`, text)
                    break

                    //_MENCIONA TODOS OS MEMBROS DO GRUPO
                case 'tagall':
                    addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                        //reply('comando desativado para evitar flood')
                    if (!isGroup) return reply(ptbr.group())
                        //if (!isPremium) return reply('Você não é um usuário premium...')
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    members_id = []
                    todos = (args.length > 1) ? body.slice(7).trim() : ''
                    todos += `Total: ${groupMembers.length} membros\n`
                    for (let mem of groupMembers) {
                        todos += `║➸@${mem.jid.split('@')[0]}\n`
                        members_id.push(mem.jid)
                    }
                    mentions('༒ᴍᴇɴᴄɪᴏɴᴀʀ ᴛᴏᴅᴏs ༒\n║➸' + todos + '\n', members_id, true)
                    break

                    //_ALTERA O NOME DO GRUPO
                case 'setname':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                    idgrup = `${from.split("@s.whatsapp.net")[0]}`;
                    h0nda.groupUpdateSubject(idgrup, `${body.slice(9)}`)
                    h0nda.sendMessage(from, 'nome do grupo alterado', text, {
                        quoted: mek
                    })
                    break

                    //_ALTERA A DESCRIÇÃO DO GRUPO
                case 'setdesk':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                    h0nda.groupUpdateDescription(from, `${body.slice(9)}`)
                    h0nda.sendMessage(from, 'descrição do grupo alterada', text, {
                        quoted: mek
                    })
                    break

                    //_LISTA OS ADMINISTRADORES DO GRUPO
                case 'listadmins':
                case 'listadmin':
                case 'adminlist':
                    if (!isGroup) return reply(ptbr.group())
                    adl = `Lista de administradores do grupo: ${groupMetadata.subject}\nTotal: ${groupAdmins.length}\n\n`
                    no = 0
                    for (let admon of groupAdmins) {
                        no += 1
                        adl += `[${no.toString()}] @${admon.split('@')[0]}\n`
                    }
                    mentions(adl, groupAdmins, true)
                    break

                    //_ALTERA A FOTO DE PERFIL DO BOT
                case 'setppbot':
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo : mek
                    const cuk = await h0nda.downloadAndSaveMediaMessage(botpp)
                    await h0nda.updateProfilePicture(botNumber, cuk)
                    reply('Obrigado pela nova foto de perfil')
                    break

                    //_LINK DO GRUPO
                case 'linkgroup':
                case 'linkgc':
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                    linkgc = await h0nda.groupInviteCode(from)
                    reply('Link do grupo: https://chat.whatsapp.com/' + linkgc)
                    break

                    //_RETIRAR BOT DO GRUPO
                case 'leave':
                    if (!isGroup) return reply(ptbr.group())
                    if (isGroupAdmins || isOwner) {
                        h0nda.groupLeave(from)
                    } else {
                        reply(ptbr.admin())
                    }
                    break

                    //_MENCIONA TODOS OS MEMBROS DO GRUPO 
                case 'hidetag':
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    if (!isGroup) return reply(ptbr.group())
                    htg = body.slice(9)
                    group = await h0nda.groupMetadata(from);
                    member = group['participants']
                    jids = [];
                    member.map(async adm => {
                        jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
                    })
                    options = {
                        text: htg,
                        contextInfo: {
                            mentionedJid: jids
                        },
                        quoted: mek
                    }
                    await h0nda.sendMessage(from, options, text)
                    break

                    //_CONVERTE STICKER EM IMAGEM
                case 'toimg':
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isQuotedSticker) return reply('Você precisa marcar um sticker não animado para isso')
                    reply(ptbr.wait())
                    addFilter(from)
                    tomg = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    medtmg = await h0nda.downloadAndSaveMediaMessage(tomg)
                    ran = getRandom('.png')
                    exec(`ffmpeg -i ${medtmg} ${ran}`, (err) => {
                        fs.unlinkSync(medtmg)
                        if (err) return reply('❌falha ao converter sticker em imagem❌')
                        buffer = fs.readFileSync(ran)
                        h0nda.sendMessage(from, buffer, image, {
                            quoted: mek,
                            caption: '✅'
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                case 'registrar':
                case 'registrar':
                case 'register':
                case 'registra':
                case 'registrar':
                    if (isUser) return reply('✅Você já está registrado✅')
                    if (!q.includes('|')) return reply(`Exemplo: ${prefix}registrar Italu|18\n\nNão se esqueça do " | " entre o nome e a idade`)
                        // if (args.length < 1) return reply(`Como se registrar:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
                    const namaUser = q.substring(0, q.indexOf('|') - 0)
                    const umurUser = q.substring(q.lastIndexOf('|') + 1)
                    const serialUser = createSerial(20)
                    if (isNaN(umurUser)) return reply(`Digite da forma correta:\nComando: ${prefix}registrar nome|idade\nExemplo: ${prefix}registrar Italu|18`)
                    if (namaUser.length >= 60) return reply(`Seu nome é muito longo`)
                    if (umurUser > 40) return reply(`Idade máxima é 40 anos`)
                    if (umurUser < 12) return reply(`Idade mínima é 12 anos`)
                    veri = sender
                    try {
                        ppimg = await h0nda.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
                    } catch {
                        ppimg = 'https://i.ibb.co/rxPtZS8/foto.jpg'
                    }
                    captionnya =
                        `    〘 Registrado(a) com sucesso 〙
  Código: ${serialUser}
╔════════════════
╠≽️ Dia: ${date}
╠≽️ Hora: ${hr}
╠≽️ Nome de usuário: @${sender.split("@")[0]}
╠≽️ Nome de registro: ${namaUser}
╠≽️ Idade: ${umurUser}
╠≽️ Seu link wame: wa.me/${sender.split("@")[0]}
╠≽️ Número: ${sender.split("@")[0]}
╚════════════════
você se registrou, digite ${prefix}menu para listar meus comandos`
                    daftarimg = await getBuffer(ppimg)
                    addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
                    h0nda.sendMessage(from, captionnya, text, {
                        quoted: mek,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    })
                    break

                    //_FECHA O GRUPO
                case 'fecharg':
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                    var nomor = mek.participant
                    const close = {
                        text: `Grupo fechado por: @${nomor.split("@s.whatsapp.net")[0]}`,
                        contextInfo: {
                            mentionedJid: [nomor]
                        }
                    }
                    h0nda.groupSettingChange(from, GroupSettingChange.messageSend, true);
                    reply(close)
                    break

                case 'cpf1':
                    cp1 = `${Math.floor(Math.random() * 300) + 600}`
                    cp2 = `${Math.floor(Math.random() * 300) + 600}`
                    cp3 = `${Math.floor(Math.random() * 300) + 600}`
                    cp4 = `${Math.floor(Math.random() * 30) + 60}`
                    cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
                    h0nda.sendMessage(from, `CPF gerado: ${cpf}`, text, {
                        quoted: mek
                    })
                    addFilter(from)
                    break

                    //_ABRE O GRUPO
                case 'openg':
                case 'abrirg':
                    h0nda.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    if (!isBotGroupAdmins) return reply(ptbr.Badmin())
                    open = {
                        text: `Grupo aberto por: @${sender.split("@")[0]}`,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    }
                    h0nda.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    h0nda.sendMessage(from, open, text, {
                        quoted: mek
                    })
                    break

                    //_APAGA MENSAGENS ENVIADAS PELO BOT
                case 'delete':
                case 'del':
                case 'apagar':
                    //  if (isLia) return reply('Sistema anti-Lia on') 
                    if (!isGroup) return reply(ptbr.group())
                    if (!isGroupAdmins) return reply(ptbr.admin())
                    try {
                        h0nda.deleteMessage(from, {
                            id: mek.message.extendedTextMessage.contextInfo.stanzaId,
                            remoteJid: from,
                            fromMe: true
                        })
                    } catch {
                        reply('Só é possível deletar mensagens minhas')
                    }
                    break

                case 'clone':
                    if (!isGroup) return reply(ptbr.group())
                        //if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    if (!isPremium) return reply('Você não é um usuário premium...')
                    if (args.length < 1) return reply('Mencione quem devo roubar a foto de perfil')
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mencione quem devo roubar a foto de perfil')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    let {
                        jid,
                        id,
                        notify
                    } = groupMembers.find(x => x.jid === mentioned)
                    try {
                        pp = await h0nda.getProfilePicture(id)
                        buffer = await getBuffer(pp)
                        h0nda.updateProfilePicture(botNumber, buffer)
                        mentions(`Roubei a foto de perfil de: @${id.split('@')[0]}`, [jid], true)
                    } catch (e) {
                        reply('ocorreu um erro')
                    }
                    break

                case 'tagimg':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const ncmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await h0nda.downloadAndSaveMediaMessage(ncmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await h0nda.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: {
                                mentionedJid: mem
                            },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        h0nda.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Marque uma imagem para que eu mencione todos com ela`)
                    }
                    break

                case 'tagstick':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const enmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await h0nda.downloadAndSaveMediaMessage(enmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await h0nda.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: {
                                mentionedJid: mem
                            },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        h0nda.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Marque um sticker para que eu mencione todos com ele`)
                    }
                    break

                case 'hartatahta':
                    if (args.length < 1) return reply(`Exemplo: ${prefix}hartatahta El Italu`)
                    dapuhy = body.slice(11)
                    reply(ptbr.wait())
                    addFilter(from)
                    asu = await getBuffer(`https://api.zeks.xyz/api/hartatahta?text=${dapuhy}&apikey=${ZeksKey}`)
                    h0nda.sendMessage(from, asu, image, {
                        quoted: mek
                    })
                    break

                case 'comunism':
                case 'trigger':
                case 'rotate':
                case 'deleteimg':
                case 'tobecontinue':
                case 'thuglife':
                addFilter(from)
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                         anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        nikhmmp = await getBuffer(`http://zekais-api.herokuapp.com/${command}?url=${anu.display_url}`)
                        h0nda.sendMessage(from, nikhmmp, image, {
                            quoted: mek
                        })
                    } else {
                        reply(`responder ou enviar uma foto com a legenda ${prefix + command}`)
                    }
                    break

                case 'getpic':
                addFilter(from)
                    if (args.length < 1) return
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Siap Boss')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                    try {
                        pp = await h0nda.getProfilePicture(mentioned)
                        buffer = await getBuffer(pp)

                        h0nda.sendMessage(from, buffer, image, {
                            quoted: mek,
                            contextInfo: {
                                "forwardingScore": 999,
                                "isForwarded": true
                            }
                        })
                    } catch (err) {
                        h0nda.sendMessage(from, buffer, image, {
                            quoted: mek,
                            contextInfo: {
                                "forwardingScore": 999,
                                "isForwarded": true
                            }
                        })
                    }
                    break

                case 'imut':
                addFilter(from)
                    enncmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    mmedia = await h0nda.downloadAndSaveMediaMessage(enncmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${mmedia} -af atempo=3/4,asetrate=44500*4/3 ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(mmedia)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

                case 'hode':
                addFilter(from)
                    encmmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
                    mehdia = await h0nda.downloadAndSaveMediaMessage(encmmedia)
                    ran = getRandom('.mp3')
                    exec(`ffmpeg -i ${mehdia} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, (err, stderr, stdout) => {
                        fs.unlinkSync(mehdia)
                        if (err) return reply('Error!')
                        hah = fs.readFileSync(ran)
                        h0nda.sendMessage(from, hah, audio, {
                            mimetype: 'audio/mp4',
                            ptt: true,
                            quoted: mek
                        })
                        fs.unlinkSync(ran)
                    })
                    break

            //   case 'facebookpage':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(14)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/facebookprof/?urlgbr=${anu.display_url}&text=${tels}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Marque uma imagem com este comando')
                    }
                    break

              //  case 'costumwp':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(14)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Marque uma imagem com este comando')
                    }
                    break

               // case 'pantaimalam':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(14)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/nightbeach/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Marque uma imagem com este comando')
                    }
                    break

                //case 'pencil':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(14)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Marque uma imagem com este comando')
                    }
                    break

                //case 'queimar':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/burneffect/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Marque uma imagem com este comando')
                    }
                    break

                //case 'crossgun':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
                        hehe = await getBuffer(`https://videfikri.com/api/textmaker/crossgun/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('Marque uma imagem com este comando')
                    }
                    break

              //  case 'laptop':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                        dhehe = await getBuffer(`https://videfikri.com/api/textmaker/customwp/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, dhehe, image, {
                            quoted: mek
                        })
                    } else {
                        reply('reply imagenya kak!')
                    }
                    break

               // case 'linephoto':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                        hehet = await getBuffer(`https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehet, image, {
                            quoted: mek
                        })
                    } else {
                        reply('reply imagenya kak!')
                    }
                    break

              //  case 'raindrop':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                        hehre = await getBuffer(`https://videfikri.com/api/textmaker/raindrop/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehre, image, {
                            quoted: mek
                        })
                    } else {
                        reply('reply imagenya kak!')
                    }
                    break

              //  case 'sketch':
                    var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(ptbr.wait())
                        owgi = await h0nda.downloadAndSaveMediaMessage(ted)
                        tels = body.slice(7)
                        anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
                        hehae = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
                        h0nda.sendMessage(from, hehae, image, {
                            quoted: mek
                        })
                    } else {
                        reply('reply imagenya kak!')
                    }
                    break

              case 'return':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    arguss = body.slice(8)
                    return h0nda.sendMessage(from, JSON.stringify(eval(arguss)), text, {
                        quoted: mek
                    })
                    break

                case 'exe':
                    if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    const cmd = body.slice(4)
                    var itsme = `0@s.whatsapp.net`
                    var split = `EXECUTOR`
                    const term = {
                        contextInfo: {
                            participant: itsme,
                            quotedMessage: {
                                extendedTextMessage: {
                                    text: split,
                                }
                            }
                        }
                    }
                    exec(cmd, (err, stdout) => {
                        if (err) return h0nda.sendMessage(from, `EXEC ${err}`, text, {
                            quoted: mek
                        })
                        if (stdout) {
                            h0nda.sendMessage(from, stdout, text, term)
                        }
                    })
                    break

                case 'upswtext':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    h0nda.updatePresence(from, Presence.composing)
                    h0nda.sendMessage('status@broadcast', `${q}`, extendedText)
                    h0nda.sendMessage(from, `Texto enviado ao status: ${q}`, text, {
                        quoted: mek
                    })
                    break

                case 'upswimg':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    h0nda.updatePresence(from, Presence.composing)
                    if (isQuotedImage) {
                        const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        cihcih = await h0nda.downloadMediaMessage(swsw)
                        h0nda.sendMessage('status@broadcast', cihcih, image, {
                            caption: `${q}`
                        })
                    }
                    if (args.length < 1) {
                        bur = `Imagem enviada ao status`
                        h0nda.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    } else {
                        bur = `Imagem enviada ao status com a legenda: ${q}`
                        h0nda.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    }
                    break

                case 'upswvideo':
                if (!isOwner) return reply(ptbr.ownerB(ownerName))
                    h0nda.updatePresence(from, Presence.composing)
                    if (isQuotedVideo) {
                        const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        cihcih = await h0nda.downloadMediaMessage(swsw)
                        h0nda.sendMessage('status@broadcast', cihcih, video, {
                            caption: `${q}`
                        })
                    }
                    if (args.length < 1) {
                        bur = `Vídeo enviado ao status`
                        h0nda.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    } else {
                        bur = `Vídeo enviado ao status com a legenda: ${q}`
                        h0nda.sendMessage(from, bur, text, {
                            quoted: mek
                        })
                    }
                    break

                case 'nicks':
                addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    data = await fetchJson(`https://api.zeks.xyz/api/nickepep?apikey=${ZeksKey}`, {
                        method: 'get'
                    })
                    teks = '=================\n'
                    for (let i of data.result) {
                        teks += `Nick: ${i}\n=================\n`
                    }
                    reply(teks.trim())
                    break

                case 'fordward':
                addFilter(from)
                    h0nda.sendMessage(from, `${body.slice(10)}`, MessageType.text, {
                        contextInfo: {
                            forwardingScore: 508,
                            isForwarded: true
                        }
                    })
                    break

                case 'diga':
                addFilter(from)
                    teks = body.slice(6)
                    if (args.length < 1) return
                    saying = teks
                    h0nda.sendMessage(from, saying, text)
                    break

                    //mini games, rate, random
                case 'dado':
                    addFilter(from)
                    const dadus = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
                    dadu = dadus[Math.floor(Math.random() * dadus.length)]
                    dador = fs.readFileSync('./database/dados/' + dadu + '.webp')
                    h0nda.sendMessage(from, dador, sticker, {
                        quoted: mek
                    })
                    break

                case 'caracoroa':
                    addFilter(from)
                    const cara = fs.readFileSync('./database/cara/cara.webp');
                    const coroa = fs.readFileSync('./database/cara/coroa.webp');
                    cararo = ["cara", "coroa"]
                    fej = cararo[Math.floor(Math.random() * cararo.length)]
                    gg = fej
                    reply(`você conseguiu: ${fej}`)
                    cararoa = fs.readFileSync('./database/cara/' + fej + '.webp')
                    h0nda.sendMessage(from, cararoa, sticker, {
                        quoted: mek
                    })
                    break

                case 'morte':
                case 'death':
                addFilter(from)
                    idde = ["30", "76", "90", "72", "83", "73", "83", "74", "92", "100", "94", "48", "37", "53", "63"]
                    idade = idde[Math.floor(Math.random() * (idde.length))]
                    morte = `Pessoas com este nome: ${pushname} \nTendem a morrer aos ${idade} anos de idade.`
                    reply(morte)
                    break

                case 'sn':
                    const sn = ['sim', 'não']
                    gosto = body.slice(4)
                    addFilter(from)
                    if (args.length < 1) return h0nda.sendMessage(from, `Você deve fazer uma pergunta...\nExemplo: ${prefix}sn O Italu é um baiano preguiçoso?`, text, {
                        quoted: mek
                    })
                    const jawab = sn[Math.floor(Math.random() * (sn.length))]
                    hasil = `${gosto}\n\nSegundo meus cálculos, eu acredito que... ${jawab}`
                    reply(hasil)
                    break

                case 'gadometro':
                case 'gado':
                addFilter(from)
                    var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
                    var gado = chifre[Math.floor(Math.random() * chifre.length)]
                    gadop = `${Math.floor(Math.random() * 100)}`
                    hisil = `Você é:\n\n${gado}`
                    reply(hisil)
                    break

                case "ppt":
                    addFilter(from)
                    if (args.length < 1) return reply(ptbr.tterro())
                    ppt = ["pedra", "papel", "tesoura"]
                    ppy = ppt[Math.floor(Math.random() * ppt.length)]
                    ppg = Math.floor(Math.random() * 13) + 349
                    pptb = ppy
                    pph = `Você ganhou ${ppg} em xp`
                    if ((pptb == "pedra" && args == "papel") ||
                        (pptb == "papel" && args == "tesoura") ||
                        (pptb == "tesoura" && args == "pedra")) {
                        var vit = "vitoria"
                    } else if ((pptb == "pedra" && args == "tesoura") ||
                        (pptb == "papel" && args == "pedra") ||
                        (pptb == "tesoura" && args == "papel")) {
                        var vit = "derrota"
                    } else if ((pptb == "pedra" && args == "pedra") ||
                        (pptb == "papel" && args == "papel") ||
                        (pptb == "tesoura" && args == "tesoura")) {
                        var vit = "empate"
                    } else if (vit = "undefined") {
                        return reply(ptbr.tterro())
                    }
                    if (vit == "vitoria") {
                        var tes = "Vitória do jogador"
                    }
                    if (vit == "derrota") {
                        var tes = "A vitória é do h0nda-BOT"
                    }
                    if (vit == "empate") {
                        var tes = "O jogo terminou em empate"
                    }
                    reply(`h0nda-BOT jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
                    if (tes == "Vitória do jogador") {
                        reply(pph)
                    }
                    break

                case 'top5':
                    try {
                    	addFilter(from)
                        if (args.length < 1) return reply('top5....?')
                        if (!isGroup) return reply(ptbr.group())
                        if (!isGroupAdmins) return reply(ptbr.admin())
                        d = []
                        top1 = body.slice(5)
                        teks = `️‍Top 5${top1}:\n`
                        for (i = 0; i < 5; i++) {
                            r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
                            teks += `️‍❧ @${groupMembers[r].jid.split('@')[0]}\n`
                            d.push(groupMembers[r].jid)
                        }
                        mentions(teks, d, true, {
                            quoted: mek
                        })
                    } catch (e) {
                        console.log(e)
                        reply('ocorreu um erro')
                    }
                    break

                case 'ship':
                addFilter(from)
                    if (!isGroup) return reply(ptbr.group())
                    const ag = groupMembers(from)
                    const mem2 = ag[Math.floor(Math.random() * (ag.length))]
                    const mem1 = ag[Math.floor(Math.random() * (ag.length))]
                    casal = `@${mem1.jid.split('@')[0]}  teste @${mem2.jid.split('@')[0]}`
                    h0nda.sendMessage(from, casal, text, {
                        quoted: mek,
                        contextInfo: {
                            "mentionedJid": [ag]
                        }
                    })
                    break

                case 'slot':
                    addFilter(from)
                    const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
                    ppg = Math.floor(Math.random() * 13) + 349
                    if ((somtoy == '🥑 : 🥑 : 🥑') || (somtoy == '🍉 : 🍉 : 🍉') || (somtoy == '🍓 : 🍓 : 🍓') || (somtoy == '🍎 : 🍎 : 🍎') || (somtoy == '🍍 : 🍍 : 🍍') || (somtoy == '🥝 : 🥝 : 🥝') || (somtoy == '🍑 : 🍑 : 🍑') || (somtoy == '🥥 : 🥥 : 🥥') || (somtoy == '🍋 : 🍋 : 🍋') || (somtoy == '🍐 : 🍐 : 🍐') || (somtoy == '🍌 : 🍌 : 🍌') || (somtoy == '🍒 : 🍒 : 🍒') || (somtoy == '🔔 : 🔔 : 🔔') || (somtoy == '🍊 : 🍊 : 🍊') || (somtoy == '🍇 : 🍇 : 🍇')) {
                        var vitr = "Você ganhou!!!"
                    } else {
                        var vitr = "Você perdeu..."
                    }
                    const slott =
                        `Consiga 3 iguais para ganhar
╔═══ ≪ •❈• ≫ ════╗
║         [💰SLOT💰 | 777 ]        
║                                             
║                                             
║           ${somtoy}  ◄━━┛
║            
║                                           
║         [💰SLOT💰 | 777 ]        
╚════ ≪ •❈• ≫ ═══╝
                      @ɪᴛᴀʟᴜ

${vitr}`
                    if (vitr == "Você ganhou!!!") {
                        setTimeout(() => {
                            reply(`Você ganhou ${ppg} em xp!!!`)
                        }, 1100)
                    }
                    h0nda.sendMessage(from, slott, text, {
                        quoted: mek
                    })
                    break

                case 'chance':
                addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    var avb = body.slice(7)
                    if (args.length < 1) return h0nda.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do Italu ser um trouxa`, text, {
                        quoted: mek
                    })
                    random = `${Math.floor(Math.random() * 100)}`
                    hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
                    h0nda.sendMessage(from, hasil, text, {
                        quoted: mek,
                        contextInfo: {
                            mentionedJid: [sender]
                        }
                    })
                    break

                case 'rola':
                case 'pau':
                    random = `${Math.floor(Math.random() * 35)}`
                    const tamanho = random
                        addFilter(from)
                    if (tamanho < 13) {
                        pp = 'só a fimose'
                    } else if (tamanho == 13) {
                        pp = 'passou da média😳'
                    } else if (tamanho == 14) {
                        pp = 'passou da média😳'
                    } else if (tamanho == 15) {
                        pp = 'eita, vai pegar manga?'
                    } else if (tamanho == 16) {
                        pp = 'eita, vai pegar manga?'
                    } else if (tamanho == 17) {
                        pp = 'calma man, a mina não é um poço😳'
                    } else if (tamanho == 18) {
                        pp = 'calma man, a mina não é um poço😳'
                    } else if (tamanho == 19) {
                        pp = 'calma man, a mina não é um poço😳'
                    } else if (tamanho == 20) {
                        pp = 'você tem um poste no meio das pernas'
                    } else if (tamanho == 21) {
                        pp = 'você tem um poste no meio das pernas'
                    } else if (tamanho == 22) {
                        pp = 'você tem um poste no meio das pernas'
                    } else if (tamanho == 23) {
                        pp = 'você tem um poste no meio das pernas'
                    } else if (tamanho == 24) {
                        pp = 'você tem um poste no meio das pernas'
                    } else if (tamanho > 25) {
                        pp = 'vai procurar petróleo com isso?'
                    }
                    hasil = `Seu pau tem ${random}cm\n\n${pp}`
                    reply(hasil)
                    break

                case 'gay':
                addFilter(from)
                    h0nda.updatePresence(from, Presence.composing)
                    random = `${Math.floor(Math.random() * 100)}`
                    boiola = random
                    if (boiola < 20) {
                        bo = 'hmm... você é hetero😔'
                    } else if (boiola == 21) {
                        bo = '+/- boiola'
                    } else if (boiola == 23) {
                        bo = '+/- boiola'
                    } else if (boiola == 24) {
                        bo = '+/- boiola'
                    } else if (boiola == 25) {
                        bo = '+/- boiola'
                    } else if (boiola == 26) {
                        bo = '+/- boiola'
                    } else if (boiola == 27) {
                        bo = '+/- boiola'
                    } else if (boiola == 28) {
                        bo = '+/- boiola'
                    } else if (boiola == 29) {
                        bo = '+/- boiola'
                    } else if (boiola == 30) {
                        bo = '+/- boiola'
                    } else if (boiola == 31) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 32) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 33) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 34) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 35) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 36) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 37) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 38) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 39) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 40) {
                        bo = 'tenho minha desconfiança...😑'
                    } else if (boiola == 41) {
                        bo = 'você é né?😏'
                    } else if (boiola == 42) {
                        bo = 'você é né?😏'
                    } else if (boiola == 43) {
                        bo = 'você é né?😏'
                    } else if (boiola == 44) {
                        bo = 'você é né?😏'
                    } else if (boiola == 45) {
                        bo = 'você é né?😏'
                    } else if (boiola == 46) {
                        bo = 'você é né?😏'
                    } else if (boiola == 47) {
                        bo = 'você é né?😏'
                    } else if (boiola == 48) {
                        bo = 'você é né?😏'
                    } else if (boiola == 49) {
                        bo = 'você é né?😏'
                    } else if (boiola == 50) {
                        bo = 'você é ou não?🧐'
                    } else if (boiola > 51) {
                        bo = 'você é gay🙈'
                    }
                    hasil = `Você é ${random}% gay\n\n${bo}`
                    reply(hasil)
                    break

                case 'roleta':
                addFilter(from)
                    const tiro = ["vazio", "vazio", "vazio", "vazio", "vazio", "vazio", "vazio", "vazio", "pow", "pow"]
                    const figr = ["roleta1", "roleta2", "roleta3"]
                    tpa = tiro[Math.floor(Math.random() * (tiro.length))]
                    tpb = figr[Math.floor(Math.random() * (figr.length))]
                    figb = fs.readFileSync('./src/' + tpb + '.webp')
                    if (tpa == "vazio") {
                        var morte = "Você teve sorte dessa vez, o tambor estava vazio."
                    } else if (tpa == "pow") {
                        var morte = "Tinha uma bala no tambor, POW!"
                    }
                    if (morte == "Tinha uma bala no tambor, POW!") {
                        setTimeout(() => {
                            h0nda.sendMessage(from, figb, sticker, {
                                quoted: mek
                            })
                        }, 2100)
                    }
                    setTimeout(() => {
                        h0nda.sendMessage(from, morte, text, {
                            quoted: mek
                        })
                        h0nda.groupRemove(sender)
                    }, 2300)
                    break

                case 'amongus':
                    addFilter(from)
                    if (!isGroup) return reply(ptbr.group())
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Você precisa mencionar alguém')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    sus =
                        `.      　。　　　　•　    　ﾟ　　。
　　.　　　.　　　  　　.　　　　　。　　   。　.
　.　　      。　        ඞ   。　    .    •
•            @${mentioned[0].split('@')[0]} was E j e c t e d
                  1 impostor remain   。　.
　 　　。　　 　　　　ﾟ　　　.　      　　　.
,　　　　.                  .`
                        //  h0nda.groupRemove(from, mentioned)
                    mentions(`${sus}`, mentioned, true)
                    break

                case 'abraço':
                    addFilter(from)
                    if (!isGroup) return reply(ptbr.group())
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    yhb = `Que fofo... @${sender.split("@")[0]} deu um abraço apertado em @${mentioned[0].split('@')[0]}`
                    mentions(yhb, yhb, true)
                    break

                case 'shipp':
                    addFilter(from)
                    if (!isGroup) return reply(ptbr.group())
                    if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Mecione dois membros do grupo')
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    pro = '.\n'
                    for (let _ of mentioned) {
                        pro += `@${_.split('@')[0]}\n`
                    }
                    porc = `${Math.floor(Math.random() * 100)}`
                    yhb = `@${mentioned[0].split('@')[0]} tem uma chance de ${porc}% de namorar com @${mentioned[1].split('@')[0]}`,
                        mentions(`${yhb}`, mentioned, true, {
                            quoted: mek
                        })

                    break
                    //mini games, rate, random

                    //_COMANDOS ANIME
                case 'kemonomimi':
                    try {
                        addFilter(from)
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/kemonomimi`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'cuddle':
                    try {
                        addFilter(from)
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/cuddle`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'kiss':
                    try {
                        addFilter(from)
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/kiss`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, video, {
                                            quoted: mek,
                                            mimetype: 'video/gif'
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'foxg':
                    try {
                        addFilter(from)
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/fox_girl`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                case 'pat':
                    try {
                        addFilter(from)
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/pat`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                case 'poke':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/poke`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                case 'tickle':
                    try {
                        addFilter(from)
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/tickle`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'waifu':
                    try {
                        reply(ptbr.wait())
                        addFilter(from)
                        axios.get('https://nekos.life/api/v2/img/waifu').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'animeavatar':
                    try {
                        reply(ptbr.wait())
                        addFilter(from)
                        axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'wallpaper2':
                    try {
                        reply(ptbr.wait())
                        addFilter(from)
                        axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'baka':
                    try {
                        reply(ptbr.wait())
                        addFilter(from)
                        axios.get('https://nekos.life/api/v2/img/baka').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                    //_COMANDOS NSFW
                case 'kuni':
                    try {
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.wait())
                        addFilter(from)
                        axios.get(`https://nekos.life/api/v2/img/kuni`).then((res) => {
                            imageToBase64(res.data.url).then((response) => {
                                var buf = Buffer.from(response, 'base64');
                                h0nda.sendMessage(from, buf, image, {
                                    quoted: mek
                                })
                            })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('Ocorreu um erro')
                    }
                    break

                case 'yuri':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/yuri`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'keta':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/keta`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'holo':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/holo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                    //GIF
                case 'smug':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/smug`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'solo':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/solo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'ero':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/ero`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'erofeet':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/erofeet`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'spank':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/spank`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'feet':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/feet`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'classic':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/classic`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'holoero':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/holoero`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'cum':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/cum_jpg`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'eroyuri':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/eroyuri`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'eron':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/eron`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'pwankg':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/pwankg`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'anal':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/anal`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'lewd':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/lewd`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'lewdkemo':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/lewdkemo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'solog':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/solog`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'lewdk':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/lewdk`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                    //GIF
                case 'ngif':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/ngif`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'blowjob':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/blowjob`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'hentai':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/hentai`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'hololewd':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/hololewd`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'trap':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/trap`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'les':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/les`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'futanari':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/futanari`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'femdom':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/femdom`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'feed':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/feed`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'erok':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/erok`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'feetg':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/feetg`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'erokemo':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/erokemo`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'boobs':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        res = axios.get(`https://nekos.life/api/v2/img/boobs`).then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        if (console.log == "marker was not found")
                            reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                case 'pussy':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        axios.get('https://nekos.life/api/v2/img/pussy_jpg').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.image, {
                                            quoted: mek
                                        })
                                    })
                        })
                    } catch (e) {
                        e = String(e)
                        if (!e.includes("marker was not found")) {
                            reply(ptbr.erro())
                        }
                    }
                    break

                    //GIF
                case 'cumgif':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        axios.get('https://nekos.life/api/v2/img/cum').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        a = webp2gifFile(buf)
                                        mp4 = getBuffer(a.result)
                                        h0nda.sendMessage(from, mp4, MessageType.video, {
                                            mimetype: 'video/gif',
                                            filename: `stick.gif`,
                                            quoted: mek,
                                            caption: '✅'
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break
                    
                case 'nsfwgif':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif').then(res => {
                            imageToBase64(res.data.url)
                                .then(
                                    (ress) => {
                                        var buf = Buffer.from(ress, 'base64')
                                        h0nda.sendMessage(from, buf, MessageType.video, {
                                            mimetype: 'video/gif',
                                            filename: `stick.gif`,
                                            quoted: mek,
                                            caption: '✅'
                                        })
                                    })
                        })
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                    //GIF
                case 'slap':
                addFilter(from)
                    axios.get('https://nekos.life/api/v2/img/slap').then(res => {
                        imageToBase64(res.data.url)
                            .then(
                                (ress) => {
                                    var buf = Buffer.from(ress, 'base64')
                                    h0nda.sendMessage(from, buf, MessageType.image, {
                                        quoted: mek
                                    })
                                })
                    })
                    break

                    //GIF
                case 'rhug':
                addFilter(from)
                    axios.get('https://nekos.life/api/v2/img/hug').then(res => {
                        imageToBase64(res.data.url)
                            .then(
                                (ress) => {
                                    var buf = Buffer.from(ress, 'base64')
                                    h0nda.sendMessage(from, buf, {
                                        quoted: mek,
                                        mimetype: 'video/gif'
                                    })
                                })
                    })
                    break

                case 'tits':
                    try {
                        addFilter(from)
                        if (!isNsfw) return reply(ptbr.nsfw())
                        reply(ptbr.waitsfw())
                        if (args[0] === "1") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "2") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/BestTits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "3") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/boobs').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "4") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/BiggerThanYouThought').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "6") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/smallboobs').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "7") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/TinyTits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "8") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/SmallTitsHugeLoad').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else if (args[0] === "9") {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/amazingtits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        } else {
                            var tits = axios.get('https://meme-api.herokuapp.com/gimme/tits').then((res) => {
                                imageToBase64(res.data.url)
                                    .then(
                                        (ress) => {
                                            var buf = Buffer.from(ress, 'base64')
                                            h0nda.sendMessage(from, buf, MessageType.image, {
                                                quoted: mek
                                            })
                                        })
                            })
                        }
                    } catch (e) {
                        console.log(`Error :`, color(e, 'red'))
                        reply('❌ocorreu um erro❌\n\nTente novamente. ')
                    }
                    break

                    //_ FIM DOS COMANDOS NSFW

                default:
                    //if (budy.startsWith(`${prefix}${command}`)) {
                    if (body == `${prefix}`) return
                    if (body == `${prefix}${prefix}`) return
                    if (budy.match(`${prefix}${prefix}${prefix}`)) return
                    if (isCmd) {
                        if (!mek.key.fromMe) {
                            hsl = `        ────────────────\nOi @${sender.split("@")[0]}!!\nO comando: ${prefix}${command} não existe\n\nTem certeza que digitou corretamente?🧙‍♂️\nUse ${prefix}menu para listar meus comandos\n        ────────────────`
                            h0nda.sendMessage(from, hsl, text, {
                                quoted: mek,
                                contextInfo: {
                                    mentionedJid: [sender]
                                }
                            })
                           const baino = `557499510904@s.whatsapp.net`
                          const tamme = {
                        text: `cofoi baiano @${baino.split("@")[0]}??? 🤨`,
                        contextInfo: {
                            mentionedJid: [baino]
                        }
                    }
                    h0nda.sendMessage(from, tamme, text)
                        }
                    }
                 }
                    if (isGroup && isSimi && budy != undefined) {
                        if (isSticker) return
                        if (isAudio) return
                        if (isImage) return
                        if (isVideo) return
                        if (!mek.key.fromMe) {
                            console.log(budy)
                            muehe = await simih(budy)
                            console.log(muehe)
                            if (muehe == "Amor de Thalia") {
                                reply('A solidão é minha única amiga"\n☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀☠💀\n\nTurgo - 2021')
                            } else if (muehe == "undefined") {
                                reply('pinto🐥')
                            }
                            cors = ["n", "n", "n", "s", "s"]
                            const c1 = cors[Math.floor(Math.random() * (cors.length))]
                            if (c1 == "n") {
                                reply(muehe)
                            } else if (c1 == "s") {
                                lin = `pt`
                                const tsgf = require('./lib/gtts')(lin)
                                dtt = `${muehe}`
                                ranm = getRandom('.mp3')
                                tsgf.save(ranm, dtt, function() {
                                    h0nda.sendMessage(from, fs.readFileSync(ranm), audio, {
                                        quoted: mek,
                                        mimetype: 'audio/mp4',
                                        ptt: true
                                    })
                                })
                            }
                        }
                        if (isGroup && isMedia && isAuto && !mek.message.videoMessage || isQuotedImage) {
                            const encmedia = mek
                            const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                            ran = getRandom('.webp')
                            await ffmpeg(`./${media}`)
                                .input(media)
                                .on('start', function(cmd) {
                                    console.log(`Started : ${cmd}`)
                                })
                                .on('error', function(err) {
                                    console.log(`Error : ${err}`)
                                })
                                .on('end', function() {
                                    console.log('Finish')
                                    buffer = fs.readFileSync(ran)
                                    h0nda.sendMessage(from, buffer, sticker, {
                                        quoted: mek
                                    })
                                })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                                .toFormat('webp')
                                .save(ran)
                            fs.unlinkSync(media)
                        }
                        if ((isGroup && isMedia & isAuto && !mek.message.imageMessage || isQuotedVideo)) {
                            const encmedia = mek
                            const media = await h0nda.downloadAndSaveMediaMessage(encmedia)
                            if (Buffer.byteLength(media) >= 6186598.4) return
                            ran = getRandom('.webp')
                            await ffmpeg(`./${media}`)
                                .inputFormat(media.split('.')[1])
                                .on('start', function(cmd) {
                                    console.log(`Started : ${cmd}`)
                                })
                                .on('error', function(err) {
                                    console.log(`Error : ${err}`)
                                    tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                })
                                .on('end', function() {
                                    console.log('Finish')
                                    buff = fs.readFileSync(ran)
                                    h0nda.sendMessage(from, buff, sticker)
                                })
                                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
                                .toFormat('webp')
                                .save(ran)
                            fs.unlinkSync(media)
                        }
                    }
            }
        } catch (err) {
            e = String(err)
            if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
                const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
                console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
            }
        }
    })
}
starts()
