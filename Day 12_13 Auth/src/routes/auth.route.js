const express = require("express");

const userModel = require("../models/user.model");

const router = express.Router();

/* 
POST/register
POST/login
POST/user
POST/logout

*/
router.post("/register", async (req, res) => {
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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username: username,
  });

  if (!user)
    return res.status(401).json({
      message: "User Account is not Found [invalid username]",
    });

  const isPasswordValid = password == user.password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Password is Invalid",
    });
  }

  res.status(200).json({
    message: "User LoggedIn Successfully",
  });
});
module.exports = router;
