const help = (pushname, prefix, waa_version, batteryT, temporizador, uptime, hr, tanggal, groupName, users, chatss, prema, checATM, useLevel, useXp, requireXp, patt, comandost) => {
    return `
       👿 𝑿 𝙃𝙚𝙡𝙡𝙤 ${pushname} 🖐 𝑿 👿
⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
  𝙞𝙣𝙛𝙤 𝙙𝙤 𝙗𝙤𝙩 :
        
⪧ 𝘗𝘳𝘦𝘧𝘪𝘹 :「 ${prefix} 」
⪧ 𝘕𝘰𝘮𝘦  : 𝐡𝐨𝐧𝐝𝐚 𝐁𝐎𝐓
⪧ 𝘝𝘦𝘳𝘴𝘪𝘰𝘯 : 1.0 Oficial
⪧ 𝘞𝘈 𝘷𝘦𝘳𝘴𝘪𝘰𝘯 : ${waa_version}
⪧ 𝘉𝘢𝘵𝘦𝘳𝘪𝘢 𝘥𝘰 𝘣𝘰𝘵 : ${batteryT}%
⪧ 𝘛𝘦𝘮𝘱𝘰 𝘖𝘕 : ${temporizador(uptime)}
⪧ 𝘙𝘈𝘔 𝘤𝘰𝘯𝘴𝘶𝘮𝘪𝘥𝘢 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
⪧ 𝘚𝘵𝘢𝘵𝘶𝘴 : ᴼᴺ✅
⪧ 𝘏𝘰𝘳𝘢𝘳𝘪𝘰 𝘦 𝘥𝘢𝘵𝘢 : ${hr} , ${tanggal}
⪧ 𝘎𝘳𝘶𝘱𝘰 :  ${groupName}
⪧ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘶𝘴𝘶á𝘳𝘪𝘰𝘴 : ${users} ᴜsᴜᴀ́ʀɪᴏs
⪧ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 : Ainda em desenvolvimento
⪧ 𝘛𝘰𝘵𝘢𝘭 𝘥𝘦 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘦𝘹𝘦𝘤𝘶𝘵𝘢𝘥𝘰𝘴 : ${comandost}

​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​⛤
          🧾️  𝙎𝙪𝙖𝙨 𝙞𝙣𝙛𝙤.  🧾️
       

⪧ 𝘕𝘰𝘮𝘦 : ${pushname}
⪧ 𝘛𝘪𝘱𝘰 𝘥𝘦 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰𝘳 : ${prema}
⪧ 𝘊𝘢𝘴𝘩 : ${checATM}
⪧ 𝘓𝘦𝘷𝘦𝘭 𝘦 𝘟𝘗 : ${useLevel} ,${useXp}
⪧ 𝘙𝘢𝘯𝘬 : ${patt}

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
  𝙁𝙚𝙖𝙩𝙪𝙧𝙚𝙨 𝙙𝙖 𝙥𝙧ó𝙭𝙞𝙢𝙖 𝙖𝙩𝙪𝙖𝙡𝙞𝙯𝙖çã𝙤

⪧ 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘥𝘦 𝘣𝘶𝘴𝘤𝘢 ( *𝘱𝘭𝘢𝘺 , *𝘪𝘨𝘴𝘵𝘢𝘭𝘬 , 𝘦𝘯𝘵𝘳𝘦 𝘰𝘶𝘵𝘳𝘰𝘴) 𝘯ã𝘰 𝘵𝘦𝘳𝘢𝘰 𝘮𝘢𝘪𝘴 𝘣𝘶𝘨 𝘥𝘦 𝘦𝘳𝘳𝘰
⪧ 𝘚𝘰𝘳𝘵𝘦𝘪𝘰𝘴 𝘦 𝘌𝘷𝘦𝘯𝘵𝘰𝘴 𝘥𝘦 𝘱𝘳𝘦𝘮𝘪𝘶𝘮 𝘧𝘳𝘦𝘦


⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤

   𝙀𝙢 𝙩𝙚𝙨𝙩𝙚:
⪧ 𝘳𝘢𝘯𝘥𝘰𝘮
⪧ 𝘨𝘪𝘮𝘢𝘨𝘦
⪧ 𝘱𝘭𝘢𝘺


⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤


    ⚔ 𝙄𝙣𝙛𝙤 ⚔

 
⪧ ${prefix}info
  ➥Informações do bot  
 
⪧ ${prefix}criador
  ➥Número do meu criador  

⪧ ${prefix}ping
  ➥ Mostra meu tempo de resposta 

⪧ ${prefix}infome
  ➥ Mostra algumas informações suas  

⪧ ${prefix}ts
  ➥ Lista os códigos de linguagem  

⪧ ${prefix}bugreport
  ➥ Avise ao dono sobre algum bug  
 
⪧ ${prefix}request
  ➥ Peça algo para ser adicionado ao bot  

⪧ ${prefix}hora
  ➥ Mostra a hora atual

⪧ ${prefix}data
  ➥ Mostra a data de hoje

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤


 🔞 𝙢𝙚𝙣𝙪 +18 🔞

 ⪧ ${prefix}m18
   ➥ Mostra um menu completo para maiores de 18 anos


⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤

      ☕   𝙂𝙧𝙪𝙥𝙤𝙨   ☕

⪧ ${prefix}listadmin
    ➥ Lista de ADM's no grupo  

⪧ ${prefix}fecharg
    ➥ Fecha o grupo
  
⪧ ${prefix}abrirg
    ➥ Abre o grupo
  
⪧ ${prefix}promover
    ➥ Promove a pessoa ao cargo de ADM
 
⪧ ${prefix}rebaixar
    ➥ Rabaixa a pessoa a membro comum
   
⪧ ${prefix}setname
    ➥ Altera o nome do grupo  

⪧ ${prefix}setdesk
    ➥ Altera a descrição do grupo  

⪧ ${prefix}tagall
    ➥ Menciona todos os membros presentes no grupo

⪧ ${prefix}linkgc
    ➥ Manda o link do grupo 

⪧ ${prefix}leave
    ➥ O bot sai do grupo  

⪧ ${prefix}notif
    ➥ Notifica todos os membros  

⪧ ${prefix}welcome
    ➥ Boas vindas automáticas ( ON/OFF)  

⪧ ${prefix}delete (marque a mensagem)
    ➥ Apaga uma mensagem enviada pelo bot  

⪧ ${prefix}antifake
    ➥ Este comando irá banir números fake ao entrarem

⪧ ${prefix}x9
    ➥ Consta alterações no grupo




⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
           
              🔊   𝘼𝙪𝙙𝙞𝙤  🔊


⪧ ${prefix}esquilo (marque um áudio)
     ➥ Efeito de áudio esquilo  ~

⪧ ${prefix}slow (marque um áudio)
     ➥ Efeito de áudio lento  
 
⪧ ${prefix}gemuk (marque um áudio)
     ➥ Efeito de áudio gigante  
 
⪧ ${prefix}bass (marque um áudio)
     ➥ Aumenta o bass de uma música (Bass Bost)

⪧ ${prefix}earrape (marque um áudio)
     ➥ Deixa o áudio estourado  

⪧ ${prefix}fast (marque um áudio)  
     ➥ Efeito de nightcore

⪧ ${prefix}imut (marque um áudio)
     ➥ Efeito imut para áudio

⪧ ${prefix}hode (marque um áudio)
     ➥ Efeito hode para áudio

⪧ ${prefix}trigger (marque um áudio)
    ➥Efeito trigger para áudio

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤


          𝙄𝙢𝙖𝙜𝙚𝙢
 

⪧ ${prefix}hartatahta
    ➥ Imagem no estilo hartatahta
    ➥ Imagem no estilo neon  
 

⪧ ${prefix}matrix (Texto)
   ➥ Imagem no estilo Matrix  

⪧ ${prefix}breakwall (Texto)
   ➥ Imagem no estilo breakwall  

⪧ ${prefix}dropwater (Texto)
   ➥ Imagem no estilo dropwater  

⪧ ${prefix}wolflogo (Texto)
   ➥ Imagem no estilo wolflogo  

⪧ ${prefix}tfire (Texto)
   ➥ Imagem no estilo tfire  

⪧ ${prefix}sandw (Texto)
   ➥ Imagem no estilo sandw  

⪧ ${prefix}firofiro (Texto)
   ➥ Imagem no estilo free fire  

⪧ ${prefix}text3d (Texto)
   ➥ Imagem no estilo text3d  

⪧ ${prefix}text3d2 (Texto)
   ➥ Imagem no estilo text3d2  
 
⪧ ${prefix}phlogo (Texto)
   ➥ Imagem no estilo PornHub  

⪧ ${prefix}bpmek (Texto)
   ➥ Imagem no estilo BlackPmek
  
⪧ ${prefix}folhas (Texto)
   ➥ Imagem com texto entre folhas  

⪧ ${prefix}tlight (Texto)
   ➥ Imagem no estilo tlight  

⪧ ${prefix}sparkling (Texto)
   ➥ Imagem no estilo sparkling
  
⪧ ${prefix}neve (Texto)
   ➥ Imagem com texto na neve
  
⪧ ${prefix}crismes (Texto)
   ➥ Imagem no estilo crismes  

⪧ ${prefix}retro (Texto)
   ➥ Imagem no estilo retro  

⪧ ${prefix}watercolor (Texto)
   ➥ Imagem no estilo watercolor  

⪧ ${prefix}pubglogo (Texto)
   ➥ Imagem no estilo pubg 

⪧${prefix}cslogo (Texto)
   ➥ Imagem no estilo CS
  
⪧ ${prefix}lithgtext (Texto)
   ➥ Imagem no estilo lithgtext
  
⪧${prefix}silktext (Texto)
   ➥ Imagem no estilo silktext
  
⪧ ${prefix}flametext (Texto)
   ➥ Imagem no estilo flametext
  
⪧ ${prefix}crosslogo (Texto)
   ➥ Imagem no estilo crosslogo
  
⪧ ${prefix}glowtext (Texto)
   ➥ Imagem no estilo glowtext
  
⪧ ${prefix}triggered (Imagem)
   ➥ Sticker no estilo triggered
  
⪧ ${prefix}wasted (Imagem)
   ➥ Cria imagem no estilo wasted
  
⪧ ${prefix}sepia (Imagem)
   ➥ Sticker com o efeito sepia

⪧ ${prefix}glass (Imagem)
   ➥ Sticker com o efeito vidro

⪧ ${prefix}rainbow (Imagem)
   ➥ Sticker com o efeito arco-íris

⪧ ${prefix}hartatahta (Texto)
   ➥ Cria imagem estilo hartatahta

⪧ ${prefix}comunism (Imagem)
   ➥ Imagem com o efeito comunismo

⪧ ${prefix}rotate (Imagem)
   ➥ Gira a imagem

⪧ ${prefix}tobecontinue (Imagem)
   ➥ Imagem no estilo "continua"

 ${prefix}thuglife (Imagem)
   ➥ Imagem no estilo thuglife

⪧ ${prefix}zombie
   ➥ Transforma em zombie

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤

           𝙁𝙪𝙣

⪧ ${prefix}simi (Texto)
   ➥ I.A  

⪧ ${prefix}shitpost
   ➥ Imagem aleatória shitpost br  

⪧ ${prefix}nomeninja (Texto)
   ➥ Cria um nome ninja  

⪧ ${prefix}tagme
   ➥ Te menciona  

⪧ ${prefix}dado
   ➥ Sticker de dado aleatório  

⪧ ${prefix}ppt (pedra, papel ou tesoura)
   ➥ Jogo de pedra, papel e tesoura com o bot  

⪧ ${prefix}sn (Texto)
   ➥ Responderá a sua pergunta com sim ou não 

⪧ ${prefix}gado
   ➥ Irá te dizer quanto gado você é  

⪧ ${prefix}chance (Texto)
   ➥ Lhe diz a chance de algo  

⪧ ${prefix}pau
   ➥ Lhe diz o tamanho do seu brinquedo  

⪧ ${prefix}gay
   ➥ Lhe diz o quanto gay você é  

⪧ ${prefix}slot
   ➥ Caça níqueis  

⪧ ${prefix}caracoroa
   ➥ Caracoroa  

⪧ ${prefix}level
  ➥ Mostra seu level atual  

⪧ ${prefix}roleta
  ➥ Roleta russa  

⪧ ${prefix}amongus
  ➥ "Expulsa" alguém da nave  

⪧ ${prefix}ttt
  ➥ Jogo da velha by: Resen  

⪧ ${prefix}omais 
  ➥ Sorteia alguém para "o mais"  

⪧ ${prefix}top5
  ➥ Menciona 5 membros do grupo  

⪧ ${prefix}quando (Texto)
  ➥ Lhe diz quando irá acontecer

⪧ ${prefix}getpic
  ➥ Pega a foto de perfil do mencionad

⪧ ${prefix}nicks
  ➥ Gera nickff aleatórios

⪧ ${prefix}mining
  ➥ Minera XP

⪧ ${prefix}diga (Texto)
  ➥ O bot irá digitar o que você digitou
  
⪧ ${prefix}shipp
  ➥ Shipp entre dois mencionados

⪧ ${prefix}textcat (texto)
  ➥ Imagem de gatinho com texto


⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
                𝘼𝙣𝙞𝙢𝙚


⪧ ${prefix}anime
   ➥ Imagem de anime aleatória  

⪧ ${prefix}loli
   ➥ Imagem de loli aleatória  

⪧ ${prefix}neko
   ➥ Imagem de neko aleatória  

⪧ ${prefix}nezuko
   ➥ Imagem aleatória da Nezuko  

⪧ ${prefix}kemonomimi
   ➥ Neko de kemono aleatória

⪧${prefix}cuddle
   ➥ Imagem de abraço aleatória

⪧ ${prefix}kiss
   ➥ Imagem de beijo aleatória 

⪧ ${prefix}foxg
   ➥ Garota raposa aleatória

⪧ ${prefix}pat
   ➥ Imagem de tapinha aleatória

⪧ ${prefix}poke
   ➥ Imagem de "cutucar" aleatória

⪧ ${prefix}tickle
   ➥ Imagem de cócegas aleatória

⪧ ${prefix}waifu
  ➥ Waifu aleatória

⪧ ${prefix}wallpaper2
  ➥ Wallpaper anime

⪧ ${prefix}baka
  ➥ baka (>_<)

⪧ ${prefix}shinobu
  ➥ Imagem da Shinobu


⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
         𝙏𝙤𝙤𝙡𝙨

⪧ ${prefix}stk
   ➥ Sticker em 512x512  

⪧ ${prefix}st 
   ➥ Sticker em 512x512  

⪧ ${prefix}sticker
   ➥ Sticker padrão 

⪧ ${prefix}sticker nobg
   ➥ Sticker sem fundo 

⪧ ${prefix}toimg
   ➥ Converte sticker em imagem  

⪧ ${prefix}tomp3
   ➥ Converte vídeo em áudio  

⪧ ${prefix}Img (Texto)
   ➥ Busca uma imagem relacionada  
 
⪧ ${prefix}play (título)
   ➥ Baixa o áudio de um vídeo no YouTube  

⪧ ${prefix}tts (língua) (texto)
   ➥ Texto para áudio(voz do google)  

⪧ ${prefix}timer (tempo)
   ➥ Um timer  
 
⪧ ${prefix}wame
  ➥ Mostra seu link wa.me  

⪧ ${prefix}ocr
  ➥ Captura o texto de uma imagem  

⪧ ${prefix}cep (cep)
  ➥ Lista algumas informações do cep  

⪧ ${prefix}contar
  ➥ Conta a quantidade de caracteres  
 
⪧ ${prefix}clima
  ➥ Mostra o clima atual  
 
⪧ ${prefix}togif
  ➥ Converte sticker em gif  

⪧ ${prefix}vapor
  ➥ Cria texto com a fonte vapor

⪧ ${prefix}zalgo
  ➥ Cria texto no estilo zalgo-text
 
⪧ ${prefix}send
   ➥Envia uma mensagem ao número indicado

⪧ ${prefix}tourl
  ➥ Upa imagem no imgbb

⪧ ${prefix}hidetag
  ➥ Menciona todos do grupo com um texto

⪧ ${prefix}tagimg
  ➥ Menciona todos do grupo com uma imagem 

⪧ ${prefix}tagstick
  ➥ Menciona todos do grupo com um sticker
 
⪧ ${prefix}fordward
  ➥ Deixa mensagem como encaminhada

⪧ ${prefix}gerarnick 
  ➥ Cria Nicks
 
⪧ ${prefix}more
  ➥ Adciona "ler mais..." a um texto
 
⪧ ${prefix}take
  ➥ Altera a descrição de um sticker

⪧ ${prefix}fdeface (imagem e texto)
  ➥ Usa sapoha aíkkkk

⪧ ${prefix}bateria
  ➥ Mostra a porcentagem da bateria

⪧ ${prefix}getbio
  ➥ Pega o recado do mencionado

⪧ ${prefix}baiano
  ➥ Menciona meu criador

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤

      📁   𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙧  📁

⪧ Em manutenção...

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
                    
               🐍  𝘼𝙣𝙞𝙢𝙖𝙞𝙨  🐍

⪧ ${prefix}gato
   ➥ Imagem de gato aleatório

⪧ ${prefix}dog
  ➥ Imagem de cachorro aleatório

⪧ ${prefix}gatinho
  ➥ Imagem de gato aleatório

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤
         𝙊𝙬𝙣𝙚𝙧

⪧ ${prefix}clone
   ➥ Copia a foto de perfil do alvo  

⪧ ${prefix}block
  ➥ Bloqueia o alvo  

⪧ ${prefix}clearchat
  ➥ Limpa todos os chats

⪧ ${prefix}unblock
   ➥ Remove o block do alvo  

⪧ ${prefix}blocklist
   ➥ Lista dos usuários bloqueados  

⪧ ${prefix}ban
   ➥ Adciona um usuário a lista de banidos  

⪧ ${prefix}unban
  ➥ Remove o usuário da lista de banidos  

⪧ ${prefix}addprem
   ➥ Adciona um usuário a lista premium
  
⪧ ${prefix}dellprem
   ➥ Remove o usuário da lista premium  

⪧ ${prefix}online
  ➥ Lista todos os usuários online  

⪧ ${prefix}kill2
  ➥ Desliga o bot em pm2

⪧ ${prefix}reiniciar
   ➥ Reinicia o bot em node 

⪧${prefix}shutdown
  ➥ Desliga o bot em node

⪧${prefix}return
   ➥ Usa comandos inexistentes
 
⪧${prefix}exe
  ➥ Usa comandos no terminal

⪧${prefix}upswtext
  ➥ Posta texto no status

⪧ ${prefix}upswvideo
   ➥ Posta vídeos no status

⪧ ${prefix}upswimg
   ➥ Posta imagens no status

⪧ ${prefix}readallchat
  ➥ Marca como lido todos os chats

⪧ ${prefix}fetch
   ➥ Mostra o resultado em json

⪧ ${prefix}bc
   ➥ Envia uma TM

⪧ ${prefix}listban
   ➥ Lista banidos

⪧ ${prefix}listprem
   ➥ Lista premiuns

`
}
exports.help = help

