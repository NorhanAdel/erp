const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes/orgnization");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const orgnizationtRoutes = require("./routes/orgnization");
const agentRout = require("./routes/agent");
const orgadmin = require("./routes/orgnizationadmin");
const activites = require("./routes/activits");

const ConnectDB = require("./db/config");
dotenv.config();
ConnectDB();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// app.use("/api", routes);
app.use("/orgnization", orgnizationtRoutes);
app.use("/agency", agentRout);
app.use("/orgadmin", orgadmin);
app.use("/activites", activites);
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
