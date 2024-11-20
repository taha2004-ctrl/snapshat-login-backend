const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const AccountApiRoutes = require("../routes/api/Accounts");
const path = require("path");
require("dotenv").config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB database connected ...");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (request, response) => {
  response.send(`hello taha`);
});

app.use("/api/account", AccountApiRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
