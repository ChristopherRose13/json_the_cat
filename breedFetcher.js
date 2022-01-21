const request = require("request");
// let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetchBreedDescription = function(breedName, callback) {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url,function(error, response, body) {

    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const breed = data[0];
    if (!breed) {
      callback("Breed not found", null);
      return;
    }

    callback(null, breed.description);
    return;

  });
};

module.exports = { fetchBreedDescription };