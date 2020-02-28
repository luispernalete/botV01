const Discord = require("discord.js");
const  client = new Discord.Client();
const embed = new Discord.RichEmbed();
const fs = require('fs');


//colocar estatus y presencia en el bot
function presencia(){
client.user.setPresence( {
       status: "online",
       game: {
           name: "como taskean",
           type: "WATCHING",
       }
   } );
}

function mostrar(){
    console.log("temporizador");
    }

//cuando se inicia el bot
client.on("ready", () => {
   console.log("Ready!!!!!");
   presencia();
   
})// fin de ready

//envento messange
client.on("message", (message) => {
    if (message.content.startsWith("go")) {
    
      //const temporizador = client.setInterval(mostrar(),20000);

      //var embed = muestraMensaje("5454","nombre del taskss","25 cents","https://www.google.com","2");
      
      message.channel.send(muestraMensaje("5454","nombre del taskss","25 cents","https://www.google.com","2"));
         
      
    }
  });//fin de evento menssage
  
  client.on("message", (message) => {
    if (message.content.startsWith("stop")) {
    
      clearInterval(temporizador)
               
    }
  });//fin de evento menssage


//notifica el task
function muestraMensaje(id2,nombre2,paga2,url2,nivel2) {

    var nombre = nombre2;
    var nivel = nivel2;
    var id = id2;
    var url = url2;
    var pago = paga2;

    const embed = new Discord.RichEmbed() 
    .setTitle(nombre)
    .setURL(url)
    .setAuthor("GrupoTaskero","http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png")
    //.setAuthor("GrupoTaskero [GrupoTaskero](https://github.com/CraterMaik)")
    .setColor(0xF20C0C)
    .setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 2048 caracteres", "http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png")
    //.setImage("http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png")
    .setThumbnail("http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png")
    .setTimestamp()
    //.setURL("https://github.com/CraterMaik")
    
    .addField("ID",id,true)
    //.addBlankField(true)
    
    .addField("Paga", pago, true)
    .addField("Nivel",nivel, true);

  return embed;
}


client.login("Njc4OTc3NDcyMTI1MjA2NTI4.Xkq0rg.B7YPcp_aMa5RBdir23ONfiUrWmM");