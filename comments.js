// Create a web server
// Create a route for /comments
// Create a route for /comments/new
// Create a route for /comments/:id

const express = require("express");
const app = express();
const port = 3000;

app.get("/comments", (req, res) => {
  res.send("This is the comments page.");
});

app.get("/comments/new", (req, res) => {
  res.send("This is the new comments page.");
});

app.get("/comments/:id", (req, res) => {
  res.send(`This is the comments page for id: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});