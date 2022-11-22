const http = require('http');
const fs = require('fs');

const points = JSON.parse(fs.readFileSync('poi.json'));

http
  .createServer(function (req, res) {
    setTimeout(() => {
      res.writeHead(200, {'content-type': 'application/json'});
      res.end(JSON.stringify(points, null, ' '));
    }, 1200);
  })
  .listen(8080);
