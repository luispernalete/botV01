

const cheerio = require('cheerio');
const axios = require('axios').default;
const axiosCookieJarSupport = require('axios-cookiejar-support').default;
const tough = require('tough-cookie');

axiosCookieJarSupport(axios);
const cookieJar = new tough.CookieJar();
const fs = require('fs');

async function extraerysense(){

    try {
        let ax = await axios.get('https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735',{
            jar: cookieJar, // tough.CookieJar or boolean
            withCredentials: true, // If true, send cookie stored in jar
          });
     
      const html = ax.data;
      const che = await cheerio.load(html);
  
      console.log(ax.data);
            
      await fs.writeFile('ysense.html', html, function (err) { // guarda un archivo html

      if (err) throw err;
      console.log('guardado ysense.htm!');
      
      });
          
    } catch (error) {
      //console.error(error)
      console.log("error");
    }
  }

extraerysense();



//comandos con jquery
//$('.a-primary')
//$('.dataTables_wrapper')[0]
//$('.a-primary') extrae el listado de task

//$('.dataTables_paginate span a')[0] extrae span 1 de los botones de abajo
//$('.dataTables_paginate span a')[1] extrae span 2 de los botones de abajo

//$('.dataTables_paginate span a')[0].click() click al boton 1
//$('.dataTables_paginate span a')[1].click() click al boton 2