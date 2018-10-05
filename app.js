const express = require("express");
const bodyParser = require("body-parser");
const meetupInfoController = require("./controllers/meetup").meetupInfo;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/meetup/next", meetupInfoController);

module.exports = app;
