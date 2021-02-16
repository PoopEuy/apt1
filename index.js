const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

// const usersRouter = require("./src/routes/users");
const nojsUsersRouter = require("./src/routes/nojs");
const energyRouter = require("./src/routes/energy");
const dockCellRouter = require("./src/routes/dockCell");
const pvRouter = require("./src/routes/pv");
const statisticsRouter = require("./src/routes/statistics");
const loggerRouter = require("./src/routes/logger");
const SericeCallRouter = require("./src/routes/serviceCall");
const queuRaspi = require("./src/routes/queuRaspi");
const statusProgramRouter = require("./src/routes/statusProgram");
const capacityRouter = require("./src/routes/capacity");
const vendorsRouter = require("./src/routes/vendors");
const ticketRouter = require("./src/routes/ticket");
const progressRouter = require("./src/routes/progress");
const cutoffRouter = require("./src/routes/cutoff");
const exportsRouter = require("./src/routes/export");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: true }));
//route
// app.use("/api/users", usersRouter);
app.use("/api/nojs", nojsUsersRouter);
app.use("/api/energy", energyRouter);
app.use("/api/dockcell", dockCellRouter);
app.use("/api/pv", pvRouter);
app.use("/api/statistics", statisticsRouter);
app.use("/api/logger", loggerRouter);
app.use("/api/servicecall", SericeCallRouter);
app.use("/api/raspi", queuRaspi);
app.use("/api/statusprogram", statusProgramRouter);
app.use("/api/capacity", capacityRouter);
app.use("/api/vendors", vendorsRouter);
app.use("/api/ticket", ticketRouter);
app.use("/api/progress", progressRouter);
app.use("/api/cutoff", cutoffRouter);
app.use("/api/export", exportsRouter);

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () =>
  console.log(`Server Running on : http://localhost:${PORT}`)
);
