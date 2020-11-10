const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRouter = require("./src/routes/users");
const nojsUsersRouter = require("./src/routes/nojs");
const energyRouter = require("./src/routes/energy");
const dockCellRouter = require("./src/routes/dockCell");
const pvRouter = require("./src/routes/pv");
const statisticsRouter = require("./src/routes/statistics");
const loggerRouter = require("./src/routes/logger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const { nojsLoggerModel } = require("./src/models");

app.use(cors());
app.use(bodyParser.json());

//route
app.use("/api/users", usersRouter);
app.use("/api/nojs", nojsUsersRouter);
app.use("/api/energy", energyRouter);
app.use("/api/dockcell", dockCellRouter);
app.use("/api/pv", pvRouter);
app.use("/api/statistics", statisticsRouter);
app.use("/api/logger", loggerRouter);

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/test", (req, res) => {
  nojsLoggerModel
    .findAll({
      include: ["nojs", "dockCell", "energy"],
    })
    .then((result) => {
      return res.json({
        status: "success",
        data: result,
      });
    })
    .catch((err) => {
      return res.json({
        status: "error",
        data: err,
      });
    });
});

app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
