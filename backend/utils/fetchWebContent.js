
const axios = require("axios");
const cheerio = require("cheerio");

const fetchWebContent = async (url) => {
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const text = $("body").text();
  return text.replace(/\s+/g, " ").trim();
};

module.exports = fetchWebContent;
