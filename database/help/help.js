const help = (pushname, prefix, waa_version, batteryT, temporizador, uptime, hr, tanggal, groupName, users, chatss, prema, checATM, useLevel, useXp, requireXp, patt, comandost) => {
    return `
       ๐ฟ ๐ฟ ๐๐๐ก๐ก๐ค ${pushname} ๐ ๐ฟ ๐ฟ
โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
  ๐๐ฃ๐๐ค ๐๐ค ๐๐ค๐ฉ :
        
โชง ๐๐ณ๐ฆ๐ง๐ช๐น :ใ ${prefix} ใ
โชง ๐๐ฐ๐ฎ๐ฆ  : ๐ก๐จ๐ง๐๐ ๐๐๐
โชง ๐๐ฆ๐ณ๐ด๐ช๐ฐ๐ฏ : 1.0 Oficial
โชง ๐๐ ๐ท๐ฆ๐ณ๐ด๐ช๐ฐ๐ฏ : ${waa_version}
โชง ๐๐ข๐ต๐ฆ๐ณ๐ช๐ข ๐ฅ๐ฐ ๐ฃ๐ฐ๐ต : ${batteryT}%
โชง ๐๐ฆ๐ฎ๐ฑ๐ฐ ๐๐ : ${temporizador(uptime)}
โชง ๐๐๐ ๐ค๐ฐ๐ฏ๐ด๐ถ๐ฎ๐ช๐ฅ๐ข : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
โชง ๐๐ต๐ข๐ต๐ถ๐ด : แดผแดบโ
โชง ๐๐ฐ๐ณ๐ข๐ณ๐ช๐ฐ ๐ฆ ๐ฅ๐ข๐ต๐ข : ${hr} , ${tanggal}
โชง ๐๐ณ๐ถ๐ฑ๐ฐ :  ${groupName}
โชง ๐๐ฐ๐ต๐ข๐ญ ๐ฅ๐ฆ ๐ถ๐ด๐ถรก๐ณ๐ช๐ฐ๐ด : ${users} แดsแดแดฬสษชแดs
โชง ๐๐ฐ๐ต๐ข๐ญ ๐ฅ๐ฆ ๐ค๐ฐ๐ฎ๐ข๐ฏ๐ฅ๐ฐ๐ด : Ainda em desenvolvimento
โชง ๐๐ฐ๐ต๐ข๐ญ ๐ฅ๐ฆ ๐ค๐ฐ๐ฎ๐ข๐ฏ๐ฅ๐ฐ๐ด ๐ฆ๐น๐ฆ๐ค๐ถ๐ต๐ข๐ฅ๐ฐ๐ด : ${comandost}

โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโค
          ๐งพ๏ธ  ๐๐ช๐๐จ ๐๐ฃ๐๐ค.  ๐งพ๏ธ
       

โชง ๐๐ฐ๐ฎ๐ฆ : ${pushname}
โชง ๐๐ช๐ฑ๐ฐ ๐ฅ๐ฆ ๐ถ๐ต๐ช๐ญ๐ช๐ป๐ข๐ฅ๐ฐ๐ณ : ${prema}
โชง ๐๐ข๐ด๐ฉ : ${checATM}
โชง ๐๐ฆ๐ท๐ฆ๐ญ ๐ฆ ๐๐ : ${useLevel} ,${useXp}
โชง ๐๐ข๐ฏ๐ฌ : ${patt}

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
  ๐๐๐๐ฉ๐ช๐ง๐๐จ ๐๐ ๐ฅ๐งรณ๐ญ๐๐ข๐ ๐๐ฉ๐ช๐๐ก๐๐ฏ๐รงรฃ๐ค

โชง ๐๐ฐ๐ฎ๐ข๐ฏ๐ฅ๐ฐ๐ด ๐ฅ๐ฆ ๐ฃ๐ถ๐ด๐ค๐ข ( *๐ฑ๐ญ๐ข๐บ , *๐ช๐จ๐ด๐ต๐ข๐ญ๐ฌ , ๐ฆ๐ฏ๐ต๐ณ๐ฆ ๐ฐ๐ถ๐ต๐ณ๐ฐ๐ด) ๐ฏรฃ๐ฐ ๐ต๐ฆ๐ณ๐ข๐ฐ ๐ฎ๐ข๐ช๐ด ๐ฃ๐ถ๐จ ๐ฅ๐ฆ ๐ฆ๐ณ๐ณ๐ฐ
โชง ๐๐ฐ๐ณ๐ต๐ฆ๐ช๐ฐ๐ด ๐ฆ ๐๐ท๐ฆ๐ฏ๐ต๐ฐ๐ด ๐ฅ๐ฆ ๐ฑ๐ณ๐ฆ๐ฎ๐ช๐ถ๐ฎ ๐ง๐ณ๐ฆ๐ฆ


โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค

   ๐๐ข ๐ฉ๐๐จ๐ฉ๐:
โชง ๐ณ๐ข๐ฏ๐ฅ๐ฐ๐ฎ
โชง ๐จ๐ช๐ฎ๐ข๐จ๐ฆ
โชง ๐ฑ๐ญ๐ข๐บ


โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค


    โ ๐๐ฃ๐๐ค โ

 
โชง ${prefix}info
  โฅInformaรงรตes do bot  
 
โชง ${prefix}criador
  โฅNรบmero do meu criador  

โชง ${prefix}ping
  โฅ Mostra meu tempo de resposta 

โชง ${prefix}infome
  โฅ Mostra algumas informaรงรตes suas  

โชง ${prefix}ts
  โฅ Lista os cรณdigos de linguagem  

โชง ${prefix}bugreport
  โฅ Avise ao dono sobre algum bug  
 
โชง ${prefix}request
  โฅ Peรงa algo para ser adicionado ao bot  

โชง ${prefix}hora
  โฅ Mostra a hora atual

โชง ${prefix}data
  โฅ Mostra a data de hoje

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค


 ๐ ๐ข๐๐ฃ๐ช +18 ๐

 โชง ${prefix}m18
   โฅ Mostra um menu completo para maiores de 18 anos


โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค

      โ   ๐๐ง๐ช๐ฅ๐ค๐จ   โ

โชง ${prefix}listadmin
    โฅ Lista de ADM's no grupo  

โชง ${prefix}fecharg
    โฅ Fecha o grupo
  
โชง ${prefix}abrirg
    โฅ Abre o grupo
  
โชง ${prefix}promover
    โฅ Promove a pessoa ao cargo de ADM
 
โชง ${prefix}rebaixar
    โฅ Rabaixa a pessoa a membro comum
   
โชง ${prefix}setname
    โฅ Altera o nome do grupo  

โชง ${prefix}setdesk
    โฅ Altera a descriรงรฃo do grupo  

โชง ${prefix}tagall
    โฅ Menciona todos os membros presentes no grupo

โชง ${prefix}linkgc
    โฅ Manda o link do grupo 

โชง ${prefix}leave
    โฅ O bot sai do grupo  

โชง ${prefix}notif
    โฅ Notifica todos os membros  

โชง ${prefix}welcome
    โฅ Boas vindas automรกticas ( ON/OFF)  

โชง ${prefix}delete (marque a mensagem)
    โฅ Apaga uma mensagem enviada pelo bot  

โชง ${prefix}antifake
    โฅ Este comando irรก banir nรบmeros fake ao entrarem

โชง ${prefix}x9
    โฅ Consta alteraรงรตes no grupo




โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
           
              ๐   ๐ผ๐ช๐๐๐ค  ๐


โชง ${prefix}esquilo (marque um รกudio)
     โฅ Efeito de รกudio esquilo  ~

โชง ${prefix}slow (marque um รกudio)
     โฅ Efeito de รกudio lento  
 
โชง ${prefix}gemuk (marque um รกudio)
     โฅ Efeito de รกudio gigante  
 
โชง ${prefix}bass (marque um รกudio)
     โฅ Aumenta o bass de uma mรบsica (Bass Bost)

โชง ${prefix}earrape (marque um รกudio)
     โฅ Deixa o รกudio estourado  

โชง ${prefix}fast (marque um รกudio)  
     โฅ Efeito de nightcore

โชง ${prefix}imut (marque um รกudio)
     โฅ Efeito imut para รกudio

โชง ${prefix}hode (marque um รกudio)
     โฅ Efeito hode para รกudio

โชง ${prefix}trigger (marque um รกudio)
    โฅEfeito trigger para รกudio

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค


          ๐๐ข๐๐๐๐ข
 

โชง ${prefix}hartatahta
    โฅ Imagem no estilo hartatahta
    โฅ Imagem no estilo neon  
 

โชง ${prefix}matrix (Texto)
   โฅ Imagem no estilo Matrix  

โชง ${prefix}breakwall (Texto)
   โฅ Imagem no estilo breakwall  

โชง ${prefix}dropwater (Texto)
   โฅ Imagem no estilo dropwater  

โชง ${prefix}wolflogo (Texto)
   โฅ Imagem no estilo wolflogo  

โชง ${prefix}tfire (Texto)
   โฅ Imagem no estilo tfire  

โชง ${prefix}sandw (Texto)
   โฅ Imagem no estilo sandw  

โชง ${prefix}firofiro (Texto)
   โฅ Imagem no estilo free fire  

โชง ${prefix}text3d (Texto)
   โฅ Imagem no estilo text3d  

โชง ${prefix}text3d2 (Texto)
   โฅ Imagem no estilo text3d2  
 
โชง ${prefix}phlogo (Texto)
   โฅ Imagem no estilo PornHub  

โชง ${prefix}bpmek (Texto)
   โฅ Imagem no estilo BlackPmek
  
โชง ${prefix}folhas (Texto)
   โฅ Imagem com texto entre folhas  

โชง ${prefix}tlight (Texto)
   โฅ Imagem no estilo tlight  

โชง ${prefix}sparkling (Texto)
   โฅ Imagem no estilo sparkling
  
โชง ${prefix}neve (Texto)
   โฅ Imagem com texto na neve
  
โชง ${prefix}crismes (Texto)
   โฅ Imagem no estilo crismes  

โชง ${prefix}retro (Texto)
   โฅ Imagem no estilo retro  

โชง ${prefix}watercolor (Texto)
   โฅ Imagem no estilo watercolor  

โชง ${prefix}pubglogo (Texto)
   โฅ Imagem no estilo pubg 

โชง${prefix}cslogo (Texto)
   โฅ Imagem no estilo CS
  
โชง ${prefix}lithgtext (Texto)
   โฅ Imagem no estilo lithgtext
  
โชง${prefix}silktext (Texto)
   โฅ Imagem no estilo silktext
  
โชง ${prefix}flametext (Texto)
   โฅ Imagem no estilo flametext
  
โชง ${prefix}crosslogo (Texto)
   โฅ Imagem no estilo crosslogo
  
โชง ${prefix}glowtext (Texto)
   โฅ Imagem no estilo glowtext
  
โชง ${prefix}triggered (Imagem)
   โฅ Sticker no estilo triggered
  
โชง ${prefix}wasted (Imagem)
   โฅ Cria imagem no estilo wasted
  
โชง ${prefix}sepia (Imagem)
   โฅ Sticker com o efeito sepia

โชง ${prefix}glass (Imagem)
   โฅ Sticker com o efeito vidro

โชง ${prefix}rainbow (Imagem)
   โฅ Sticker com o efeito arco-รญris

โชง ${prefix}hartatahta (Texto)
   โฅ Cria imagem estilo hartatahta

โชง ${prefix}comunism (Imagem)
   โฅ Imagem com o efeito comunismo

โชง ${prefix}rotate (Imagem)
   โฅ Gira a imagem

โชง ${prefix}tobecontinue (Imagem)
   โฅ Imagem no estilo "continua"

 ${prefix}thuglife (Imagem)
   โฅ Imagem no estilo thuglife

โชง ${prefix}zombie
   โฅ Transforma em zombie

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค

           ๐๐ช๐ฃ

โชง ${prefix}simi (Texto)
   โฅ I.A  

โชง ${prefix}shitpost
   โฅ Imagem aleatรณria shitpost br  

โชง ${prefix}nomeninja (Texto)
   โฅ Cria um nome ninja  

โชง ${prefix}tagme
   โฅ Te menciona  

โชง ${prefix}dado
   โฅ Sticker de dado aleatรณrio  

โชง ${prefix}ppt (pedra, papel ou tesoura)
   โฅ Jogo de pedra, papel e tesoura com o bot  

โชง ${prefix}sn (Texto)
   โฅ Responderรก a sua pergunta com sim ou nรฃo 

โชง ${prefix}gado
   โฅ Irรก te dizer quanto gado vocรช รฉ  

โชง ${prefix}chance (Texto)
   โฅ Lhe diz a chance de algo  

โชง ${prefix}pau
   โฅ Lhe diz o tamanho do seu brinquedo  

โชง ${prefix}gay
   โฅ Lhe diz o quanto gay vocรช รฉ  

โชง ${prefix}slot
   โฅ Caรงa nรญqueis  

โชง ${prefix}caracoroa
   โฅ Caracoroa  

โชง ${prefix}level
  โฅ Mostra seu level atual  

โชง ${prefix}roleta
  โฅ Roleta russa  

โชง ${prefix}amongus
  โฅ "Expulsa" alguรฉm da nave  

โชง ${prefix}ttt
  โฅ Jogo da velha by: Resen  

โชง ${prefix}omais 
  โฅ Sorteia alguรฉm para "o mais"  

โชง ${prefix}top5
  โฅ Menciona 5 membros do grupo  

โชง ${prefix}quando (Texto)
  โฅ Lhe diz quando irรก acontecer

โชง ${prefix}getpic
  โฅ Pega a foto de perfil do mencionad

โชง ${prefix}nicks
  โฅ Gera nickff aleatรณrios

โชง ${prefix}mining
  โฅ Minera XP

โชง ${prefix}diga (Texto)
  โฅ O bot irรก digitar o que vocรช digitou
  
โชง ${prefix}shipp
  โฅ Shipp entre dois mencionados

โชง ${prefix}textcat (texto)
  โฅ Imagem de gatinho com texto


โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
                ๐ผ๐ฃ๐๐ข๐


โชง ${prefix}anime
   โฅ Imagem de anime aleatรณria  

โชง ${prefix}loli
   โฅ Imagem de loli aleatรณria  

โชง ${prefix}neko
   โฅ Imagem de neko aleatรณria  

โชง ${prefix}nezuko
   โฅ Imagem aleatรณria da Nezuko  

โชง ${prefix}kemonomimi
   โฅ Neko de kemono aleatรณria

โชง${prefix}cuddle
   โฅ Imagem de abraรงo aleatรณria

โชง ${prefix}kiss
   โฅ Imagem de beijo aleatรณria 

โชง ${prefix}foxg
   โฅ Garota raposa aleatรณria

โชง ${prefix}pat
   โฅ Imagem de tapinha aleatรณria

โชง ${prefix}poke
   โฅ Imagem de "cutucar" aleatรณria

โชง ${prefix}tickle
   โฅ Imagem de cรณcegas aleatรณria

โชง ${prefix}waifu
  โฅ Waifu aleatรณria

โชง ${prefix}wallpaper2
  โฅ Wallpaper anime

โชง ${prefix}baka
  โฅ baka (>_<)

โชง ${prefix}shinobu
  โฅ Imagem da Shinobu


โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
         ๐๐ค๐ค๐ก๐จ

โชง ${prefix}stk
   โฅ Sticker em 512x512  

โชง ${prefix}st 
   โฅ Sticker em 512x512  

โชง ${prefix}sticker
   โฅ Sticker padrรฃo 

โชง ${prefix}sticker nobg
   โฅ Sticker sem fundo 

โชง ${prefix}toimg
   โฅ Converte sticker em imagem  

โชง ${prefix}tomp3
   โฅ Converte vรญdeo em รกudio  

โชง ${prefix}Img (Texto)
   โฅ Busca uma imagem relacionada  
 
โชง ${prefix}play (tรญtulo)
   โฅ Baixa o รกudio de um vรญdeo no YouTube  

โชง ${prefix}tts (lรญngua) (texto)
   โฅ Texto para รกudio(voz do google)  

โชง ${prefix}timer (tempo)
   โฅ Um timer  
 
โชง ${prefix}wame
  โฅ Mostra seu link wa.me  

โชง ${prefix}ocr
  โฅ Captura o texto de uma imagem  

โชง ${prefix}cep (cep)
  โฅ Lista algumas informaรงรตes do cep  

โชง ${prefix}contar
  โฅ Conta a quantidade de caracteres  
 
โชง ${prefix}clima
  โฅ Mostra o clima atual  
 
โชง ${prefix}togif
  โฅ Converte sticker em gif  

โชง ${prefix}vapor
  โฅ Cria texto com a fonte vapor

โชง ${prefix}zalgo
  โฅ Cria texto no estilo zalgo-text
 
โชง ${prefix}send
   โฅEnvia uma mensagem ao nรบmero indicado

โชง ${prefix}tourl
  โฅ Upa imagem no imgbb

โชง ${prefix}hidetag
  โฅ Menciona todos do grupo com um texto

โชง ${prefix}tagimg
  โฅ Menciona todos do grupo com uma imagem 

โชง ${prefix}tagstick
  โฅ Menciona todos do grupo com um sticker
 
โชง ${prefix}fordward
  โฅ Deixa mensagem como encaminhada

โชง ${prefix}gerarnick 
  โฅ Cria Nicks
 
โชง ${prefix}more
  โฅ Adciona "ler mais..." a um texto
 
โชง ${prefix}take
  โฅ Altera a descriรงรฃo de um sticker

โชง ${prefix}fdeface (imagem e texto)
  โฅ Usa sapoha aรญkkkk

โชง ${prefix}bateria
  โฅ Mostra a porcentagem da bateria

โชง ${prefix}getbio
  โฅ Pega o recado do mencionado

โชง ${prefix}baiano
  โฅ Menciona meu criador

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค

      ๐   ๐ฟ๐ค๐ฌ๐ฃ๐ก๐ค๐๐๐๐ง  ๐

โชง Em manutenรงรฃo...

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
                    
               ๐  ๐ผ๐ฃ๐๐ข๐๐๐จ  ๐

โชง ${prefix}gato
   โฅ Imagem de gato aleatรณrio

โชง ${prefix}dog
  โฅ Imagem de cachorro aleatรณrio

โชง ${prefix}gatinho
  โฅ Imagem de gato aleatรณrio

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค
         ๐๐ฌ๐ฃ๐๐ง

โชง ${prefix}clone
   โฅ Copia a foto de perfil do alvo  

โชง ${prefix}block
  โฅ Bloqueia o alvo  

โชง ${prefix}clearchat
  โฅ Limpa todos os chats

โชง ${prefix}unblock
   โฅ Remove o block do alvo  

โชง ${prefix}blocklist
   โฅ Lista dos usuรกrios bloqueados  

โชง ${prefix}ban
   โฅ Adciona um usuรกrio a lista de banidos  

โชง ${prefix}unban
  โฅ Remove o usuรกrio da lista de banidos  

โชง ${prefix}addprem
   โฅ Adciona um usuรกrio a lista premium
  
โชง ${prefix}dellprem
   โฅ Remove o usuรกrio da lista premium  

โชง ${prefix}online
  โฅ Lista todos os usuรกrios online  

โชง ${prefix}kill2
  โฅ Desliga o bot em pm2

โชง ${prefix}reiniciar
   โฅ Reinicia o bot em node 

โชง${prefix}shutdown
  โฅ Desliga o bot em node

โชง${prefix}return
   โฅ Usa comandos inexistentes
 
โชง${prefix}exe
  โฅ Usa comandos no terminal

โชง${prefix}upswtext
  โฅ Posta texto no status

โชง ${prefix}upswvideo
   โฅ Posta vรญdeos no status

โชง ${prefix}upswimg
   โฅ Posta imagens no status

โชง ${prefix}readallchat
  โฅ Marca como lido todos os chats

โชง ${prefix}fetch
   โฅ Mostra o resultado em json

โชง ${prefix}bc
   โฅ Envia uma TM

โชง ${prefix}listban
   โฅ Lista banidos

โชง ${prefix}listprem
   โฅ Lista premiuns

`
}
exports.help = help

