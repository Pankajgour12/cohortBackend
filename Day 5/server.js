const express = require("express");

const connectToDB = require("./src/db/db");
connectToDB();

const app = express(); // server Create
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello Cohort");
  
});

// POST  method create

app.post("/notes",(req, res) => {
    const { title, content } = req.body;

    console.log(title, content);
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
