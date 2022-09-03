const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("User List");
});

userRouter.get("/new", (req, res) => {
  res.send("New User Form");
});

module.exports = userRouter;