const m18 = (pushname, prefix) => {
    return `    
               ๐๐๐๐ ๐๐๐๐
             ๐พ๐ค๐ข๐๐ฃ๐๐ค๐จ ๐๐๐๐๐ญ๐ค
              ${pushname}

๐๐ ๐๐ก๐๐ช๐ข ๐๐ค๐ข๐๐ฃ๐๐ค ๐ฃ ๐๐ช๐ฃ๐๐๐ค๐ฃ๐๐ง ๐๐ค๐ฃ๐ฉ๐๐๐ฉ๐ ๐ค ๐๐ง๐๐๐๐ค๐ง:
wa.me/+351927438657

โคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโคโค

โชง ${prefix}holo
 
โชง ${prefix}solo

โชง ${prefix}ero

โชง ${prefix}spank

โชง ${prefix}erofeet

โชง ${prefix}feet

โชง ${prefix}holoero

โชง ${prefix}classic

โชง ${prefix}cum

โชง ${prefix}eroyuri

โชง ${prefix}eron

โชง ${prefix}pwankg

โชง ${prefix}anal

โชง ${prefix}lewdkemo

โชง ${prefix}lewd

โชง ${prefix}solog

โชง ${prefix}lewdk
 
โชง ${prefix}hentai
 
โชง ${prefix}blowjob

โชง ${prefix}hololewd

โชง ${prefix}trap

โชง ${prefix}les

โชง ${prefix}futanari

โชง ${prefix}femdom

โชง ${prefix}feed

โชง ${prefix}erok

โชง ${prefix}feetg

โชง ${prefix}erokemo

โชง ${prefix}boobs

โชง ${prefix}yuri
 
โชง ${prefix}
 
โชง ${prefix}pussy

โชง ${prefix}tits 1, 2, 3... 9


}
exports.m18 = m18

const mz24 = (pushname, prefix) => {
    return `    
      
      Parece que descobriu o menu secreto  ${pushname}

โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
Nรฃo รฉ necessรกrio usar o ${prefix}
โโโโโโฒ ๐ฐ MENU HONDA ๐ฐ

}
exports.mz24 = mz24
