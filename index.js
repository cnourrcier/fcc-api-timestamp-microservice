// index.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint... 
app.get("/api/:date?", function (req, res) {
  let { date } = req.params;
  if (!date) {
    date = new Date(); // if no date param, datetime is current datetime.
  }
  if (/^\d+$/.test(date)) { // Check if date is only digits 0-9
    const unixTime = parseInt(date); // Convert to number type
    const utcTime = new Date(unixTime).toUTCString(); // Convert date to the RFC 7231 format UTC
    res.json({ unix: unixTime, utc: utcTime });
  } else if (new Date(date) != 'Invalid Date') { // If date format is valid
    const unixTime = Date.parse(date); // Convert date to unix (number of milliseconds since the epoch)
    const utcTime = new Date(date).toUTCString(); // Convert date to the RFC 7231 format UTC
    res.json({ unix: unixTime, utc: utcTime });
  } else {
    res.json({ error: "Invalid Date" })
  }
});

// Listen on port set in environment variable or default to 3000
const listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