const m18 = (pushname, prefix) => {
    return `    
               𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐
             𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙖𝙗𝙖𝙞𝙭𝙤
              ${pushname}

𝙎𝙚 𝙖𝙡𝙜𝙪𝙢 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙣 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙖𝙧 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙚 𝙤 𝙘𝙧𝙞𝙖𝙙𝙤𝙧:
wa.me/+351927438657

⛤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⏤⛤

⪧ ${prefix}holo
 
⪧ ${prefix}solo

⪧ ${prefix}ero

⪧ ${prefix}spank

⪧ ${prefix}erofeet

⪧ ${prefix}feet

⪧ ${prefix}holoero

⪧ ${prefix}classic

⪧ ${prefix}cum

⪧ ${prefix}eroyuri

⪧ ${prefix}eron

⪧ ${prefix}pwankg

⪧ ${prefix}anal

⪧ ${prefix}lewdkemo

⪧ ${prefix}lewd

⪧ ${prefix}solog

⪧ ${prefix}lewdk
 
⪧ ${prefix}hentai
 
⪧ ${prefix}blowjob

⪧ ${prefix}hololewd

⪧ ${prefix}trap

⪧ ${prefix}les

⪧ ${prefix}futanari

⪧ ${prefix}femdom

⪧ ${prefix}feed

⪧ ${prefix}erok

⪧ ${prefix}feetg

⪧ ${prefix}erokemo

⪧ ${prefix}boobs

⪧ ${prefix}yuri
 
⪧ ${prefix}
 
⪧ ${prefix}pussy

⪧ ${prefix}tits 1, 2, 3... 9


}
exports.m18 = m18

const mz24 = (pushname, prefix) => {
    return `    
      
      Parece que descobriu o menu secreto  ${pushname}

▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
Não é necessário usar o ${prefix}
╔════⇲ 🔰 MENU HONDA 🔰

}
exports.mz24 = mz24
