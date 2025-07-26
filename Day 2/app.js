const express=require('express');

const app=express()// server create ho gya hai

/* 
req.body 
req.query
req.params

req.headers & req.cookies





*/

app.get('/home',(req,res)=>{ // home page ka route
res.send("welcome to the home page")

})
app.get('/about',(req,res)=>{ // about page ka route
    res.send("welcome to the about page")
    
    })

    app.get ('/contact',(req,res)=>{
         // contact page ka route
        res.send("welcome to the contact page")
        
        })


app.listen(3000,()=>{
    console.log("server is running on port 3000")
 })