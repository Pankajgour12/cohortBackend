const express = require("express");

const authRoutes = require("./routes/auth.route");
 const cookieParsar =require("cookie-parser")


const app = express();
app.use(express.json());
app.use(cookieParsar())


/* 
 POST/auth/register
 POST/auth/login
 GET/auth/user
 GET/auth/logout
*/
app.use("/auth", authRoutes);

module.exports = app;
