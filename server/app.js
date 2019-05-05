const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8080;
const currencyConverterApiKey = process.env.CURRENCY_CONVERTER_API_KEY;

app.use(cors());

app.get("/api/convert", (req, res, next) => {
  const query = req.query;
  let queryString = "";
  Object.keys(query).forEach((el) => {
    const paramName = encodeURIComponent(el);
    const paramValue = encodeURIComponent(query[el]);
    queryString += `${paramName}=${paramValue}&`;
  });
  return axios.get(`https://free.currconv.com/api/v7/convert?${queryString}apiKey=${currencyConverterApiKey}`)
    .then(response => res.json(response.data))
    .catch(next);
});

app.get("*", (req, res) => {
  return res.json(require("./tickets"));
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({ message });
});

app.listen(port);
