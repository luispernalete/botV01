//import axios from 'axios';
//import cheerio from 'cheerio';
const cheerio = require('cheerio');
const axios = require('axios').default;


async function scrapeRealtor() {
  const html = await axios.get('https://www.realtor.com/news/real-estate-news/');

  
  const $ = await cheerio.load(html.data);
  let data = [];

  

  $('.site-main article').each((i, elem) => {
    if (i <= 3) {
      data.push({
        image: $(elem).find('img.wp-post-image').attr('src'),
        title: $(elem).find('h2.entry-title').text(),
        excerpt: $(elem).find('p.hide_xxs').text().trim(),
        link: $(elem).find('h2.entry-title a').attr('href')
      })
    }
  });

  console.log(data);
}