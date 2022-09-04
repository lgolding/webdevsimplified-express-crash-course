const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

function logger(req, res, next) {
  console.log(`Request to URL: ${req.originalUrl}`);
  next();
}

app.use(logger);
app.use(express.static("public"));

app.get("/", logger, (req, res) => {
  res.render("index", { text: "World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(port, () => console.log(`Listening on port ${port}...`));
