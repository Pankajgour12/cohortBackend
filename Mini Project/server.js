const express = require("express");

const app = express(); // sever Create

app.use(express.json());
let notes = [];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

/* POST /notes -=> Create a new note  {title , content} */
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({
    message: "Note Created",
  });
});

/* DELETE   /notes/: _index_ */

app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  delete notes[index];
  res.json({
    message: "Note Deleted successfully",
  });
});


/*  PATCH /notes/:id */

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  notes[index] = req.body;
  res.json({
    message: "Note Updated successfully",
  });
})
// Server Start

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
