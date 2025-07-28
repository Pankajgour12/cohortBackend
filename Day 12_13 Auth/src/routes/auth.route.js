const express = require("express");

const userModel = require("../models/user.model");

const router = express.Router();

/* 
POST/register
POST/login
POST/user
POST/logout

*/
router.get("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.create({
    username,
    password,
  });

  res.status(201).json({
    message: "User registed successfully",
    user,
  });
});

module.exports = router;
