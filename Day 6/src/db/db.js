const mongoose = require('mongoose')


function connectToDB(){
 mongoose.connect('mongodb+srv://pankajgour:kdOEX6o1igZcZcQ9@cluster0.e6kqszu.mongodb.net/Cohort')
 .then(()=>{
  console.log("Conncted to Db")
 })

}
module.exports = connectToDB