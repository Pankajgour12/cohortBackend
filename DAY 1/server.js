/* cat-me = ek package hai */
/* npm i cat-me  */
/* var catMe = require('cat-me')
console.log(catMe()) */






/* http= module hai  */
const http=require('http');

 const server= http.createServer((req,res)=>{
    res.end("hello world  from the server")// response sent krte hai
 })  // server Create ho jata hai

 server.listen(3000,()=>{
    console.log("server is running on port 3000")
 })
