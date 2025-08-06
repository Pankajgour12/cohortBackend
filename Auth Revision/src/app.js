const express = require('express')

const cookieParsar = require("cookie-parser")
const authRoutes = require('./routes/auth.routes')



const app= express()
app.use(express.json())
app.use(cookieParsar())


app.use('/auth',authRoutes)

module.exports=app 