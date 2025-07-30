const express = require('express')

const cookieParsar = require("cookie-parser")



const app= express()
app.use(express.json())
app.use(cookieParsar())




module.exports=app