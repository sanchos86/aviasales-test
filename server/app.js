const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.NODE_ENV || 8080;

app.use(cors());

app.get("*", (req, res) => {
  return res.json(require("./tickets"));
});

app.listen(port);
