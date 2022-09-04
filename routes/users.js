const express = require("express");
const userRouter = express.Router();

const users = [
  { "name": "Larry" },
  { "name" : "Terisa" }
];

userRouter.get("/", (req, res) => {
  res.send("User List");
});

userRouter.get("/new", (req, res) => {
  res.send("New User Form");
});

userRouter.post("/", (req, res) => {
  res.send("Created new user");
});

userRouter
  .route("/:id")
  .get((req, res) => {
    res.send(`Get User ${req.params.id}: ${req.user.name}`);
  })
  .put((req, res) => {
    res.send(`Update User ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete User ${req.params.id}`);
  });

  userRouter.param("id", (req, res, next, id) => {
    console.log(`param middleware handling id ${id} for ${req.method}.`);
    req.user = users[id];
    next();
  })

module.exports = userRouter;
