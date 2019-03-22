const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const accountSid = "ACa12d226ed28efe2f7d4fd199ac242abb";
const authToken = "d0751fad28cac67c7231ffe72d06afb1";
const client = require("twilio")(accountSid, authToken);

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.post("/info", (req, res) => {
  const info = req.body.info;
  const number = req.body.number;
  client.messages
    .create({
      body: info,
      from: "+447480609646",
      to: number
    })
    .then(
      message => {
        console.log(message.sid);
        res.send(200);
      },
      () => {
        res.send(400);
      }
    );
});
app.listen(8000, function() {
  console.log("Listening on port 8000");
});
