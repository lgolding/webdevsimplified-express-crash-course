const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("User List");
});

userRouter.get("/new", (req, res) => {
  res.send("New User Form");
});

userRouter.post("/", (req, res) => {
  res.send("Created new user");
});

userRouter.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ${userId}`);
});

module.exports = userRouter;
