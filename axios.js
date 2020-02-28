
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
            
      await fs.writeFile('ysense.html', html, function (err) {
      if (err) throw err;
      console.log('guardado ysense.htm!');
      });
          
    } catch (error) {
      //console.error(error)
      console.log("error");
    }
  }

extraerysense();

//$('.dataTables_wrapper')[0]