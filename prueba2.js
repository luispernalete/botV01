const axios = require('axios')
const cheerio = require('cheerio');
const fs = require('fs');


async function extraerysense(){

  try {
      let ax = await axios.get('https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735',{
      withCredentials: true});
   
    const html = ax.data;
    const che = cheerio.load(html);

    console.log(ax.data);
    console.log("bien!!");
	
	fs.writeFile('ysense.html', html, function (err) {
	if (err) throw err;
	console.log('guardado ysense.htm!');
	});
		
  } catch (error) {
    //console.error(error)
    console.log("error");
  }
}// fin de extraer ysense


extraerysense();
//console.log(getysense);
//countBreeds()

/*
const getysense = () => {
  try {

return axios.get('https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735')

  } catch (error) {
    //console.error(error)
    console.log("error");
  }
}

const getysense2 = () => {
  try {

return axios.get('https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735')

  } catch (error) {
    console.error(error)
    console.log("error");
  }
}

*/
/* let ax = await Axios.request({
      url: "https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735",
      method: "get",
      headers:{
          Cookie: "cookies_enabled=true;"
      },
      withCredentials: true 
      
 })*/


   /* let ax = await axios.get('https://tasks.figure-eight.work/channels/clixsense/tasks?uid=70000735',{
     headers: {
      "x-requested-with": "XMLHttpRequest",
      cookie,
      "cookies_enabled": true
  }
  
  });
*/