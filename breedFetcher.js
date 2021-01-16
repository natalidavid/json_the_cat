const request = require('request');

let arg = process.argv[2];
// console.log(arg);


const callback = function(error, response, body) {
  //checking for the error first, then logging the error and returning it
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  //parsing the body because otherwise an object
  if (!data.length) {
    //if data.length === 0, there's nothing inside an array
    console.log("Cat not found");
    return;
  }

  // console.log(typeof data);
  // const catObj = data[0]
  for (cat of data) {
    console.log('\n', cat.name); //new line, to make it easier to read
    console.log(cat.description); //accessing only .description value inside an object
  }
  // console.log(catObj.description);
  // console.log(data.length);
}

request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, callback);
//we coudld've written this callback inline, too

// console.log("We're done!");
