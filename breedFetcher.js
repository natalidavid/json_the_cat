const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const catObj = data[0];
    
    if (!data.length) {
      callback(null, "Cat not found!");
      return;
    } else {
      callback(null, catObj.description);
    }
  });
};

module.exports = { fetchBreedDescription };