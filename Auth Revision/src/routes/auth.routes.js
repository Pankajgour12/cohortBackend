const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

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
      message: "User is already Exists"
    });
  }

  const newUser = await userModel.create({ username, password });

   const token = jwt.sign({
      id: user._id,
  
    },process.env.JWT_SECRET)
  

  res.cookie("Token", token);

  res.status(201).json({
    message: "User Registered successfully",
    newUser,
  });
});

router.post('/user',async(req,res)=>{
  const token = req.cookies.Token

  if(!token){
    return res.status(401).json({
    message:"Unauthorized token not found"

  })
  }

try{
  const decoded = jwt.verify(token,process.env.JWT_SECRET)


const user = await userModel.findOne({
  _id: decoded.id
})
 return res.status(200).json({
  message:" User data fetched successfully",
  user
 })


}
catch(err){
res.status(401).json({
  message:" Unathorized invalid token"
})
}
 
})

module.exports = router;
