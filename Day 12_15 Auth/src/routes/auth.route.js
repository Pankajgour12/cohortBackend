const express = require("express");

const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

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



  const token = jwt.sign({
    id: user._id,

  },process.env.JWT_SECRET)

   res.cookie("token",token)


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


router.get('/user',async(req,res)=>{
  const {token}=req.cookies
  if(!token){
    return res.status(401).json({
      message: "Unauthorized",
    })
  }

  try{
  const decode = jwt.verify(token, process.env.JWT_SECRET)

  const user = await userModel.findOne({
    _id:decode.id
  }).select("-password -__v")


  res.status(200).json({
    message: "User Data fetched Successfully",
    user
  })
  
}catch(err){
  return res.status(401).json({
    message: "Unauthorized - Invalid token",
  })
}
})





module.exports = router;
