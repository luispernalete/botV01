const Discord = require("discord.js");
const  client = new Discord.Client();
const embed = new Discord.RichEmbed();
const fs = require('fs');

const rp = require('request-promise');


const url = 'https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735';


client.on("ready", () => {
   console.log("Ready!!!!!");

		

    client.user.setPresence( {
       status: "online",
       game: {
           name: "como taskean",
           type: "WATCHING" //viendo
		   //("PLAYING" jugando, "WATCHING" viendo, "LISTENING" escuchando y "STREAMING" tranmision),

       }
   } );

})





rp(url)
  .then(function(html){
    //success!
    //console.log(html);

	   fs.writeFile('html.html', html, (err) => {
  if (err) throw err;
  console.log('Archivo html.txt actualizado Satisfactoriamente');
});



  })
  .catch(function(err){
    //handle error
  });



client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("ping2")) {
    message.channel.send({embed: {
	  color: 3447003,
      description: "Esto es un simple mensaje embed."

    }});

  }
});//fin ping2

client.on("message", (message) => {

  if (message.content.startsWith("go")) {

  var id = "123123123";
  var nivel = "123";
  var paga = "$";

  const embed = new Discord.RichEmbed()
    .setTitle("Nombre del task")
	.setURL("https://github.com/CraterMaik")
    .setAuthor("GrupoTaskero","http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png")
	//.setAuthor("GrupoTaskero [GrupoTaskero](https://github.com/CraterMaik)")
    .setColor(0xF20C0C)
    //.setDescription("Este es el cuerpo principal del texto, puede contener 2048 caracteres.")
    .setFooter("Pie de página, puede contener 2048 caracteres", client.user.avatarURL)
    //.setImage(message.author.avatarURL)
    .setThumbnail("http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png")
    .setTimestamp()
    .setURL("https://github.com/CraterMaik")

    .addField("ID",id,true)
	//.addBlankField(true)

    .addField("PAGA", paga, true)
    .addField("NIVEL",nivel, true);




  }
  message.channel.send({embed});

});

client.login("Njc4OTc3NDcyMTI1MjA2NTI4.Xkq0rg.B7YPcp_aMa5RBdir23ONfiUrWmM");

 /*<?php echo '<p>Hola Mundo</p>';
  phpinfo();
 ?>*/
