const express = require("express");
const userModel = require("../models/user.model");

const router = express.Router();

/* 
POST / register  req.body ={ username , password}

*/

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const isUser = await userModel.findOne({
    username,
  });
  if (isUser) {
    return res.status(409).json({
      message: "User is already Exists",
    });
  }

  const newUser = await userModel.create({ username, password });

  const token = jwt.sing({ id: user_id }, process.env.JWT_SECRET);

  res.cookie("Token", token);

  res.status(201).json({
    message: "User Registered successfully",
    newUser,
  });
});

module.exports = router;
