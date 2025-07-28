const express = require("express");

const authRoutes = require("./routes/auth.route");

const app = express();
app.use(express.json());
/* 
 POST/auth/register
 POST/auth/login
 GET/auth/user
 GET/auth/logout
*/
app.use("/auth", authRoutes);

module.exports = app;
