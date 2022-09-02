const express = require("express");
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get("/", (req, res) => {
  console.log(`Called GET on ${req.url}`);
  res.send(`Hello from GET on ${req.url}`);
  req.url;
});
