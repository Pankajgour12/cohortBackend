const express = require("express");

const indexRoutes = require("./routes/index.routes");
const app = express();

app.use((req, res, next) => {
  console.log("This middleware is b/t app and routes");
  next();
});

app.use("/", indexRoutes);

module.exports = app;
