const Discord = require("discord.js");
const  client = new Discord.Client();
const embed = new Discord.RichEmbed();

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
	
    .addField("ID","123123123",true)
	//.addBlankField(true)
	
    .addField("Paga", "$$", true)
    .addField("Nivel","3", true)
    	
    ;
    message.channel.send({embed});
   	
	
  }
});




client.login("Njc4OTc3NDcyMTI1MjA2NTI4.Xkq0rg.B7YPcp_aMa5RBdir23ONfiUrWmM");

 

  