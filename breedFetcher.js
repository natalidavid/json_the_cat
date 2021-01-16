const request = require('request');

let arg = process.argv[2];
// console.log(arg);


const callback = function(error, response, body) {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  if (!data.length) {
    console.log("Cat not found");
    return;
  }

  // console.log(typeof data);
  // const catObj = data[0]
  for (cat of data) {
    console.log('\n', cat.name);
    console.log(cat.description);
  }
  // console.log(catObj.description);
  // console.log(data.length);
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, callback);

// console.log("We're done!");