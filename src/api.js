const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

app.get("/", (req, res) => {
  res.json({
    hello: "hi!",
  });
});

module.exports = app;
module.exports.handler = serverless(app);
