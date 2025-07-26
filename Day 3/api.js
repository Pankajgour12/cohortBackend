const express=require('express');




const app=express();// server create kr rahe hai 

app.get('/home',(req,res)=>{ // home page ka route
res.send("welcome to the home page")

})
app.get('/about',(req,res)=>{ // about page ka route
    res.send("welcome to the about page")
    
    })

    app.get ('/contact',(req,res)=>{
         // contact page ka route
        res.send("welcome to the contact page with the ")
        
        })

        




app.listen(3000,()=>{

console.log("server is running")
})


