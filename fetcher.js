const url = process.argv[2];
const path = process.argv[3];

const fs = require('fs')

const request = require('request');


request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  try {
    fs.writeFileSync(path, body)
    //file written successfully

  } catch (err) {
    console.error(err)
  }
  console.log(`Downloaded and saved ${response['headers']['content-length']}bytes to${path}`)
});
// request.setEncoding('UTF8');
