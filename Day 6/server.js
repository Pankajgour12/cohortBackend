const express = require('express')
const connectToDB = require('./src/db/db')
const noteModel = require('./src/models/note.model')

const app= express()
app.use(express.json())


app.post('/notes',async(req,res)=>{
const {title,content}=req.body
console.log(title,content)

await noteModel.create({title,content})

res.json({
    message:"Note Created Successfully"
})



})

app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find()
res.json({
    message:"Notes Fetched Successfully",
    notes
})
})

app.delete('/notes/:id',async(req,res)=>{
    const noteId =req.params.id

   await noteModel.findOneAndDelete({_id:noteId})
 res.json({
        message:"Note Deleted Successfully"
    })

    })
    
   
app.patch('/notes/:id',async(req,res)=>{
    const noteId =req.params.id
    const {title}=req.body
    await noteModel.findOneAndUpdate({_id:noteId},{title})
    res.json({
        message:"Note Updated Successfully"
    })

})


connectToDB()
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})