const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  let readStream = fs.createReadStream(__dirname + '/todos.ndjson');

  //setup headers
  res.writeHead(200, { 'Content-Type': 'application/ndjson' });

  readStream.on('open', () => {
    readStream.pipe(res); //pipe stream to response object
  });
});

app.listen(3321, () => {
  console.log('Example app listening on port 3321!');
});
