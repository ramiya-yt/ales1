/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX බටන් බලන්නත ආවෙ 😂 මේකත් උස්සපන් චීත්තයක් නෙ උබ තමා අපෙ එව්වා උස්සන්නෙ
*/

const Amazone = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const Language = require('../language');
const Lang = Language.getString('amazone');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

Amazone.addCommand({pattern: 'menu', fromMe: true, desc: Lang.MENU}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '📑මූලික උදව් | 👩‍🦰HELP-LIST', description: "⚙Bot පිළිබද අවබෝධයක් සහ මූලික උදව්.\n\nhi \nj hhh \n \n hi", rowId:"rowid1"},
        {title: '📑සම්පූර්ණ විධාන ලැයිස්තුව | 👩‍🦰ALL-COMMANDS', description: "⚙සම්පූර්ණ විධාන ලැයිස්තුව.", rowId:"rowid2"},
        {title: '📑Logo සැකසීම | 👩‍🦰LOGO-LIST', description: "⚙Logo සැකසීමෙ විධාන.\n\n\n*◁====👩‍🦰Amazone Alexa Effect Image ===▷*\n\n*⚙විධානය* : .galaxysprout\n*💬විස්තරය* : එය ඔබේ අකරු galaxysproutලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .2sand\n*💬විස්තරය* : එය ඔබේ අකරු 2sand ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .lightgerm\n*💬විස්තරය* : එය ඔබේ අකරු lightgerm ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .yasuo\n*💬විස්තරය* : එය ඔබේ අකරු yasuo ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .writegalaxy\n*💬විස්තරය* : එය ඔබේ අකරු writegalaxy ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .firedragon\*💬විස්තරය* : එය ඔබේ අකරු firedragon ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .viettel\n*💬විස්තරය* : එය ඔබේ අකරු viettel ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .angelwing\n*💬විස්තරය* : එය ඔබේ අකරු angelwing ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .galaxystyle\n*💬විස්තරය* : එය ඔබේ අකරු galaxystyle ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .galaxyangel\n*💬විස්තරය* : එය ඔබේ අකරු galaxyangel ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .halloween\n*💬විස්තරය* : එය ඔබේ අකරු halloween ලෙස පරිවර්තනය කරයි.\n\n*⚙විධානය* : .nxninja\n*💬විස්තරය* : එය ඔබෙ අකුරු Ninja logo බවට පරිවර්තනය කරයි.\n\n*⚙විධානය* : .nwolf\n*💬විස්තරය* :එය ඔබෙ අකුරු wolf logo බවට පරිවර්තනය කරයි\n\n *⚙විධානය* : .nxwolf\n*💬විස්තරය* :එය ඔබෙ අකුරු දම් ලාට Wolf ලාංඡනයක්  බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .marvel\n*💬විස්තරය* :එය ඔබෙ අකුරු Marvel  logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .dgold\n*💬විස්තරය* :එය ඔබෙ අකුරු රත්තරං පැහැ අකුරු සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .glossy\n*💬විස්තරය* :එය ඔබෙ අකුරු glossy logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .njoker\n*💬විස්තරය* :එය ඔබෙ අකුරු joker logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .horror\n*💬විස්තරය* :එය ඔබෙ අකුරු Horror ඡායාරූප  බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .blood\n*💬විස්තරය*: එය ඔබෙ අකුරු ලේ සහිත ඡායාරූපයක් බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .toxic\n*💬විස්තරය* :එය ඔබෙ අකුරු විෂ සහිත අකුරු  බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .space3d\n*💬විස්තරය* :එය ඔබෙ අකුරු Space LOGO බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .luxury\n*💬විස්තරය* :එය ඔබෙ අකුරු luxury gold බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .xmas\n*💬විස්තරය* :එය ඔබෙ අකුරු නත්තල් සහිත ඡායාරූප බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .metald\n*💬විස්තරය* :එය ඔබෙ අකුරු Metak Dark logo බවට පරිවර්තනය කරයි\n\n*⚙විධානය* : .sand\n*💬විස්තරය* : මුහුදු වෙරළක අකුරු සාදයි.\n\n*⚙විධානය:*  .bcwall\n*💬විස්තරය:*  එය වෝල් ආර්ට් එකක් ලෙස අකුරු පරිවර්තනය කරයි\n\n*⚙විධානය:*  .ninjalogo\n*💬විස්තරය:* එය Ninja ආකාරයේ Logo සාදයි\n\n*⚙විධානය:*  .buttonyt\n*💬විස්තරය:* මෙය Youtube Golden බටනයට ඔබේ අකුරු යොදයි.\n\n*⚙විධානය:*  .glitch\n*💬විස්තරය:* glitch අකාරයට අකුරු ඡායාරූප කරයි\n\n*⚙විධානය:* .freefire\n*💬විස්තරය:* freefire gaming ලෝගෝ සාදයි\n\n*⚙විධානය:*  .light\n*💬විස්තරය:* අකුරු Neon text ලෙස පරිවර්තනය කරයි\n\n*⚙විධානය:*  .cslogo\n*💬විස්තරය:* gaming ලෝගෝ සාදයි\n\n*⚙විධානය:*  .nlogo\n*💬විස්තරය:*  ඔබෙ අකුරු ලෝගෝ එකක් ලෙස සකසයි\n\n*⚙විධානය:*  .s3d\n*💬විස්තරය:* අකුරු 3D Box ලෙස සකසයි\n\n*⚙විධානය:*  .blackpink\*💬විස්තරය:* ඔබෙ අකුරු blackpink ලෝගෝ ලෙස සකසයි.\n\n*⚙විධානය:* .pornhub\n*💬විස්තරය:* ඔබේ අකුරු Pornhub Logo ලෙස සකසයි\n\n*⚙විධානය:* .neolight\n*💬විස්තරය:* .එය අකුරු Neoncube එකක් තුල සකසයි\n\n*⚙විධානය:*  .blood\n*💬විස්තරය:* අකුරු ලේ සහිත ඡායාරූප ලෙස සකසයි\n\n*⚙විධානය:* .3dtext\n*💬විස්තරය:* අකුරු 3D ලෙස සකසයි\n\n*⚙විධානය:* .nsky\n*💬විස්තරය:* අකුරු අහසේ ඇදි ලෙස ඡායාරූප බවට පත් කරයි.\n\n*⚙විධානය:* .nleaves\n*💬විස්තරය:* අකුරු දීප්තිමත් තණකොළ මත ලියයි.\n\n*⚙විධානය:* .nglow\n*💬විස්තරය:* Neon ලෙස සකසයි\n\n*⚙විධානය:* .nfire\n*💬විස්තරය:* එය දීප්තිමත් ලෙස අකුරු ඡායාරූප කරයි.\n\n*⚙විධානය:*  .ptext\n*💬විස්තරය* : එය අකුරු Video බවට හරවයි\n\n*⚙විධානය* : .colortext\*💬විස්තරය* : එය අකුරු දේදුන්නක වර්ණ ලෙස video බවට හරවයි\n\n*⚙විධානය* : .vtext\n*💬විස්තරය* : එය අකුරු video බවට හරවයි.\n\n", rowId:"rowid3"},
        {title: '📑මාධ්‍ය මෙවලම් | 👩‍🦰MEDIA-LIST', description: "⚙එය මාධ්‍ය මෙවලම් 25+ ඇතුලත් විධාන ලැයිස්තුව.\n\n\n*◁===👩‍🦰AMAZONE ALEXA MEDIA PANEL===*\n\n💻Usage: *.mp4enhance*\nℹ️Desc: \n🇱🇰 Enhance video’s quality.\n\n💻Usage: *.interp*\nℹ️Desc: \n🇱🇰 Increases the FPS of the video.\n\n💻Usage: *.mp4slowmo*\nℹ️Desc: \n🇱🇰 Applies true-slowmo to non-slow motion videos.\n\n💻Usage: *.x4mp4*\nℹ️Desc: \n🇱🇰 Reduce video’s quality by 75%.\n\n💻Usage: *.x2mp4*\nℹ️Desc: \n🇱🇰 Reduce video’s quality by 50%.\n\n💻Usage: *.gif*\nℹ️Desc: \n🇱🇰 Converts video to gif.\n\n💻Usage: *.agif*\nℹ️Desc: \n🇱🇰 Converts video to voiced gif.\n\n💻Usage: *.mp4blur*\nℹ️Desc: \n🇱🇰 Blurs the background of the video.\n\n💻Usage: *.mp4stab*\nℹ️Desc: \n🇱🇰 Decreases the vibration of the video.\n\n💻Usage: *.mp4rainbow*\nℹ️Desc: \n🇱🇰 Applies a rainbow effect to video.\n\n💻Usage: *.mp4color*\nℹ️Desc: \n🇱🇰 Makes the colors of the video more vivid and beautiful.\n\n💻Usage: *.mp4art*\nℹ️Desc: \n🇱🇰 Applies a art effect to the video.\n\n💻Usage: *.mp4negative*\nℹ️Desc: \n🇱🇰 Applies a negative color filter to the video.\n\n💻Usage: *.mp4vintage*\nℹ️Desc: \n🇱🇰 Applies a nostalgic effect to video.\n\n💻Usage: *.mp4bw*\nℹ️Desc: \n🇱🇰 Applies a monochrome effect to video.\n\n💻Usage: *.mp4reverse*\nℹ️Desc: \n🇱🇰 Plays the video in reverse.\n\n💻Usage: *.mp4edge*\nℹ️Desc:  \n🇱🇰 Applies a edge effect to the video.\n\n💻Usage: *.mp4image*\nℹ️Desc:  \n🇱🇰 Converts photo to 5 sec video.\n\n💻Usage: *.spectrum*\nℹ️Desc:  \n🇱🇰 Converts the spectrum of sound into video.\n\n💻Usage: *.waves*\nℹ️Desc:  \n🇱🇰 Converts the wave range of sound to video.\n\n💻Usage: *.frequency*\nℹ️Desc:  \n🇱🇰 Converts the frequency range of sound to video.\n\n💻Usage: *.avec*\nℹ️Desc:  \n🇱🇰 Converts the histogram of sound to video.\n\n💻Usage: *.volumeaudio*\nℹ️Desc:  \n🇱🇰 Converts the decibel value of the sound into video.\n\n💻Usage: *.cqtaudio*\nℹ️Desc:\n🇱🇰 Converts the CQT value of audio to video.\n\n💻Usage: *.mp3eq*\nℹ️Desc:  \n🇱🇰 Adjusts the sound to a crystal clear level.\n\n💻Usage: *.mp3crusher*\nℹ️Desc:  \n🇱🇰 Distorts the sound, makes ridiculous.\n\n💻Usage: *.mp3reverse*\nℹ️Desc:  \n🇱🇰 Plays the sound in reverse.\n\n💻Usage: *.mp3pitch*\nℹ️Desc:  \n🇱🇰 Makes the sound thinner and faster.\n\n💻Usage *.mp3low*\nℹ️Desc:  \n🇱🇰 Makes the sound deep and slower.\n\n💻Usage: *.x2mp3*\nℹ️Desc:  \n🇱🇰 Makes the sound twice as fast.\n\n💻Usage: *.mp3volume*\nℹ️Desc:  \n🇱🇰 Increase sound level so much.\n\n💻Usage: *.bwimage*\nℹ️Desc:  \n🇱🇰 Applies a monochrome effect to image.\n\n💻Usage: *.vintageimage*\nℹ️Desc:  \n🇱🇰 Applies a vinatge effect to video.\n\n💻Usage: *.edgeimage*\nℹ️Desc:  \n🇱🇰 Applies a edge effect to the photo.\n\n💻Usage: *.enhanceimage*\nℹ️Desc:  \n🇱🇰 Makes the photo clearer.\n\n💻Usage: *.blurimage*\nℹ️Desc:  \n🇱🇰 Blurs the background of the photo.\n\n💻Usage: *.grenimage*\nℹ️Desc:  \n🇱🇰 Applies grain effect to the photo.\n\n💻Usage: *.negativeimage*\nℹ️Desc:  \n🇱🇰 Applies a negative color filter to the photo.\n\n💻Usage: *.rainbowimage*\nℹ️Desc:  \n🇱🇰 Applies rainbow effect to the photo.\n\n💻Usage: *.colorimage*\nℹ️Desc:  \n🇱🇰 It makes the colors of the photo more vivid and attractive.\n\n💻Usage: *.artimage*\nℹ️Desc:  \n🇱🇰 Applies a art effect to the photo.", rowId:"rowid4"},
        {title: '📑බාගත කිරීම් | 👩‍🦰DOWNLOAD-LIST', description: "⚙එය මාධ්‍ය බාගත කිරීම් ඇතුලත් විධාන ලැයිස්තුව.", rowId:"rowid5"},
        {title: '📑පරිපාලක විධාන | 👩‍🦰ADMIN-LIST', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.\n\n\n*◁=====👩‍🦰Queen Alexa Admin Panel====▷*\n\n*🧞‍♀️විධානය* : .ban\n*💠විස්තරය* : ```කණ්ඩායමේ කෙනෙකු ඉවත් කරන්න. පණිවිඩය mention දෙන්න හෝ විධානය භාවිතා කිරීමට පුද්ගලයකු ටැග් කරන්න```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .mute\n*💠විස්තරය* : ```කණ්ඩායමේ chat නිශ්ශබ්ද කරන්න. පණිවිඩය යැවිය හැක්කේ admin පමණි```\n\n*🧞‍♀️විධානය* : .unmute\n*💠විස්තරය* : ```කණ්ඩායම් chat නිශ්ශබ්ද කිරීම ඉවත් කිරීම. ඕනෑම කෙනෙකුට පණිවිඩයක් යැවිය හැකිය.```\n\n*🌀විධානය* : .clear\n*💠විස්තරය* : ```Chat මකා දමයි.```\n\n*🧞‍♀️විධානය* : .promote\n*💠විස්තරය* : ```සාමාජිකයන් admin කරයි.```\n\n*🧞‍♀️විධානය* : .demote\n*💠විස්තරය* : ```Admin සාමාජිකයකු බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .plugin\n*💠විස්තරය* : ```plugin ස්ථාපනය කරන්න.```\n\n*🧞‍♀️විධානය* : .remove\n*💠විස්තරය* : ```plugin ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .invite\n*💠විස්තරය* : ```කණ්ඩායමේ ආරාධනා ලින්කුව සපයයි.```\n\n*🧞‍♀️විධානය* : .afk\n*💠විස්තරය* : ```එය bot AFK බවට පත් කරයි.```\n\n*🧞‍♀️විධානය* : .restart\n*💠විස්තරය* : ```Restart the bot.```\n\n*🧞‍♀️විධානය* : .shutdown\n*💠විස්තරය* : ```Shutdown the Bot.```\n\n*🧞‍♀️විධානය* : .setvar\n*💠විස්තරය* : ```Heroku config vars සකසන්න.```\n\n*🧞‍♀️විධානය* : .getvar\n*💠විස්තරය* : ```Heroku config var ලබා ගන්න```\n\n*🧞‍♀️විධානය* : .speedtest\n*💠විස්තරය* : ``` Download කිරීම සහ Upload කිරීමේ වේගය මැනීම.```\n\n*🧞‍♀️විධානය* : .filter\n*💠විස්තරය* : ```එය filters එක් කරයි. කවුරුහරි ඔබේ filter word ලියන්නේ නම්, එය පිළිතුර යවයි. ඔබ .filter ලිවුවහොත් එය ඔබගේ filters ලැයිස්තුව පෙන්වනු ඇත.```\n\n*🧞‍♀️විධානය* :  .stop\n*💠විස්තරය* : ``` ඔබ කලින් එකතු කළ filters නවත්වයි.```\n\n*🧞‍♀️විධානය* :  .welcome\n*💠විස්තරය* : ``` එය පිළිගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .goodbye\n*💠විස්තරය* : ```සමුගැනීමේ පණිවිඩය සකසයි.```\n\n*🧞‍♀️විධානය* : .kickme\n*💠විස්තරය* : ```එය විධානය ලබා දී ඇති කණ්ඩායමෙන් bot ඉවත් කරයි.```\n\n*🧞‍♀️විධානය* : .pp\n*💠විස්තරය* : ```ඔබ mention සපයන ඡායාරූපය, bot profile ඡායාරූපය කරයි.```\n\n*🧞‍♀️විධානය* : .block\n*💠විස්තරය* : ```Block tagged user.```\n\n*🧞‍♀️විධානය* : .unblock\n*💠විස්තරය* : ```Unblock tagged user.```\n\n*🧞‍♀️විධානය* : .jid\n*💠විස්තරය* : ```පරිශීලකයාගේ JID ලබා දෙයි.```\n\n*🧞‍♀️විධානය* : .tagall\n*💠විස්තරය* : ```කණ්ඩායමේ සිටින සියල්ලන් ටැග් කරයි.```\n\n*🧞‍♀️විධානය* : .update\n*💠විස්තරය* : ```Updates පරීක්ෂා කරයි.```\n\n*🧞‍♀️විධානය* : .update now\n*💠විස්තරය* : ```එය බොට් update කරයි.```\n\n*🧞‍♀️විධානය* : .dyno\n*💠විස්තරය* : ```Showing heroku dyno hours.```\n\n*🧞‍♀️විධානය* : .add\n*💠විස්තරය* : ```කණ්ඩායමට යමෙකු එකතු කරයි```\n\n*🧞‍♀️විධානය* : .sysd\n*💠විස්තරය* : ```පද්ධති සංඛ්යාලේඛන පෙන්වීම```\n\n*🌀විධානය* : .rename\n*💠විස්තරය* : සමූහයෙ නම වෙනස් කරයි.\n\n*🌀විධානය* : .safemode on -off\n*💠විස්තරය* : අර queen මේ queen ඔයාගෙ ගෲප් එක ස්පෑම් ගහන්න හැදුවොත් Auto Remove.", rowId:"rowid6"},
        {title: '📑ඇනිම් ලැයිස්තුව | 👩‍🦰ANIME-LIST', description: "⚙Ramdom ඇනිම් ලැයිස්තුව.\n\n\n*👩‍🦰Amazone Alexa Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷", rowId:"👩‍🦰ANIME-LIST"},
        {title: '📑මීම් ලැයිස්තුව   | 👩‍🦰MEME-LIST', description: "⚙මීම් සැකසීමෙ ලැයිස්තුව.\n\n\n*╔═════◉ᴀᴍᴀᴢᴏɴᴇ◉═════╗*\n           👩‍🦰ǫᴜᴇᴇɴ ᴀᴍᴀᴢᴏɴᴇ 🪐\n*❖═මීම් ලැයිස්තුව ᴍᴇᴍᴇ ᴘᴀᴄᴋ═❖*\n\n*💠.yasai       ❴your text❵*\n*💠.uddika    ❴your text❵*\n*💠.aah          ❴your text❵*\n*💠.sir            ❴your text❵*\n*💠.my3         ❴your text❵*\n*💠.fuck         ❴your text❵*\n*💠.hii             ❴your text❵*\n*💠.asai          ❴your text❵*\n*💠.hapoi       ❴your text❵*\n*💠.anura       ❴your text❵*\n*💠.gemba       ❴your text❵*\n*💠.wow       ❴your text❵*\n*💠.hapo       ❴your text❵*\n*💠.babah       ❴your text❵*\n*💠.mcn       ❴your text❵*\n*💠.nah       ❴your text❵*\n*╚═══❖══▣══▣══❖═══╝*\n\n*▷Template Credit: එ.මි.ස ¡v*", rowId:"rowid8"},
        {title: '📑Ttp ලැයිස්තුව   | 👩‍🦰TTP-LIST', description: "⚙TTP ලැයිස්තුව.", rowId:"rowid9"}
        {title: '📑පොත් ලැයිස්තුව   | 👩‍🦰BOOK-LIST', description: "පොත් ලැයිස්තුව.\n\n\n*◁=====👩‍🦰Amazone සිංහල නවකතා ලැයිස්තුව====▷*\n\n🔎  .1book\n📚රාවණා\n\n🔎 .2book\n📚ශ්‍රී රාවණා පුවත\n\n🔎 .3book\n📚මළවුන්ගෙන් අවුරුදු දා\n\n🔎 .4book\n📚මළගිය ඇත්තෝ\n\n🔎 .5book\n📚ගග අද්දර\n\n🔎 .6book\n📚මීනා\n\n🔎 .7book\n📚පිච්ච මල\n\n🔎 .8book\n📚අම්මා\n\n🔎 .9book\n📚තෙරීසා\n\n🔎 .10book\n📚සෙංකොට්ටං\n\n🔎 .11book\n📚අරණකට පෙම් බැද\n\n🔎 .12book\📚ජනාධිපති තාත්තා\n\n🔎 .13book\n📚පිපියන් දාස්පෙති\n\n🔎 .14book\n📚වනගත වීරයෝ\n\n🔎 .15book\n📚මනමාල මුවැත්තී\n\n🔎 .16book\n📚සුදු රෙදි හොරා\n\n🔎 .17book\n📚ලොවීනා\n\n🔎 .18book\n📚පවුකාරයාට ගල් ගැසීම\n\n🔎 .19book\n📚ආදරෙයි බුබුළු\n\n🔎 .20book\n📚අහම්බ කාරක\n\n*⏱දිනෙන් දින මෙම ලැයිස්තුව Update වේ පොත් 2500ක් ඇතුලත් කිරීම අරමුණ වේ📑*", rowId:"rowid10"}
        {title: '📑APK ලැයිස්තුව   | 👩‍🦰APK-LIST!', description: "⚙APK ලැයිස්තුව.", rowId:"rowid9"}
       ]
       
       const sections = [{title: "Command Panel", rows: rows}]
       
       const button = {
        buttonText: 'Click Me',
        description: "👩‍🦰Amazone Alexa මූලික විධාන ලැයිස්තු - Command panel",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));

if (Config.WORKTYPE == 'public') {

Amazone.addCommand({pattern: 'menu', fromMe: false, dontaddCommandList:true}, (async (message, match) => {
// send a list message!
    const rows = [
        {title: '📑මූලික උදව් | MAIN HELP!', description: "⚙Bot පිළිබද අවබෝධයක් සහ මූලික උදව්.", rowId:"rowid1"},
        {title: '📑සම්පූර්ණ විධාන ලැයිස්තුව | ALL COMMANDS!', description: "⚙සම්පූර්ණ විධාන ලැයිස්තුව.", rowId:"rowid2"},
        {title: '📑Logo සැකසීම | LOGO CMD!', description: "⚙Logo සැකසීමෙ විධාන.", rowId:"rowid3"},
        {title: '📑මාධ්‍ය මෙවලම් | MEDIA CMD!', description: "⚙එය මාධ්‍ය මෙවලම් 25+ ඇතුලත් විධාන ලැයිස්තුව.", rowId:"rowid4"},
        {title: '📑බාගත කිරීම් | DOWNLOAD CMD!', description: "⚙එය මාධ්‍ය බාගත කිරීම් ඇතුලත් විධාන ලැයිස්තුව.", rowId:"rowid5"},
        {title: '📑පරිපාලක විධාන | ADMIN LIST!', description: "⚙පරිපාලක වරුන්ගෙ විධාන ලැයිස්තුව ලබා ගැනීම.", rowId:"rowid6"},
        {title: '📑ඇනිම් ලැයිස්තුව | ANIME PACK!', description: "⚙Ramdom ඇනිම් ලැයිස්තුව.", rowId:"rowid7"},
        {title: '📑මීම් ලැයිස්තුව   | MEME PACK!', description: "⚙මීම් සැකසීමෙ ලැයිස්තුව.", rowId:"rowid8"},
        {title: '📑Ttp ලැයිස්තුව   | TTP LIST!', description: "⚙TTP ලැයිස්තුව.", rowId:"rowid9"}
       ]
       
       const sections = [{title: "Command Panel", rows: rows}]
       
       const button = {
        buttonText: 'Click Me!',
        description: "👩‍🦰Amazone Alexa මූලික විධාන ලැයිස්තු",
        sections: sections,
        listType: 1
       }
       
       await message.client.sendMessage(message.jid, button, MessageType.listMessage)
    
    }));
}
