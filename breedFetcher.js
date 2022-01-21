const breed = process.argv.slice(2);
const request = require("request");
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request(url,function(error, response, body) {

  const data = JSON.parse(body);
  console.log(data[0].description);

});
