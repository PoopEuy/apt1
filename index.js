const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const usersRouter = require("./src/routes/users");
const nojsUsersRouter = require("./src/routes/nojs");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api/users", usersRouter);
app.use("/api/nojs", nojsUsersRouter);

app.get("/", (req, res) => {
  res.send("OK");
});
app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
