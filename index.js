const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const usersRouter = require("./src/routes/users");
const nojsUsersRouter = require("./src/routes/nojs");
const { Test } = require("./src/models");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/api/users", usersRouter);
app.use("/api/nojs", nojsUsersRouter);

app.get("/", (req, res) => {
  res.send("OK");
});
app.post("/test", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const user = await Test.findOne({
    where: { email },
  });
  if (user) {
    return res.status(409).json({
      status: "error",
      message: "Email already exist",
    });
  }

  const data = {
    firstName,
    lastName,
    email,
  };

  const createdUser = await Test.create(data);
  return res.json({
    status: "success",
    data: {
      id: createdUser.id,
    },
  });
});
app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
