const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("OK");
});
app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
